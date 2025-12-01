import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  FileCheck,
  HeadphonesIcon,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";

type PlanKey =
  | "salary-house-rent"
  | "capital-gains"
  | "foreign-income"
  | "traders"
  | "professionals"
  | "business";

interface PlanDetail {
  title: string;
  subtitle: string;
  originalPrice: number;
  price: number;
  discount: string;
  rating: string;
  reviews: string;
  description: string;
  features: string[];
  whatsIncluded: string[];
  idealFor: string[];
  whoShouldBuy?: string[];
  howItWorks?: string[];
  documentsRequired?: string[];
  whyChoose?: string[];
}

const planDetails: Record<PlanKey, PlanDetail> = {
  "salary-house-rent": {
    title: "Salary or House Rent Income",
    subtitle: "Perfect for Salaried Professionals",
    originalPrice: 4999,
    price: 1499,
    discount: "Save 60%",
    rating: "4.8/5",
    reviews: "12,500+ happy customers",
    description:
      "The most comprehensive tax filing solution for salaried individuals and those with rental income. Our expert CAs ensure you claim every deduction you deserve while staying 100% compliant with tax laws.",
    features: [
      "Complete salary income calculations with Form 16 verification",
      "House property income & rental deductions",
      "PF withdrawal and interest calculations",
      "Donation deductions under 80G optimized",
      "HRA, LTA and standard deduction claims",
      "Tax-saving investment recommendations",
      "ITR-1 or ITR-2 filing with e-verification",
      "Dedicated expert support via chat & call",
    ],
    whatsIncluded: [
      "Form 16 analysis and salary breakup validation",
      "House rent allowance (HRA) exemption calculation",
      "Leave Travel Allowance (LTA) claim assistance",
      "Standard deduction of â‚¹50,000 automatically claimed",
      "Section 80C to 80U deductions optimization",
      "Interest on home loan (Section 24 & 80EE)",
      "Professional tax and other deductions",
      "Income from other sources (bank interest, etc.)",
      "TDS reconciliation with Form 26AS/AIS",
      "E-verification on your behalf",
      "1-year post-filing support for notices",
      "Tax planning tips for next financial year",
    ],
    idealFor: [
      "Salaried employees with or without rental income",
      "First-time tax filers seeking guidance",
      "Those claiming HRA and home loan benefits",
      "Individuals with simple investment portfolios",
      "Anyone wanting stress-free, accurate tax filing",
    ],
    whoShouldBuy: [
      "Salaried employees receiving Form 16 from employer",
      "Individuals earning rental income from house property",
      "Those with income from fixed deposits and savings accounts",
      "First-time filers needing expert guidance",
      "Anyone claiming HRA, LTA, or home loan deductions",
    ],
    howItWorks: [
      "Upload your Form 16, rent receipts, and investment proofs on our secure portal",
      "Our expert CA reviews your documents and prepares your ITR-1 or ITR-2",
      "You receive a draft for review and approval before filing",
      "We file the ITR digitally and complete e-verification on your behalf",
      "Receive confirmation email with acknowledgement number and year-round support",
    ],
    documentsRequired: [
      "Form 16 from employer (salary income)",
      "Rental agreement and rent receipts (if applicable)",
      "Bank statements showing interest earned",
      "Investment proofs for 80C (PPF, LIC, ELSS, etc.)",
      "Medical insurance receipts for 80D deduction",
      "Home loan interest certificate (if applicable)",
      "PAN card and Aadhaar card",
      "Previous year ITR acknowledgement (if filed before)",
    ],
    whyChoose: [
      "Average refund of â‚¹18,500 for our customers",
      "Filed 50,000+ returns with 99.8% accuracy",
      "Dedicated CA assigned to your case",
      "Response within 2 hours on business days",
    ],
  },
  "capital-gains": {
    title: "Capital Gains Income",
    subtitle: "For Smart Investors",
    originalPrice: 8749,
    price: 2999,
    discount: "Save 60%",
    rating: "4.5/5",
    reviews: "8,200+ investors trust us",
    description:
      "Specialized tax filing for investors with capital gains from stocks, mutual funds, or property. Our experts optimize your gains, handle complex calculations, and ensure you pay the minimum tax legally possible.",
    features: [
      "Everything in Salary/House Rent Plan included",
      "LTCG & STCG calculations for equity & debt",
      "Mutual fund capital gains with indexation benefits",
      "Property sale gains with detailed cost calculations",
      "Set-off & carry forward of capital losses",
      "Income from lottery, gaming, or awards",
      "Section 54/54EC exemption guidance",
      "ITR-2/ITR-3 filing with expert review",
    ],
    whatsIncluded: [
      "All benefits from Salary/House Rent plan",
      "Short-term capital gains (STCG) calculations",
      "Long-term capital gains (LTCG) with exemptions",
      "Cost of acquisition with indexation for property",
      "Mutual fund gain calculation across schemes",
      "Equity transaction analysis from trading statements",
      "Loss set-off against current year gains",
      "Carry forward of losses for next 8 years",
      "Section 54/54EC/54F exemption planning",
      "Grandfathering calculation for pre-2018 investments",
      "Schedule 112A and 115AD computations",
      "Advice on tax-efficient investment strategies",
    ],
    idealFor: [
      "Active stock market investors",
      "Mutual fund investors with multiple transactions",
      "Individuals who sold property during the year",
      "Those with capital losses to carry forward",
      "Investors seeking tax optimization on gains",
    ],
    whoShouldBuy: [
      "Investors who sold stocks, mutual funds, or bonds during the year",
      "Property sellers requiring capital gains computation",
      "Those with capital losses needing set-off and carry forward",
      "Equity investors with grandfathering calculations",
      "Anyone with income from lottery, gambling, or awards",
    ],
    howItWorks: [
      "Share your trading statements, contract notes, and demat account statements",
      "Upload property sale deed and purchase documents (if applicable)",
      "Our expert calculates all capital gains with indexation and exemptions",
      "Review detailed capital gains computation sheet before filing",
      "We file ITR-2/3 digitally with e-verification and send confirmation",
    ],
    documentsRequired: [
      "Trading account statements and contract notes from broker",
      "Mutual fund statements showing purchase and sale details",
      "Property sale deed and purchase agreement (if sold property)",
      "Demat account holding statement",
      "Bank statements for all transactions",
      "Investment proofs (80C, 80D, etc.)",
      "Form 16/16A if salary or other TDS exists",
      "PAN, Aadhaar, and previous ITR details",
    ],
    whyChoose: [
      "Saved investors an average of â‚¹45,000 in taxes",
      "Expert handling of complex indexation calculations",
      "Loss carry forward ensuring future tax benefits",
      "Clarity on confusing capital gains rules",
    ],
  },
  "foreign-income": {
    title: "Foreign Income",
    subtitle: "For Global Citizens",
    originalPrice: 16249,
    price: 4999,
    discount: "Save 60%",
    rating: "4.8/5",
    reviews: "5,800+ NRIs served",
    description:
      "Premium tax solution for NRIs and residents with foreign income. Navigate complex DTAA provisions, claim foreign tax credits, and ensure full compliance with Indian tax laws on global income.",
    features: [
      "Everything in Capital Gains Plan + Advanced features",
      "Foreign salary, business & investment income",
      "NRE/NRO account interest calculations",
      "DTAA (Double Tax Avoidance Agreement) benefits",
      "Foreign tax credit claims & optimization",
      "Residential status determination (ROR/RNOR/NRI)",
      "Schedule FA - Foreign Assets & income reporting",
      "Expert guidance on tax treaty provisions",
    ],
    whatsIncluded: [
      "All features from Capital Gains plan",
      "Residential status determination as per tax laws",
      "Foreign employment income conversion and reporting",
      "NRE/NRO account interest calculation & exemptions",
      "DTAA article-wise tax relief computation",
      "Foreign tax credit claim optimization",
      "Schedule FSI (Foreign Source Income) preparation",
      "Schedule FA (Foreign Assets) detailed reporting",
      "Schedule TR (Tax Relief) for foreign taxes paid",
      "Country-specific tax treaty analysis",
      "FEMA compliance guidance",
      "Advice on repatriation and tax implications",
    ],
    idealFor: [
      "NRIs with Indian income sources",
      "Residents with foreign salary or business income",
      "Individuals with global investment portfolios",
      "Those with NRE/NRO bank accounts in India",
      "Anyone navigating DTAA complexities",
    ],
    whoShouldBuy: [
      "NRIs (Non-Resident Indians) with income in India",
      "Residents earning salary or business income abroad",
      "Individuals with foreign bank accounts and investments",
      "Those holding foreign assets worth over â‚¹50 lakhs",
      "Anyone claiming DTAA benefits and foreign tax credits",
    ],
    howItWorks: [
      "Share passport, visa details, and travel history for residential status determination",
      "Upload foreign salary slips, tax returns filed abroad, and NRE/NRO statements",
      "Our DTAA experts analyze tax treaty provisions for your situation",
      "We prepare ITR-2/3 with Schedules FA, FSI, and TR",
      "Digital filing with e-verification and confirmation sent via email",
    ],
    documentsRequired: [
      "Passport copy with visa and entry/exit stamps",
      "Foreign salary slips or employment contracts",
      "Tax returns filed in foreign country with payment proof",
      "NRE/NRO bank account statements",
      "Foreign investment statements (stocks, property, etc.)",
      "Form 16/16A for Indian income (if any)",
      "Investment proofs (80C, 80D, etc.)",
      "PAN, Aadhaar, and previous ITR acknowledgement",
    ],
    whyChoose: [
      "Specialized NRI tax experts on our team",
      "Successfully handled 80+ country tax treaties",
      "Maximum foreign tax credit claims",
      "Peace of mind with complex international taxation",
    ],
  },
  traders: {
    title: "For Traders",
    subtitle: "Active Trading Specialists",
    originalPrice: 12499,
    price: 6999,
    discount: "Save 44%",
    rating: "4.3/5",
    reviews: "3,400+ traders",
    description:
      "Specialized solution for active traders treating trading as business income. Get professional P&L statements, balance sheets, and optimize your trading taxes with expert CA assistance.",
    features: [
      "Intraday & F&O trading income calculations",
      "Speculative & non-speculative business income",
      "Comprehensive P&L statement preparation",
      "Balance sheet and account summary creation",
      "Trading expenses & deductions optimization",
      "Covers salary, capital gains & other income",
      "Presumptive taxation options (44AD/44ADA)",
      "ITR-3 or ITR-4 filing with expert consultation",
      "Note: Tax audit fees & DSC charges separate",
    ],
    whatsIncluded: [
      "Detailed trading P&L statement preparation",
      "Separation of speculative vs non-speculative income",
      "F&O trading business income computation",
      "Intraday equity trading income calculation",
      "Professional balance sheet preparation",
      "Trading expenses categorization & claims",
      "Depreciation on computers and equipment",
      "Interest on borrowed capital for trading",
      "All salary, house property, capital gains coverage",
      "Guidance on maintaining books of accounts",
      "Threshold analysis for tax audit applicability",
      "ITR-3 (business) or ITR-4 (presumptive) filing",
    ],
    idealFor: [
      "Full-time or part-time intraday traders",
      "F&O traders with regular transactions",
      "Those treating trading as business income",
      "Traders with turnover below audit threshold",
      "Anyone needing professional trading accounts",
    ],
    whoShouldBuy: [
      "Active intraday traders with regular transactions",
      "F&O (Futures & Options) traders filing under business income",
      "Traders requiring P&L and balance sheet preparation",
      "Those with trading turnover requiring expert guidance",
      "Anyone filing ITR-3 or ITR-4 for trading income",
    ],
    howItWorks: [
      "Upload brokerage statements, contract notes, and bank statements",
      "Share details of trading expenses (internet, software, equipment, etc.)",
      "Our experts prepare detailed P&L and balance sheet as per IT Act",
      "We compute business income, determine audit applicability, and optimize taxes",
      "ITR-3/4 is filed digitally with e-verification and confirmation email sent",
    ],
    documentsRequired: [
      "Complete brokerage statements and contract notes for the year",
      "Bank statements showing trading transactions and expenses",
      "Details of trading expenses (internet, software subscriptions, etc.)",
      "Computer and equipment purchase bills for depreciation",
      "Interest certificates if borrowed capital used for trading",
      "Investment proofs (80C, 80D, etc.) and Form 16 (if salary income exists)",
      "PAN, Aadhaar, and previous ITR filing details",
    ],
    whyChoose: [
      "Specialized in trader taxation since 2015",
      "Clear separation of trading types for compliance",
      "Maximum expense deductions within legal limits",
      "Audit threshold monitoring and guidance",
    ],
  },
  professionals: {
    title: "For Professionals & Freelancers",
    subtitle: "Perfect for Independent Workers",
    originalPrice: 13749,
    price: 2999,
    discount: "Save 78%",
    rating: "4.4/5",
    reviews: "6,900+ professionals",
    description:
      "Tailored tax solution for freelancers, consultants, doctors, CAs, and all professionals. Maximize your expense deductions and file with complete confidence and expert support.",
    features: [
      "Professional/consultation income up to â‚¹50L",
      "Presumptive taxation under 44ADA (50% expenses)",
      "Business expenses deduction strategies",
      "TDS on professional fees handling",
      "Multiple income sources consolidated",
      "Covers salary, capital gains & other income",
      "GST compliance advisory included",
      "Section 44AB audit threshold guidance",
      "ITR-3 or ITR-4 filing with full support",
    ],
    whatsIncluded: [
      "Professional/consultation income calculation",
      "Presumptive taxation (44ADA) with 50% deemed expenses",
      "Option for actual expense method if beneficial",
      "Work from home expense deductions",
      "Internet, phone, and equipment depreciation",
      "Travel and vehicle expenses optimization",
      "TDS credit reconciliation (Section 194J)",
      "Multiple client income consolidation",
      "Salary and other income sources included",
      "GST registration and filing guidance",
      "Professional liability insurance premium claims",
      "ITR-3 (detailed) or ITR-4 (presumptive) filing",
    ],
    idealFor: [
      "Freelancers and independent consultants",
      "Doctors, CAs, lawyers, architects",
      "Content creators and influencers",
      "IT professionals and designers",
      "Any professional with gross receipts under â‚¹50L",
    ],
    whoShouldBuy: [
      "Proprietors, consultants, freelancers with business income",
      "Professionals filing under ITR-3 or ITR-4",
      "Doctors, CAs, lawyers, and architects with professional income",
      "Content creators and digital professionals",
      "Small business owners requiring expert preparation",
    ],
    howItWorks: [
      "Share income receipts, invoices, and TDS certificates (Form 16A)",
      "Provide expense details or opt for presumptive taxation (50% deemed expenses)",
      "Our experts prepare financial statements, compute taxes, and review filings",
      "You review and approve the ITR before submission",
      "The ITR is filed digitally with e-verification and confirmation sent by email",
    ],
    documentsRequired: [
      "Invoices raised to clients and income receipts",
      "TDS certificates (Form 16A) from clients who deducted TDS",
      "Bank statements showing professional income and expenses",
      "Expense bills (rent, internet, equipment, travel, etc.)",
      "Investment proofs (80C, 80D, etc.) and Form 16 (if salary income exists)",
      "GST returns if registered under GST",
      "PAN, Aadhaar, and previous ITR filing details",
    ],
    whyChoose: [
      "Deep expertise in professional taxation",
      "Helped 6,900+ professionals save taxes",
      "Choose between presumptive or actual expenses",
      "GST and professional tax guidance included",
    ],
  },
  business: {
    title: "For Business",
    subtitle: "Small Business Accounting",
    originalPrice: 16249,
    price: 5999,
    discount: "Save 63%",
    rating: "4.3/5",
    reviews: "4,100+ businesses",
    description:
      "Complete accounting and tax solution for small businesses with up to 200 transactions. Get professional books, financial statements, and expert tax filing all in one package.",
    features: [
      "Business with up to 200 transactions",
      "Complete books of accounts maintenance",
      "Professional P&L and Balance Sheet",
      "Depreciation schedule as per IT Act",
      "Business expense categorization & optimization",
      "Covers salary, capital gains & investments",
      "Working capital & cash flow analysis",
      "Compliance calendar for due dates",
      "ITR-3 or ITR-4 filing with expert review",
      "Note: Audit fees & DSC charges additional",
    ],
    whatsIncluded: [
      "Complete books of accounts (up to 200 entries)",
      "Professional Profit & Loss statement",
      "Balance Sheet as per Schedule III",
      "Depreciation chart as per Income Tax Act",
      "Expense categorization and optimization",
      "Revenue recognition and accounting",
      "Inventory valuation (if applicable)",
      "Accounts receivable and payable management",
      "Business income tax computation",
      "Personal income sources (salary, capital gains)",
      "Working capital analysis and insights",
      "Compliance calendar for advance tax & TDS",
    ],
    idealFor: [
      "Small businesses with regular transactions",
      "E-commerce sellers and online businesses",
      "Retail shops and service providers",
      "Businesses below â‚¹2 crore turnover",
      "Anyone needing professional accounting support",
    ],
    whoShouldBuy: [
      "Proprietors and small business owners with regular transactions",
      "E-commerce sellers and retail businesses",
      "Service providers requiring complete accounting",
      "Businesses filing under ITR-3 or ITR-4",
      "Those requiring professional P&L and balance sheet preparation",
    ],
    howItWorks: [
      "Share income and expense data, including bank statements and invoices",
      "Upload purchase bills, sales invoices, and payment receipts",
      "Our team prepares financial statements, computes taxes, and reviews filings",
      "You receive detailed P&L, balance sheet, and tax computation for approval",
      "The ITR is filed digitally with e-verification and confirmation sent by email",
    ],
    documentsRequired: [
      "Bank statements showing all business transactions",
      "Sales invoices and purchase bills for the year",
      "Expense receipts (rent, electricity, salaries, etc.)",
      "Asset purchase invoices for depreciation calculation",
      "Investment proofs (80C, 80D, etc.) and Form 16/16A (if salary income exists)",
      "GST returns and TDS returns (if applicable)",
      "PAN, Aadhaar, and previous ITR filing details",
    ],
    whyChoose: [
      "4,100+ businesses trust our accounting",
      "Clear financial picture of your business",
      "Expert insights on profitability and cash flow",
      "Compliance ensured, peace of mind delivered",
    ],
  },
};

export default function PlanDetailPage() {
  const { planId } = useParams<{ planId: PlanKey }>();
  const navigate = useNavigate();
  const plan = planId ? planDetails[planId] : undefined;

  if (!plan) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 px-4">
        <div className="rounded-3xl bg-white p-12 text-center shadow-2xl">
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">Plan not found</h2>
          <button
            onClick={() => navigate("/pricing")}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:from-violet-700 hover:to-fuchsia-700"
          >
            Back to Pricing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate("/pricing")}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-600 shadow-md transition-all hover:text-violet-800 hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to all plans
        </button>

        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1 text-sm font-semibold text-white">
                  {plan.subtitle}
                </div>
                <h1 className="mb-4 text-3xl font-bold text-[#1A1A1A] md:text-4xl">{plan.title}</h1>
                <div className="mb-4 flex items-end gap-3">
                  <span className="text-sm text-gray-400 line-through">â‚¹{plan.originalPrice}</span>
                  <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-5xl font-bold text-transparent">
                    â‚¹{plan.price}
                  </span>
                </div>
                <div className="mb-5">
                  <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    {plan.discount} â€¢ Limited Time Offer
                  </span>
                </div>
                <div className="mb-6 flex items-center gap-2 border-b border-gray-100 pb-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-sm text-yellow-700">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    {plan.rating}
                  </span>
                  <span className="text-sm text-gray-600">â€¢ {plan.reviews}</span>
                </div>
                <p className="mb-8 text-gray-700">{plan.description}</p>
                <div className="mb-8 space-y-3">
                  <button className="w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition-all hover:from-green-600 hover:to-green-700">
                    Get Started Now
                  </button>
                  <button className="w-full rounded-xl border-2 border-violet-300 px-6 py-4 text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50">
                    Schedule Free Consultation
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-violet-50 p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-violet-600" />
                    <p className="text-sm font-medium text-gray-700">100% Secure & Confidential</p>
                  </div>
                  <div className="rounded-xl bg-fuchsia-50 p-4 text-center">
                    <HeadphonesIcon className="mx-auto mb-2 h-8 w-8 text-fuchsia-600" />
                    <p className="text-sm font-medium text-gray-700">Expert Support 24/7</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="custom-scrollbar max-h-[540px] overflow-y-auto pr-2">
                  <section className="mb-8">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#1A1A1A]">
                      <FileCheck className="h-6 w-6 text-violet-600" />
                      What's Included
                    </h3>
                    <div className="space-y-2.5">
                      {plan.whatsIncluded.map((item, index) => (
                        <div key={index} className="flex gap-3 text-sm text-gray-700">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
                            <Check className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mb-8">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#1A1A1A]">
                      <TrendingUp className="h-6 w-6 text-violet-600" />
                      Ideal For
                    </h3>
                    <div className="space-y-2.5">
                      {plan.idealFor.map((item, index) => (
                        <div key={index} className="flex gap-3 text-sm text-gray-700">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
                            <Check className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {plan.whyChoose && (
                    <section className="mb-8 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6">
                      <h4 className="mb-3 text-lg font-semibold text-[#1A1A1A]">Why Choose This Plan?</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        {plan.whyChoose.map((reason, index) => (
                          <p key={index} className="flex items-start gap-2">
                            <span className="text-violet-600">âœ“</span>
                            {reason}
                          </p>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>

            {plan.whoShouldBuy && (
              <section className="mt-12 rounded-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 p-8">
                <h3 className="mb-6 text-center text-xl font-semibold text-[#1A1A1A]">Who Should Buy</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {plan.whoShouldBuy.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="mt-1 h-5 w-5 text-violet-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {plan.howItWorks && (
              <section className="mt-8 rounded-2xl border-2 border-violet-200 p-8">
                <h3 className="mb-6 text-center text-xl font-semibold text-[#1A1A1A]">How It Works</h3>
                <div className="space-y-6">
                  {plan.howItWorks.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 text-sm text-gray-700">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg">
                        {index + 1}
                      </div>
                      <span className="leading-6">{step}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {plan.documentsRequired && (
              <section className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 p-8">
                <h3 className="mb-6 text-center text-xl font-semibold text-[#1A1A1A]">Documents Required</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {plan.documentsRequired.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="mt-1 h-5 w-5 text-blue-600" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #7c3aed, #c026d3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}




