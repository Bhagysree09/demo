import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Lock, Globe } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';

export function TrademarkRegistrationPage() {
  const benefits = [
    { icon: <ShieldCheck className="w-8 h-8 text-[#6A23F5]" />, title: 'Legal Protection', description: 'Protect your brand name and logo legally' },
    { icon: <Award className="w-8 h-8 text-[#6A23F5]" />, title: 'Brand Exclusivity', description: 'Exclusive rights to use your trademark' },
    { icon: <Lock className="w-8 h-8 text-[#6A23F5]" />, title: 'Prevent Infringement', description: 'Stop others from copying your brand' },
    { icon: <Globe className="w-8 h-8 text-[#6A23F5]" />, title: 'Business Asset', description: 'Valuable intellectual property for your business' },
  ];

  const process = [
    { step: '1', title: 'Trademark Search', description: 'Check availability and similar existing trademarks' },
    { step: '2', title: 'Application Filing', description: 'Submit application to Trademark Registry' },
    { step: '3', title: 'Examination & Response', description: 'Respond to examiner\'s objections if any' },
    { step: '4', title: 'Publication & Registration', description: 'Trademark published in journal and registered' },
  ];

  const whatYouNeed = [
    'Brand name or logo to be trademarked',
    'Business/Applicant details',
    'Products/Services description',
    'Trademark class selection (we help with this)',
    'Authorization documents',
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Protect your brand identity.</h1>
          <p className="text-white/90 text-lg">
            Register your trademark and secure legal protection for your brand.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Why Register Your Trademark?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-[#1A1A1A] mb-2">{benefit.title}</h3>
                  <p className="text-[#6F6F6F] text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Trademark Registration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl border-2 border-[#E9D9FF] h-full">
                  <div className="w-12 h-12 bg-[#6A23F5] text-white rounded-full flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#6F6F6F] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#6F6F6F] text-center mt-8">
            Timeline: 6-18 months (depending on objections and government processing)
          </p>
        </div>
      </section>

      {/* What You Need */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">What You Need</h2>
          <Card className="border-2 border-[#E9D9FF]">
            <CardContent className="p-8">
              <div className="space-y-3">
                {whatYouNeed.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </span>
                    <p className="text-[#1A1A1A]">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#6A23F5] bg-white">
            <CardContent className="p-6">
              <h3 className="text-[#1A1A1A] mb-3">📌 Important Note</h3>
              <p className="text-[#6F6F6F]">
                Trademark registration provides protection for 10 years and is renewable. We provide complete support from search to registration, including objection handling if needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6A23F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Protect Your Brand?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Start your trademark registration today.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6">
              Register Trademark
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
