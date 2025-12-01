import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function CapitalGainsPage() {
  const documents = [
    'Purchase and sale contract notes',
    'Annual capital gains statement',
    'Mutual fund statements',
    'Property purchase/sale documents',
    'PAN Card & Aadhaar',
    'Form 16 (if salaried)',
    'Bank statements',
  ];

  const gainTypes = [
    {
      title: 'Short-term Capital Gains',
      description: 'Assets held for less than specified period',
      tax: '15% for listed equity, Slab rate for others',
    },
    {
      title: 'Long-term Capital Gains',
      description: 'Assets held for more than specified period',
      tax: '10% above â‚¹1L for equity, 20% with indexation for property',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] via-[#8B4FFF] to-[#A855F7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ðŸ“ˆ Capital Gains Filing
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl">Income Tax Filing for Capital Gains</h1>
              <p className="text-white/90 text-lg mb-8">
                Expert filing for investors with stock market, mutual fund, or property gains. Optimize tax with indexation benefits.
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
                src="https://images.unsplash.com/photo-1631649387042-f60a0133d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGludmVzdG1lbnR8ZW58MXx8fHwxNzYxODA4MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Stock Market Investment"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] text-center mb-12">Perfect For Investors With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">Stock Market Trading</h3>
                <p className="text-[#6F6F6F]">Equity shares, F&O, intraday trading</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">Mutual Fund Investments</h3>
                <p className="text-[#6F6F6F]">SIP redemptions, lump sum gains</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">Property Sales</h3>
                <p className="text-[#6F6F6F]">Real estate, land, commercial property</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Capital Gains */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Understanding Capital Gains Tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gainTypes.map((type, index) => (
              <Card key={index} className="border-2 border-[#6A23F5] bg-white">
                <CardContent className="p-6">
                  <h3 className="text-[#6A23F5] mb-2">{type.title}</h3>
                  <p className="text-[#1A1A1A] mb-3">{type.description}</p>
                  <p className="text-[#6F6F6F] text-sm"><strong>Tax Rate:</strong> {type.tax}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Documents Required</h2>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 text-3xl">File Your Capital Gains Tax Return</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Get expert help with complex capital gains calculations and optimize your tax liability.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



