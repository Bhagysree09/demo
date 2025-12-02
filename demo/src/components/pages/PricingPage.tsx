import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';

export function PricingPage() {
  const [activeTab, setActiveTab] = useState<'individuals' | 'professionals'>('individuals');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Callback requested! We'll contact you at ${email} or ${phone}`);
    setEmail('');
    setPhone('');
  };

  const individualsPlans = [
    {
      title: 'Salary or House Rent Income',
      icon: '🏠',
      originalPrice: '₹4599',
      price: '₹1499',
      discount: 'Save 60%',
      rating: 4.8,
      link: '/pricing/salary-house-rent',
      features: [
        'Salary',
        'House property',
        'Withdrawal from PF and bank deposits',
        'Donations'
      ]
    },
    {
      title: 'Capital Gains Income',
      icon: '💹',
      originalPrice: '₹8749',
      price: '₹2999',
      discount: 'Save 60%',
      rating: 4.5,
      link: '/pricing/capital-gains',
      features: [
        'Everything in Salary/House Rent Plan',
        'Capital Gains from sale of stocks, mutual funds & property',
        'Gains from Lottery, Gaming or Awards'
      ]
    },
    {
      title: 'Foreign Income',
      icon: '🌍',
      originalPrice: '₹16249',
      price: '₹4999',
      discount: 'Save 60%',
      rating: 4.8,
      link: '/pricing/foreign-income',
      features: [
        'Everything in Capital Gains Income Plan',
        'Income earned outside India',
        'Income earned in India for NRE, NRO A/C',
        'DTAA guidance'
      ]
    }
  ];

  const professionalsPlans = [
    {
      title: 'For Traders',
      icon: '📊',
      originalPrice: '₹12499',
      price: '₹6999',
      discount: 'Save 60%',
      rating: 4.3,
      link: '/pricing/traders',
      features: [
        'For Traders',
        'Preparation of Account Summary, P&L and balance sheet',
        'Also covers salary, other incomes and capital gains',
        'Audit fee and DSC not included'
      ]
    },
    {
      title: 'For Professionals and Freelancers',
      icon: '💼',
      originalPrice: '₹13749',
      price: '₹2999',
      discount: 'Save 60%',
      rating: 4.4,
      link: '/pricing/professionals-freelancers',
      features: [
        'Income for professionals (like Freelancers, Doctors) & small businesses',
        'Applicable Annual Turnover < Rs. 2 cr for businesses or Gross Receipt < Rs. 50 Lacs for Professionals',
        'Also covers salary, other incomes and capital gains'
      ]
    },
    {
      title: 'For Business',
      icon: '🏢',
      originalPrice: '₹16249',
      price: '₹5999',
      discount: 'Save 60%',
      rating: 4.3,
      link: '/pricing/business',
      features: [
        'Business income from business having upto 200 transactions',
        'Preparation of Account Summary, P&L and balance sheet',
        'Also covers salary, other incomes and capital gains',
        'Audit Fee and DSC not included'
      ]
    }
  ];

  const currentPlans = activeTab === 'individuals' ? individualsPlans : professionalsPlans;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#6A23F5] to-[#A855F7] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/90 mb-8">
              Choose the perfect plan for your Tax Filing and Business Compliance needs
            </p>

            {/* Callback Form */}
            <motion.form
              onSubmit={handleCallbackRequest}
              className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-6 rounded-xl bg-white/95 text-[#1A1A1A] placeholder:text-gray-500"
                required
              />
              <Input
                type="tel"
                placeholder="Enter your phone no"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-14 px-6 rounded-xl bg-white/95 text-[#1A1A1A] placeholder:text-gray-500"
                required
              />
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white h-14 px-8 rounded-xl whitespace-nowrap"
              >
                Request a callback
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            <span className="text-[#1A1A1A] mr-4">Popular plans:</span>
            <button
              onClick={() => setActiveTab('individuals')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'individuals'
                  ? 'bg-[#6A23F5] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-gray-100'
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab('professionals')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'professionals'
                  ? 'bg-[#6A23F5] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-gray-100'
              }`}
            >
              For Professionals
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center">{plan.icon}</div>

                  {/* Title */}
                  <h3 className="text-center text-[#1A1A1A] mb-6 h-14 flex items-center justify-center">
                    {plan.title}
                  </h3>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="text-3xl text-[#1A1A1A]">{plan.price}</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                        {plan.discount}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-[#1A1A1A]">{plan.rating}/5</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-3">Covers income from</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#1A1A1A]">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl h-12">
                      Buy now
                    </Button>
                    <Link to={plan.link} className="w-full text-[#6A23F5] hover:underline text-sm">
                      Know more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-[#1A1A1A] mb-4">
              Why Choose TaxBreeze?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Our expert team provides comprehensive tax and compliance solutions tailored to your needs.
              With transparent pricing and exceptional service, we make tax filing simple and stress-free.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl text-[#1A1A1A] mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Professional tax consultants to guide you through every step
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl text-[#1A1A1A] mb-2">Fast Processing</h3>
                <p className="text-gray-600">
                  Quick turnaround time for all your tax filing needs
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl text-[#1A1A1A] mb-2">Secure & Confidential</h3>
                <p className="text-gray-600">
                  Your data is protected with industry-standard security
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}