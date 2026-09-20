CREATE TYPE public.app_role AS ENUM ('customer', 'partner', 'admin');
CREATE TYPE public.issue_status AS ENUM ('due', 'paid', 'action_needed', 'urgent', 'under_review');
CREATE TYPE public.partner_status AS ENUM ('pending', 'approved', 'declined');

CREATE TABLE public.profiles (
  user_id uuid PRIMARY KEY,
  full_name text,
  phone text,
  account_type text NOT NULL DEFAULT 'individual',
  business_name text,
  email_verified boolean NOT NULL DEFAULT false,
  phone_verified boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own profile" ON public.profiles FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL DEFAULT 'customer',
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

CREATE TABLE public.vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  plate text NOT NULL CHECK (char_length(plate) BETWEEN 2 AND 12),
  state text NOT NULL CHECK (char_length(state) BETWEEN 2 AND 32),
  nickname text,
  monitoring_status text NOT NULL DEFAULT 'setup_required',
  autopay_enabled boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, plate, state)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.vehicles TO authenticated;
GRANT ALL ON public.vehicles TO service_role;
ALTER TABLE public.vehicles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own vehicles" ON public.vehicles FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  vehicle_id uuid REFERENCES public.vehicles(id) ON DELETE CASCADE NOT NULL,
  issue_type text NOT NULL,
  issuing_authority text,
  amount_cents integer CHECK (amount_cents IS NULL OR amount_cents >= 0),
  due_date date,
  status public.issue_status NOT NULL DEFAULT 'under_review',
  official_payment_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.issues TO authenticated;
GRANT ALL ON public.issues TO service_role;
ALTER TABLE public.issues ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own issues" ON public.issues FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  issue_id uuid REFERENCES public.issues(id) ON DELETE SET NULL,
  amount_cents integer NOT NULL CHECK (amount_cents >= 0),
  status text NOT NULL DEFAULT 'pending',
  processor_reference text,
  paid_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.payments TO authenticated;
GRANT ALL ON public.payments TO service_role;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own payments" ON public.payments FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  vehicle_id uuid REFERENCES public.vehicles(id) ON DELETE CASCADE,
  issue_id uuid REFERENCES public.issues(id) ON DELETE SET NULL,
  title text NOT NULL,
  document_type text NOT NULL,
  storage_path text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.documents TO authenticated;
GRANT ALL ON public.documents TO service_role;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own documents" ON public.documents FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  priority text NOT NULL DEFAULT 'normal',
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE ON public.alerts TO authenticated;
GRANT ALL ON public.alerts TO service_role;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own alerts" ON public.alerts FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users update own alerts" ON public.alerts FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.autopay_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  vehicle_id uuid REFERENCES public.vehicles(id) ON DELETE CASCADE,
  enabled boolean NOT NULL DEFAULT false,
  toll_limit_cents integer CHECK (toll_limit_cents IS NULL OR toll_limit_cents >= 0),
  ticket_limit_cents integer CHECK (ticket_limit_cents IS NULL OR ticket_limit_cents >= 0),
  approval_above_cents integer CHECK (approval_above_cents IS NULL OR approval_above_cents >= 0),
  toll_only boolean NOT NULL DEFAULT false,
  never_pay_disputed boolean NOT NULL DEFAULT true,
  require_uncertain_approval boolean NOT NULL DEFAULT true,
  consented_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.autopay_rules TO authenticated;
GRANT ALL ON public.autopay_rules TO service_role;
ALTER TABLE public.autopay_rules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own autopay rules" ON public.autopay_rules FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  business_name text NOT NULL,
  contact_name text NOT NULL,
  business_email text NOT NULL,
  phone text NOT NULL,
  business_type text NOT NULL,
  zip_code text NOT NULL,
  estimated_monthly_volume integer NOT NULL CHECK (estimated_monthly_volume >= 0),
  status public.partner_status NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.partner_applications TO authenticated;
GRANT ALL ON public.partner_applications TO service_role;
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Applicants create own application" ON public.partner_applications FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Applicants read own application" ON public.partner_applications FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_user_id uuid NOT NULL,
  customer_label text NOT NULL,
  plate_count integer NOT NULL DEFAULT 1 CHECK (plate_count > 0),
  status text NOT NULL DEFAULT 'pending',
  staff_code text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.referrals TO authenticated;
GRANT ALL ON public.referrals TO service_role;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Partners read own referrals" ON public.referrals FOR SELECT TO authenticated USING (auth.uid() = partner_user_id AND public.has_role(auth.uid(), 'partner'));

CREATE TABLE public.partner_payouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_user_id uuid NOT NULL,
  amount_cents integer NOT NULL CHECK (amount_cents >= 0),
  status text NOT NULL DEFAULT 'scheduled',
  period_start date NOT NULL,
  period_end date NOT NULL,
  paid_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.partner_payouts TO authenticated;
GRANT ALL ON public.partner_payouts TO service_role;
ALTER TABLE public.partner_payouts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Partners read own payouts" ON public.partner_payouts FOR SELECT TO authenticated USING (auth.uid() = partner_user_id AND public.has_role(auth.uid(), 'partner'));

CREATE INDEX vehicles_user_id_idx ON public.vehicles(user_id);
CREATE INDEX issues_user_id_idx ON public.issues(user_id);
CREATE INDEX issues_vehicle_id_idx ON public.issues(vehicle_id);
CREATE INDEX alerts_user_id_idx ON public.alerts(user_id);
CREATE INDEX referrals_partner_user_id_idx ON public.referrals(partner_user_id);
CREATE INDEX payouts_partner_user_id_idx ON public.partner_payouts(partner_user_id);