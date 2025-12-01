import { useState } from 'react';
import PricingCard from './PricingCard';
import { Home, TrendingUp, Globe, Briefcase, Users, Building2 } from 'lucide-react';
import '../styles/pricing-tokens.css';

const individualsPlans = [
  {
    id: 'salary-house-rent',
    icon: <Home className="w-16 h-16 text-purple-600" />,
    title: 'Salary or House Rent Income',
    subtitle: 'Perfect for Salaried Professionals',
    originalPrice: 4999,
    price: 1499,
    discount: 'Save 60%',
    rating: '4.8/5',
    reviews: '12,500+ happy customers',
    badge: 'Most Popular',
    description: 'Hassle-free tax filing for salaried individuals with rental income. Get expert guidance and maximize your deductions effortlessly.',
    features: [
      'Complete salary income calculations with Form 16 verification',
      'House property income & rental deductions',
      'PF withdrawal and interest calculations',
      'Donation deductions under 80G optimized',
      'HRA, LTA and standard deduction claims',
      'Tax-saving investment recommendations',
      'ITR-1 or ITR-2 filing with e-verification',
      'Dedicated expert support via chat & call'
    ]
  },
  {
    id: 'capital-gains',
    icon: <TrendingUp className="w-16 h-16 text-blue-600" />,
    title: 'Capital Gains Income',
    subtitle: 'For Smart Investors',
    originalPrice: 8749,
    price: 2999,
    discount: 'Save 60%',
    rating: '4.5/5',
    reviews: '8,200+ investors trust us',
    badge: 'Best Value',
    description: 'Comprehensive solution for investors dealing with stocks, mutual funds, and property transactions. Optimize your capital gains tax efficiently.',
    features: [
      'Everything in Salary/House Rent Plan included',
      'LTCG & STCG calculations for equity & debt',
      'Mutual fund capital gains with indexation benefits',
      'Property sale gains with detailed cost calculations',
      'Set-off & carry forward of capital losses',
      'Income from lottery, gaming, or awards',
      'Section 54/54EC exemption guidance',
      'ITR-2/ITR-3 filing with expert review'
    ]
  },
  {
    id: 'foreign-income',
    icon: <Globe className="w-16 h-16 text-indigo-600" />,
    title: 'Foreign Income',
    subtitle: 'For Global Citizens',
    originalPrice: 16249,
    price: 4999,
    discount: 'Save 60%',
    rating: '4.8/5',
    reviews: '5,800+ NRIs served',
    badge: 'Premium',
    description: 'Complete tax solution for NRIs and individuals with global income. Navigate complex tax treaties and claim foreign tax credits seamlessly.',
    features: [
      'Everything in Capital Gains Plan + Advanced features',
      'Foreign salary, business & investment income',
      'NRE/NRO account interest calculations',
      'DTAA (Double Tax Avoidance Agreement) benefits',
      'Foreign tax credit claims & optimization',
      'Residential status determination (ROR/RNOR/NRI)',
      'Schedule FA - Foreign Assets & income reporting',
      'Expert guidance on tax treaty provisions'
    ]
  }
];

const professionalPlans = [
  {
    id: 'traders',
    icon: <Briefcase className="w-16 h-16 text-purple-600" />,
    title: 'For Traders',
    subtitle: 'Active Trading Specialists',
    originalPrice: 12499,
    price: 6999,
    discount: 'Save 44%',
    rating: '4.3/5',
    reviews: '3,400+ traders',
    badge: 'Recommended',
    description: 'Specialized tax filing for active traders. Get professional P&L statements and optimize your trading taxes with expert strategies.',
    features: [
      'Intraday & F&O trading income calculations',
      'Speculative & non-speculative business income',
      'Comprehensive P&L statement preparation',
      'Balance sheet and account summary creation',
      'Trading expenses & deductions optimization',
      'Covers salary, capital gains & other income',
      'Presumptive taxation options (44AD/44ADA)',
      'ITR-3 or ITR-4 filing with expert consultation',
      'Note: Tax audit fees & DSC charges separate'
    ]
  },
  {
    id: 'professionals',
    icon: <Users className="w-16 h-16 text-cyan-600" />,
    title: 'For Professionals & Freelancers',
    subtitle: 'Perfect for Independent Workers',
    originalPrice: 13749,
    price: 2999,
    discount: 'Save 78%',
    rating: '4.4/5',
    reviews: '6,900+ professionals',
    badge: 'Great Deal',
    description: 'Tailored for freelancers, consultants, doctors, and professionals. Maximize deductions and file with confidence.',
    features: [
      'Professional/consultation income up to ₹50L',
      'Presumptive taxation under 44ADA (50% expenses)',
      'Business expenses deduction strategies',
      'TDS on professional fees handling',
      'Multiple income sources consolidated',
      'Covers salary, capital gains & other income',
      'GST compliance advisory included',
      'Section 44AB audit threshold guidance',
      'ITR-3 or ITR-4 filing with full support'
    ]
  },
  {
    id: 'business',
    icon: <Building2 className="w-16 h-16 text-violet-600" />,
    title: 'For Business',
    subtitle: 'Small Business Accounting',
    originalPrice: 16249,
    price: 5999,
    discount: 'Save 63%',
    rating: '4.3/5',
    reviews: '4,100+ businesses',
    badge: 'Complete Solution',
    description: 'Full-service accounting and tax filing for small businesses. Get professional books of accounts and comprehensive tax support.',
    features: [
      'Business with up to 200 transactions',
      'Complete books of accounts maintenance',
      'Professional P&L and Balance Sheet',
      'Depreciation schedule as per IT Act',
      'Business expense categorization & optimization',
      'Covers salary, capital gains & investments',
      'Working capital & cash flow analysis',
      'Compliance calendar for due dates',
      'ITR-3 or ITR-4 filing with expert review',
      'Note: Audit fees & DSC charges additional'
    ]
  }
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'individuals' | 'professionals'>('individuals');

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Choose Your Perfect Tax Filing Plan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert-assisted tax filing with maximum refunds guaranteed. Trusted by 50,000+ happy customers across India.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg inline-flex gap-2">
            <button
              onClick={() => setActiveTab('individuals')}
              className={`px-8 py-3 rounded-full transition-all ${
                activeTab === 'individuals'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab('professionals')}
              className={`px-8 py-3 rounded-full transition-all ${
                activeTab === 'professionals'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Professionals
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {(activeTab === 'individuals' ? individualsPlans : professionalPlans).map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>

        {/* All Plans Include Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-5xl mx-auto">
          <h2 className="text-center mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Every Plan Includes Premium Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="block">Dedicated Tax Expert & Account Manager</span>
                <span className="text-gray-500">Personal support throughout your filing journey</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="block">Complete Data Review & Accuracy Check</span>
                <span className="text-gray-500">Expert verification before submission</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="block">Post-Filing Support for Full Financial Year</span>
                <span className="text-gray-500">Ongoing assistance for notices & queries</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="block">Tax-Saving Investment Recommendations</span>
                <span className="text-gray-500">Personalized strategies to reduce your tax</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
