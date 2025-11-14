import { Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

type Plan = {
  title: string;
  price: string;
  oldPrice?: string;
  rating: number;
  bulletTitle: string;
  bullets: string[];
  ctaLink: string;
  accent: string;
};

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="rounded-2xl border border-[#E9D9FF] bg-white overflow-hidden hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5">
      <div className="h-1.5" style={{ backgroundColor: plan.accent }} />
      <div className="p-7 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[1.075rem] font-semibold tracking-tight text-[#1A1A1A]">{plan.title}</h3>
          <div className="flex items-center gap-1 text-[#F59E0B]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className={i < Math.round(plan.rating) ? "fill-current" : ""} />
            ))}
            <span className="ml-1 text-[11px] text-[#6F6F6F]">{plan.rating.toFixed(1)}/5</span>
          </div>
        </div>
        <div className="flex items-end gap-2 mb-6">
          {plan.oldPrice && <span className="text-sm text-[#9CA3AF] line-through">{plan.oldPrice}</span>}
          <span className="text-[1.9rem] leading-none font-bold text-[#1A1A1A]">{plan.price}</span>
        </div>
        <div className="mb-6">
          <p className="text-[13px] font-medium text-[#1A1A1A]">{plan.bulletTitle}</p>
          <ul className="mt-3 space-y-2.5 text-[13px] text-[#4B5563]">
            {plan.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 items-start">
                <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: plan.accent }} />
                <span className="leading-6">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex gap-3">
          <Link to={plan.ctaLink} className="flex-1">
            <button
              className="w-full py-2.5 rounded-xl text-white font-medium shadow-sm hover:shadow transition-colors"
              style={{ backgroundColor: plan.accent }}
            >
              Buy now
            </button>
          </Link>
          <button className="px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-[#1A1A1A] hover:bg-[#F9FAFB]">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export function PricingPage() {
  const individualPlans: Plan[] = [
    {
      title: "Salary or House Rent Income",
      oldPrice: "₹ 6,999",
      price: "₹ 2,749",
      rating: 4.8,
      bulletTitle: "Covers income from",
      bullets: ["Salary", "House property", "Withdrawal from PF and bank deposits", "Donations"],
      ctaLink: "/tax-filing/salaried",
      accent: "#6A23F5",
    },
    {
      title: "Capital Gains Income",
      oldPrice: "₹ 12,499",
      price: "₹ 4,999",
      rating: 4.5,
      bulletTitle: "Covers income from",
      bullets: [
        "Everything in Salary/House Rent Plan",
        "Capital Gains from sale of stocks, mutual funds & property",
        "Lottery, Gaming or Awards",
      ],
      ctaLink: "/tax-filing/capital-gains",
      accent: "#6A23F5",
    },
    {
      title: "Foreign Income (NRI)",
      oldPrice: "₹ 11,499",
      price: "₹ 6,999",
      rating: 4.8,
      bulletTitle: "Covers income from",
      bullets: ["Capital Gains Income Plan", "Income earned outside India", "Income received in India for NRE/NRO", "DTAA guidance"],
      ctaLink: "/tax-filing/nri",
      accent: "#6A23F5",
    },
  ];

  const professionalPlans: Plan[] = [
    {
      title: "For Traders",
      oldPrice: "₹ 12,999",
      price: "₹ 4,719",
      rating: 4.3,
      bulletTitle: "Covers income from",
      bullets: ["For Traders", "Preparation of Account Summary, P&L and balance sheet", "Also covers salary, other incomes and capital gains", "Audit fee and DSC not included"],
      ctaLink: "/tax-filing",
      accent: "#6A23F5",
    },
    {
      title: "For Professionals and Freelancers",
      oldPrice: "₹ 12,999",
      price: "₹ 4,999",
      rating: 4.4,
      bulletTitle: "Covers income from",
      bullets: [
        "Income for professionals like freelancers, doctors & small businesses",
        "Applicable around Turnover > Rs. 2 Cr for businesses or Gross Receipt > Rs. 50 Lacs for Professionals",
        "Also covers salary, other incomes and capital gains",
      ],
      ctaLink: "/tax-filing",
      accent: "#6A23F5",
    },
    {
      title: "For Business",
      oldPrice: "₹ 12,999",
      price: "₹ 6,999",
      rating: 4.3,
      bulletTitle: "Covers income from",
      bullets: [
        "Business income from business having upto 200 transactions",
        "Preparation of Account Summary, P&L and balance sheet",
        "Also covers salary, other incomes and capital gains",
        "Audit fee and DSC not included",
      ],
      ctaLink: "/company-compliances",
      accent: "#6A23F5",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#E9D9FF]/20">
      {/* Hero */}
      <section className="pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Let our experts manage your tax and business compliances
          </h1>
          <p className="mt-3 text-[#6F6F6F]">
            Choose a plan that fits you. Individuals and Professionals have separate plans.
          </p>
        </div>
      </section>

      {/* Individuals */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A]">For Individuals</h2>
            <Link to="/tax-filing" className="text-sm text-[#6A23F5]">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {individualPlans.map((p) => (
              <PlanCard key={p.title} plan={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Professionals */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A]">For Professionals</h2>
            <Link to="/tax-filing" className="text-sm text-[#6A23F5]">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalPlans.map((p) => (
              <PlanCard key={p.title} plan={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;


