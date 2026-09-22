# Platora Plate Protector

Build a complete, polished production-ready frontend for PLATORA / Platora Plates.

IMPORTANT: I attached a reference mockup. Treat the attached image as the PRIMARY VISUAL REFERENCE and match its visual language, proportions, sizing, spacing, density, typography scale, navigation scale, dashboard scale, and overall composition as closely as possible.

DO NOT redesign the visual identity into a generic AI-generated SaaS website.

The attached mockup establishes the design system.

DESIGN REQUIREMENTS

The website must feel:

• Clean

• Premium

• Modern

• Professional

• Spacious

• Trustworthy

• Technology-forward

• Easy to understand

Use the same overall visual direction as the reference:

• Black/dark navigation and hero

• White/light content areas

• Restrained blue-to-violet accent

• Thin, modern typography

• Clean white buttons

• Subtle borders and shadows

• Minimal rounded corners

• Professional dashboard UI

• Lots of breathing room

VERY IMPORTANT SIZING RULE:

DO NOT make the website oversized.

Do not use giant headings, giant buttons, giant cards, giant icons, oversized navigation, or excessive vertical spacing.

Do not create sections where only one headline or one card fills most of a desktop screen.

At normal desktop browser zoom, the homepage should have approximately the same information density and scale as the attached mockup.

The user should be able to see the navigation, complete hero messaging, plate-check interface, and surrounding visual context comfortably.

Use a wide desktop layout with controlled max-width containers.

The website should feel like a professional financial/compliance technology platform, NOT a landing-page template.

PAGES MUST BE REAL ROUTES.

Do NOT build one giant scrolling page where navigation buttons simply jump down the homepage.

Create separate routes/pages for:

/

Homepage

/how-it-works

How It Works

/pricing

Pricing

/partners

Partner introduction/application

/resources

Resources

/support

Support

/login

Login

/signup

Get Started / Account Creation

/check

Plate Check flow

/dashboard

Customer Dashboard prototype

/dashboard/vehicles

Vehicles

/dashboard/issues

Tickets, tolls and notices

/dashboard/payments

Payments

/dashboard/documents

Documents and proof

/dashboard/alerts

Alerts

/dashboard/settings

Settings

/dashboard/autopay

AutoPay settings

Partner dashboard and approved partner functionality should also be separated from the public customer experience.

PLATORA PRODUCT POSITIONING

Platora is a vehicle compliance, ticket, toll, registration, notice-management and proof platform.

The first product is Platora Plates.

Platora gives drivers and fleets one place to monitor and manage vehicle-related issues that are normally scattered across different systems.

Core public message:

“One dashboard.

All your vehicle issues.”

Supporting message:

“Track tickets, tolls, registration, and notices.

Pay manually or set AutoPay. Never miss a thing.”

Another important marketing message:

“Prevent small issues from becoming big problems.”

A $200 vehicle issue can become significantly more expensive through penalties, late fees and missed deadlines. Platora helps customers stay ahead.

Do NOT position Platora as merely a license plate lookup website.

It is an ongoing vehicle monitoring and compliance-management service.

HOMEPAGE

Reproduce the attached homepage structure closely.

Header:

PLATORA logo on left.

Navigation:

How It Works

Pricing

For Partners

Resources

Support

Right side:

Log in

Get Started

Keep the navigation thin, clean and horizontally spacious like the reference.

Hero:

“One dashboard.

All your vehicle issues.”

Make “vehicle issues.” use the blue/violet accent treatment shown in the reference.

Supporting copy:

“Track tickets, tolls, registration, and notices.

Pay manually or set AutoPay. Never miss a thing.”

Include the plate-check interface directly in the hero:

[ Enter license plate number ] [ Select state ] [ Check Plate ]

Below it:

“Limited free check. Create account to see results.”

The plate-check component should closely match the attached reference in width, height, spacing and proportions.

STATE SELECTION LOGIC

The state selector must NOT expose Platora’s internal operating architecture.

The selector should show states currently supported for direct checking.

Also include:

“Other State”

If the customer selects a directly supported state, continue through the normal plate-check/account flow.

If the customer selects “Other State,” still accept their plate and continue onboarding, but route them to an alternate coverage setup page.

Customer-facing wording can explain:

“Your state requires a different monitoring setup.”

Do NOT publicly explain the internal mailbox architecture, providers, scraping systems, OCR pipeline, state database, automation architecture, or other proprietary implementation details.

SECOND HOMEPAGE SECTION

Match the attached reference:

Small label:

STAY AHEAD

Heading:

“Prevent small issues

from becoming big problems.”

Supporting text:

“A $200 ticket today can turn into $1,000+ in penalties, late fees, and headaches. Platora helps you stay ahead.”

Four concise features:

Find Issues

Tickets, tolls, and notices.

Track & Organize

Everything in one clean dashboard.

Pay or AutoPay

Pay manually or set rules and relax.

Get Proof

Receipts and documents stored for you.

Place a clean dashboard preview beside this content just like the reference.

Do not make this section excessively tall.

HOW IT WORKS PAGE

Explain the customer experience simply without exposing proprietary infrastructure.

Use a clean visual sequence:

1. Add Your Vehicle

Enter your plate and state.

2. Create Your Account

Verify your email and phone and connect the vehicle to your account.

3. Activate Monitoring

Platora determines the appropriate available monitoring coverage for your vehicle.

4. Stay Informed

See tickets, tolls, registration notices and vehicle compliance issues in one dashboard.

5. Resolve Issues

Pay manually or enable AutoPay based on your rules.

6. Keep Your Proof

Receipts, documents and payment history remain organized in your account according to your storage plan.

Do NOT publicly label or explain internal Tier 1/Tier 2 architecture in technical detail.

If coverage differs by state, explain it only in customer-friendly language such as:

“Coverage methods vary by state and issuing authority. Platora automatically determines the appropriate available monitoring method for your vehicle.”

PRICING

USE THESE PRICES EXACTLY.

Do not use any older pricing.

1–10 vehicles

$89 per plate / month

11–50 vehicles

$59 per plate / month

51+ vehicles

$49 per plate / month

Present these as three clean pricing cards.

Recommended labels:

Individual & Small Operators

1–10 vehicles

$89 / plate / month

Medium Fleets

11–50 vehicles

$59 / plate / month

Large Fleets

51+ vehicles

$49 / plate / month

Pricing is determined by the customer’s own number of subscribed vehicles.

Do NOT expose partner commissions on the public pricing page.

Explain that plans include ongoing vehicle monitoring, dashboard organization, alerts, payment management and proof/document management subject to applicable coverage.

AUTOPAY

AutoPay is optional and OFF by default.

Customer intentionally enables it.

Allow customer rules such as:

• Auto-pay tolls under a chosen amount

• Auto-pay tickets under a chosen amount

• Require approval above a chosen amount

• Toll-only AutoPay

• Vehicle-specific rules

• Never automatically pay disputed items

• Require approval when verification is uncertain

Display clearly that AutoPay has a small processing/service fee per successfully handled item.

Use:

$2–$5 per AutoPay item

Do not invent a fixed fee if one has not been finalized.

The actual ticket, toll or government obligation is separate from Platora subscription and service fees.

CUSTOMER DASHBOARD

Create a polished dashboard prototype matching the visual style and scale shown in the attached reference.

Left sidebar:

Overview

Vehicles

Issues

Payments

Documents

Alerts

AutoPay

Settings

Help

Log Out

Top summary cards:

Open Items

Amount Due

Potential Savings

AutoPay Status

Recent Activity table columns:

Type

Plate

State

Date

Amount

Status

Action

Example records can include:

Speeding Violation

Toll

Meter Expired

Registration Notice

Suspension Warning

Each record should support statuses such as:

Due

Paid

Action Needed

Urgent

Under Review

Each item should open a detail view containing:

Issue type

Plate

State

Issuing authority

Amount

Due date

Status

Source/official payment information

Documents when available

Payment history

Receipt/proof

Pay button when applicable

VEHICLES

Support individual users and fleets.

Vehicle records should include:

Plate

State

Nickname/vehicle name

Monitoring status

Open issues

Amount due

AutoPay status

Allow multiple vehicles under one account.

FREE PLATE CHECK

The free experience is limited, not an unlimited free trial.

Flow:

Enter plate and state

→ create free account

→ email

→ phone

→ plate becomes connected to account

→ show limited available results

→ encourage activation of ongoing monitoring

The eventual backend should be able to prevent repeated free access using the same plate, email or phone.

For this frontend build, create the interface and states needed for this workflow without pretending that unavailable backend functionality is already live.

PARTNER PAGE

“For Partners” must NOT expose the entire Platora business model.

Do NOT publicly show:

• Exact 20% commission structure

• Detailed partner earnings calculations

• Internal acquisition economics

• Staff-code architecture

• Internal marketing strategy

• Internal referral attribution architecture

• Private operational details

The public partner page should simply explain that approved automotive businesses and professionals can partner with Platora and earn recurring revenue by introducing eligible customers.

Target partner categories can include:

Dealerships

Repair shops

Mechanics

Tow operators

Auto professionals

Rental operators

Fleet-related businesses

Primary CTA:

“Apply to Become a Partner”

Secondary CTA:

“Partner Login”

Partner application fields:

Business name

Contact name

Business email

Phone

Business type

ZIP code

Estimated vehicles/customers served monthly

After approval, the actual partner dashboard is PRIVATE.

PRIVATE PARTNER DASHBOARD

Create a protected dashboard UI capable of displaying:

Active plates

Monthly earnings

Next payout

Referral link

QR code

Customer status

Referral performance

Payout history

Business partner accounts can also support internal staff referral-code tracking.

Do not expose this dashboard publicly.

SUPPORT PAGE

Create a clean support center with:

Search

Account & Login

Vehicle Setup

Monitoring & Coverage

Payments

AutoPay

Documents & Proof

Fleet Accounts

Partner Support

Contact Support

RESOURCES

Create a restrained resource center for customer education.

Do not expose proprietary implementation details.

AUTHENTICATION

Create clean interfaces for:

Sign Up

Log In

Forgot Password

Phone Verification

Email Verification

During signup include appropriate consent UI for connecting vehicles and managing vehicle-related information.

FLEET AUTHORIZATION

Include a confirmation during multi-vehicle/fleet onboarding:

“I confirm I am the legal owner, manager, or authorized representative for the vehicles I am adding to Platora.”

AUTOPAY CONSENT

Before activation clearly require affirmative authorization explaining that Platora may charge the saved payment method for verified eligible vehicle obligations according to the customer’s selected AutoPay rules.

GOVERNMENT DISCLAIMER

Include this disclaimer appropriately in the footer and relevant flows:

“Platora is not a government agency and is not affiliated with any DMV, toll authority, court, city, state, or federal agency.”

SECURITY / PAYMENT PRESENTATION

Design payment interfaces around a PCI-compliant payment processor such as Stripe.

Never design the application around storing raw card numbers directly in Platora.

PRIVATE INFORMATION — CRITICAL

DO NOT expose any of the following on public pages:

• Internal Tier 1/Tier 2 technical architecture

• Virtual mailbox providers

• Mailbox implementation

• OCR implementation

• Scraping/browser automation implementation

• Python/Puppeteer/Selenium architecture

• Internal state eligibility database

• QA staffing strategy

• Contractor locations

• Founder oversight process

• Internal validation architecture

• Partner commission percentage

• Detailed partner economics

• Internal acquisition targets

• Upwork marketer strategy

• Internal referral tracking architecture

• Proprietary operational methods

These are internal business and implementation details.

The public website should sell the OUTCOME, not reveal exactly how Platora produces it.

RESPONSIVE DESIGN

Desktop is extremely important.

At 1440px and similar laptop/desktop widths, preserve the same compact, spacious composition as the attached reference.

Do NOT simply enlarge mobile components on desktop.

Use responsive breakpoints intentionally.

Desktop:

Wide layout

Compact navigation

Two-column sections where appropriate

Dashboard preview beside copy

Moderate heading sizes

Controlled max widths

Tablet:

Reflow intelligently without oversized components.

Mobile:

Stack content cleanly and preserve hierarchy.

Avoid horizontal overflow at every breakpoint.

Do not make text or controls unnecessarily large on mobile.

TYPOGRAPHY

Use a clean modern sans-serif style similar to the reference.

Avoid heavy/bold typography everywhere.

Use weight hierarchy:

Regular body copy

Medium labels/navigation

Semibold important headings

Only use strong bold weight where necessary.

Keep line lengths controlled.

VISUAL RESTRAINT

Avoid:

• Giant gradient blobs

• Excessive glassmorphism

• Excessive animation

• Huge pill-shaped UI everywhere

• Cartoon illustrations

• Generic stock photos

• Giant typography

• Excessive rounded cards

• Every section being full viewport height

• Excessive empty vertical space

• Repeating the same marketing statement multiple times

Use subtle motion only for useful interactions.

FUNCTIONAL EXPECTATIONS

Build navigation and frontend interactions so the prototype feels like a real application.

Buttons should lead somewhere meaningful.

Forms should have validation states.

Plate-check flow should have appropriate loading, success, limited-result, unsupported/alternate-coverage and error states.

Dashboard navigation should work.

Pricing CTAs should lead into signup.

Partner application should have a complete frontend submission state.

Support navigation should work.

Do not invent fake claims such as number of customers, government partnerships, accuracy percentages, awards, testimonials, supported-state counts, savings totals or enterprise customers.

FINAL QUALITY CHECK BEFORE COMPLETING

Before considering the build complete, inspect every route and verify:

1. Visual style closely follows the attached reference.

2. Nothing is excessively zoomed or oversized.

3. Desktop information density resembles the reference.

4. Navigation uses separate pages/routes rather than homepage anchor sections.

5. Current pricing is exactly $89 / $59 / $49.

6. Old $49 / $25 / $12 pricing appears nowhere.

7. Internal mailbox and technical implementation details are not publicly exposed.

8. Partner commission percentages and internal economics are not publicly exposed.

9. Plate/state onboarding has an “Other State” path.

10. Dashboard is clean and usable.

11. AutoPay is optional and off by default.

12. Government disclaimer is present.

13. Mobile/tablet/desktop layouts are responsive.

14. No fake business statistics or partnerships were invented.

15. The entire product looks like one coherent Platora design system.

Build the full frontend architecture now using the attached mockup as the visual source of truth.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f70ecfe8-3489-4c76-8fa8-d904e350ee50).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
