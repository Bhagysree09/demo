import { useNavigate } from 'react-router-dom';
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

interface PricingCardProps {
  id: string;
  icon: React.ReactNode;
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

export default function PricingCard({
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
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Badge */}
        {badge && (
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span className="text-xs">{badge}</span>
          </div>
        )}

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-2xl group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-center mb-1">{title}</h3>
        <p className="text-center text-gray-500 mb-4">{subtitle}</p>
        
        {/* Pricing */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-gray-400 line-through">₹{originalPrice}</span>
          <span className="text-4xl bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">₹{price}</span>
        </div>
        <div className="text-center mb-4">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full">{discount}</span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-yellow-700">{rating}</span>
          </div>
          <span className="text-gray-500">• {reviews}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-center">{description}</p>
        
        {/* Features */}
        <div className="mb-8">
          <p className="text-gray-700 mb-3">What you'll get:</p>
          <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/30 group/btn">
            <span>Buy Now</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          <button
            onClick={() => navigate(`/plan/${id}`)}
            className="w-full text-violet-600 hover:text-violet-800 py-3 rounded-xl border border-violet-200 hover:bg-violet-50 transition-all flex items-center justify-center gap-2 group/know"
          >
            <span>Know more</span>
            <ArrowRight className="w-4 h-4 group-hover/know:translate-x-1 transition-transform" />
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
