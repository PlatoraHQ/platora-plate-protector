export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      alerts: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message: string
          priority: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          priority?: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          priority?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      autopay_rules: {
        Row: {
          approval_above_cents: number | null
          consented_at: string | null
          enabled: boolean
          id: string
          never_pay_disputed: boolean
          require_uncertain_approval: boolean
          ticket_limit_cents: number | null
          toll_limit_cents: number | null
          toll_only: boolean
          updated_at: string
          user_id: string
          vehicle_id: string | null
        }
        Insert: {
          approval_above_cents?: number | null
          consented_at?: string | null
          enabled?: boolean
          id?: string
          never_pay_disputed?: boolean
          require_uncertain_approval?: boolean
          ticket_limit_cents?: number | null
          toll_limit_cents?: number | null
          toll_only?: boolean
          updated_at?: string
          user_id: string
          vehicle_id?: string | null
        }
        Update: {
          approval_above_cents?: number | null
          consented_at?: string | null
          enabled?: boolean
          id?: string
          never_pay_disputed?: boolean
          require_uncertain_approval?: boolean
          ticket_limit_cents?: number | null
          toll_limit_cents?: number | null
          toll_only?: boolean
          updated_at?: string
          user_id?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "autopay_rules_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          document_type: string
          id: string
          issue_id: string | null
          storage_path: string | null
          title: string
          user_id: string
          vehicle_id: string | null
        }
        Insert: {
          created_at?: string
          document_type: string
          id?: string
          issue_id?: string | null
          storage_path?: string | null
          title: string
          user_id: string
          vehicle_id?: string | null
        }
        Update: {
          created_at?: string
          document_type?: string
          id?: string
          issue_id?: string | null
          storage_path?: string | null
          title?: string
          user_id?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_issue_id_fkey"
            columns: ["issue_id"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      issues: {
        Row: {
          amount_cents: number | null
          created_at: string
          due_date: string | null
          id: string
          issue_type: string
          issuing_authority: string | null
          official_payment_url: string | null
          status: Database["public"]["Enums"]["issue_status"]
          user_id: string
          vehicle_id: string
        }
        Insert: {
          amount_cents?: number | null
          created_at?: string
          due_date?: string | null
          id?: string
          issue_type: string
          issuing_authority?: string | null
          official_payment_url?: string | null
          status?: Database["public"]["Enums"]["issue_status"]
          user_id: string
          vehicle_id: string
        }
        Update: {
          amount_cents?: number | null
          created_at?: string
          due_date?: string | null
          id?: string
          issue_type?: string
          issuing_authority?: string | null
          official_payment_url?: string | null
          status?: Database["public"]["Enums"]["issue_status"]
          user_id?: string
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "issues_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_applications: {
        Row: {
          business_email: string
          business_name: string
          business_type: string
          contact_name: string
          created_at: string
          estimated_monthly_volume: number
          id: string
          phone: string
          status: Database["public"]["Enums"]["partner_status"]
          user_id: string
          zip_code: string
        }
        Insert: {
          business_email: string
          business_name: string
          business_type: string
          contact_name: string
          created_at?: string
          estimated_monthly_volume: number
          id?: string
          phone: string
          status?: Database["public"]["Enums"]["partner_status"]
          user_id: string
          zip_code: string
        }
        Update: {
          business_email?: string
          business_name?: string
          business_type?: string
          contact_name?: string
          created_at?: string
          estimated_monthly_volume?: number
          id?: string
          phone?: string
          status?: Database["public"]["Enums"]["partner_status"]
          user_id?: string
          zip_code?: string
        }
        Relationships: []
      }
      partner_payouts: {
        Row: {
          amount_cents: number
          created_at: string
          id: string
          paid_at: string | null
          partner_user_id: string
          period_end: string
          period_start: string
          status: string
        }
        Insert: {
          amount_cents: number
          created_at?: string
          id?: string
          paid_at?: string | null
          partner_user_id: string
          period_end: string
          period_start: string
          status?: string
        }
        Update: {
          amount_cents?: number
          created_at?: string
          id?: string
          paid_at?: string | null
          partner_user_id?: string
          period_end?: string
          period_start?: string
          status?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount_cents: number
          created_at: string
          id: string
          issue_id: string | null
          paid_at: string | null
          processor_reference: string | null
          status: string
          user_id: string
        }
        Insert: {
          amount_cents: number
          created_at?: string
          id?: string
          issue_id?: string | null
          paid_at?: string | null
          processor_reference?: string | null
          status?: string
          user_id: string
        }
        Update: {
          amount_cents?: number
          created_at?: string
          id?: string
          issue_id?: string | null
          paid_at?: string | null
          processor_reference?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_issue_id_fkey"
            columns: ["issue_id"]
            isOneToOne: false
            referencedRelation: "issues"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_type: string
          business_name: string | null
          created_at: string
          email_verified: boolean
          full_name: string | null
          phone: string | null
          phone_verified: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          account_type?: string
          business_name?: string | null
          created_at?: string
          email_verified?: boolean
          full_name?: string | null
          phone?: string | null
          phone_verified?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          account_type?: string
          business_name?: string | null
          created_at?: string
          email_verified?: boolean
          full_name?: string | null
          phone?: string | null
          phone_verified?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string
          customer_label: string
          id: string
          partner_user_id: string
          plate_count: number
          staff_code: string | null
          status: string
        }
        Insert: {
          created_at?: string
          customer_label: string
          id?: string
          partner_user_id: string
          plate_count?: number
          staff_code?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          customer_label?: string
          id?: string
          partner_user_id?: string
          plate_count?: number
          staff_code?: string | null
          status?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          autopay_enabled: boolean
          created_at: string
          id: string
          monitoring_status: string
          nickname: string | null
          plate: string
          state: string
          user_id: string
        }
        Insert: {
          autopay_enabled?: boolean
          created_at?: string
          id?: string
          monitoring_status?: string
          nickname?: string | null
          plate: string
          state: string
          user_id: string
        }
        Update: {
          autopay_enabled?: boolean
          created_at?: string
          id?: string
          monitoring_status?: string
          nickname?: string | null
          plate?: string
          state?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "customer" | "partner" | "admin"
      issue_status: "due" | "paid" | "action_needed" | "urgent" | "under_review"
      partner_status: "pending" | "approved" | "declined"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["customer", "partner", "admin"],
      issue_status: ["due", "paid", "action_needed", "urgent", "under_review"],
      partner_status: ["pending", "approved", "declined"],
    },
  },
} as const
