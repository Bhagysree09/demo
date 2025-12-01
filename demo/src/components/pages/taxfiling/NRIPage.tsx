import { Link } from 'react-router-dom';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function NRIPage() {
  const documents = [
    'Passport copy',
    'PAN Card',
    'Foreign income statements',
    'Form 16A (TDS certificates)',
    'Rental income documents (if applicable)',
    'Capital gains statements',
    'Bank statements (NRO/NRE accounts)',
    'Employment contract/Work permit',
  ];

  const incomeTypes = [
    { type: 'Rental Income', description: 'From property in India' },
    { type: 'Interest Income', description: 'From NRO/NRE accounts' },
    { type: 'Capital Gains', description: 'From sale of assets in India' },
    { type: 'Business Income', description: 'From business operations in India' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] via-[#8B4FFF] to-[#A855F7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ðŸŒ NRI Tax Filing
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl">Income Tax Filing for NRIs & Global Income</h1>
              <p className="text-white/90 text-lg mb-8">
                Specialized filing for Non-Resident Indians and individuals with foreign income. Navigate DTAA and optimize tax.
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
                src="https://images.unsplash.com/photo-1761735486549-5c2b19dfed09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludmVzdG1lbnR8ZW58MXx8fHwxNzYxODA4MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Business"
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
                <Globe className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">NRIs</h3>
                <p className="text-[#6F6F6F]">Indians working abroad with income in India</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">Residents with Foreign Income</h3>
                <p className="text-[#6F6F6F]">Indian residents earning from overseas</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">Global Investors</h3>
                <p className="text-[#6F6F6F]">Investments in foreign stocks, funds, property</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Income Types */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Indian Income Types We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {incomeTypes.map((income, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6A23F5] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-[#1A1A1A] mb-1">{income.type}</h3>
                      <p className="text-[#6F6F6F] text-sm">{income.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Why Choose Us for NRI Filing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">DTAA Expertise</h3>
                <p className="text-[#6F6F6F]">
                  Apply Double Taxation Avoidance Agreement benefits to reduce tax liability in both countries.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">TDS Refund Management</h3>
                <p className="text-[#6F6F6F]">
                  Claim refund of excess TDS deducted on rental income, interest, and capital gains.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">Residential Status Clarity</h3>
                <p className="text-[#6F6F6F]">
                  Determine correct residential status (NRI, RNOR, Resident) based on stay in India.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">Foreign Asset Reporting</h3>
                <p className="text-[#6F6F6F]">
                  Proper disclosure of foreign bank accounts, assets, and income as per regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
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
          <h2 className="text-white mb-4 text-3xl">File Your NRI Tax Return with Confidence</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Navigate complex NRI taxation with expert guidance. Optimize DTAA benefits and stay compliant.
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



