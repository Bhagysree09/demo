import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import type { ReactNode } from "react";

export interface PricingCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  originalPrice: number;
  price: number;
  discount: string;
  rating: string;
  reviews: string;
  badge?: string;
  description: string;
  features: string[];
}

export function PricingCard({
  id,
  icon,
  title,
  subtitle,
  originalPrice,
  price,
  discount,
  rating,
  reviews,
  badge,
  description,
  features,
}: PricingCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 to-fuchsia-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {badge && (
        <div className="absolute -top-4 -right-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1 text-xs font-medium text-white shadow-lg">
          <Sparkles className="h-3 w-3" />
          {badge}
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-5 flex justify-center">
          <div className="rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 p-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        <h3 className="mb-1 text-center text-lg font-semibold text-[#1A1A1A]">{title}</h3>
        <p className="mb-4 text-center text-sm text-gray-500">{subtitle}</p>

        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="text-sm text-gray-400 line-through">₹{originalPrice}</span>
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-4xl font-bold text-transparent">
            ₹{price}
          </span>
        </div>
        <div className="mb-5 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-green-700">
            {discount}
          </span>
        </div>

        <div className="mb-6 flex items-center justify-center gap-2 border-b border-gray-100 pb-6">
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-sm text-yellow-700">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {rating}
          </span>
          <span className="text-sm text-gray-500">• {reviews}</span>
        </div>

        <p className="mb-6 text-center text-sm text-gray-600">{description}</p>

        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold text-gray-700">What you'll get:</p>
          <div className="custom-scrollbar space-y-2.5 overflow-y-auto pr-2 text-sm text-gray-700" style={{ maxHeight: "300px" }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
                  <Check className="h-3 w-3" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-3">
          <button className="group/button w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition-all hover:from-green-600 hover:to-green-700">
            <span className="inline-flex items-center justify-center gap-2">
              Buy Now
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
            </span>
          </button>
          <button
            onClick={() => navigate(`/pricing/plan/${id}`)}
            className="group/know w-full rounded-xl border border-violet-200 px-4 py-3 text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50 hover:text-violet-700"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Know more
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/know:translate-x-1" />
            </span>
          </button>
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


