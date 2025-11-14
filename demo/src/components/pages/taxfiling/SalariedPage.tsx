import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Calculator, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function SalariedPage() {
  const documents = [
    'Form 16 from employer',
    'PAN Card',
    'Aadhaar Card',
    'Bank account statement',
    'Investment proofs (80C, 80D)',
    'Home loan interest certificate (if applicable)',
    'TDS certificates from other sources',
  ];

  const process = [
    { step: '1', title: 'Share Documents', description: 'Upload Form 16 and investment proofs' },
    { step: '2', title: 'Expert Review', description: 'CA reviews and maximizes your deductions' },
    { step: '3', title: 'File Return', description: 'We file your ITR accurately' },
    { step: '4', title: 'Track Refund', description: 'Monitor refund until credit to account' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] via-[#8B4FFF] to-[#A855F7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                💼 For Salaried Individuals
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl">Income Tax Filing for Salaried Employees</h1>
              <p className="text-white/90 text-lg mb-8">
                Simple, hassle-free ITR filing for employees. Maximize deductions on salary, HRA, and investments.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg group">
                  Start Filing Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTgwNDkyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Workspace"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mx-auto mb-4 text-2xl">
                  💼
                </div>
                <h3 className="text-[#1A1A1A] mb-2">Full-time Employees</h3>
                <p className="text-[#6F6F6F]">Working professionals with regular salary income</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mx-auto mb-4 text-2xl">
                  🏠
                </div>
                <h3 className="text-[#1A1A1A] mb-2">HRA Claimants</h3>
                <p className="text-[#6F6F6F]">Employees claiming House Rent Allowance</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mx-auto mb-4 text-2xl">
                  💰
                </div>
                <h3 className="text-[#1A1A1A] mb-2">Tax Savers</h3>
                <p className="text-[#6F6F6F]">Looking to maximize 80C, 80D deductions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Documents You'll Need</h2>
          <Card className="border-2 border-[#E9D9FF]">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6A23F5] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A1A1A]">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#E9D9FF] to-white p-6 rounded-xl h-full border-2 border-[#E9D9FF]">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white rounded-full flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#6F6F6F] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBmaWxpbmclMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxODA4MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tax Filing"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#1A1A1A] mb-8">Why File With Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <Calculator className="w-8 h-8 text-[#6A23F5] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Maximum Tax Savings</h3>
                    <p className="text-[#6F6F6F]">Our CAs ensure you claim all eligible deductions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <Clock className="w-8 h-8 text-[#6A23F5] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Quick Filing</h3>
                    <p className="text-[#6F6F6F]">File within 24-48 hours of document submission</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <FileText className="w-8 h-8 text-[#6A23F5] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Expert Verification</h3>
                    <p className="text-[#6F6F6F]">CA-reviewed returns for accuracy and compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#6A23F5] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Refund Tracking</h3>
                    <p className="text-[#6F6F6F]">We monitor your refund until credited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 text-3xl">File Your Salary Income Tax Return Today</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Get started with expert assistance and maximize your tax refund.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">
                Get Started
              </Button>
            </Link>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#6A23F5] rounded-xl px-8 py-6 text-lg"
              >
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
