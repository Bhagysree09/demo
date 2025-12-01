import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function ESOPPage() {
  const documents = [
    'Form 16 from employer',
    'ESOP/RSU grant & vesting details',
    'Perquisite value statement',
    'Stock sale proceeds statement',
    'Foreign brokerage statements',
    'PAN Card & Aadhaar',
    'Bank statements',
    'Form 67 (foreign tax credit)',
  ];

  const taxEvents = [
    {
      event: 'At Vesting/Exercise',
      description: 'Perquisite value taxed as salary income',
      tax: 'As per your slab rate',
    },
    {
      event: 'At Sale of Shares',
      description: 'Capital gains on sale proceeds',
      tax: 'STCG/LTCG based on holding period',
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
                ðŸ† ESOP/RSU Filing
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl">Tax Filing for ESOP & RSU Income</h1>
              <p className="text-white/90 text-lg mb-8">
                Expert handling of complex ESOP/RSU taxation. Navigate perquisite value, capital gains, and foreign tax credit.
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
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxODA0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Startup Team"
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
                <Award className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">Startup Employees</h3>
                <p className="text-[#6F6F6F]">Employees with ESOP/stock options from startups</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">MNC Employees</h3>
                <p className="text-[#6F6F6F]">RSU grants from foreign companies</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-[#6A23F5] mx-auto mb-4" />
                <h3 className="text-[#1A1A1A] mb-2">Tech Professionals</h3>
                <p className="text-[#6F6F6F]">Equity compensation in lieu of salary</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Events */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Understanding ESOP/RSU Taxation</h2>
          <div className="space-y-6">
            {taxEvents.map((event, index) => (
              <Card key={index} className="border-2 border-[#6A23F5] bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#6A23F5] mb-2 text-xl">{event.event}</h3>
                      <p className="text-[#1A1A1A] mb-2">{event.description}</p>
                      <p className="text-[#6F6F6F]"><strong>Tax Treatment:</strong> {event.tax}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complex Scenarios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">We Handle Complex ESOP Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">Foreign Tax Credit</h3>
                <p className="text-[#6F6F6F]">
                  Claim credit for taxes paid abroad on RSU income to avoid double taxation (Form 67).
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">Multiple Vesting Events</h3>
                <p className="text-[#6F6F6F]">
                  Track and report perquisite value for multiple ESOP vesting events throughout the year.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">Currency Conversion</h3>
                <p className="text-[#6F6F6F]">
                  Accurate INR conversion for foreign stock sales using RBI reference rates.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <h3 className="text-[#6A23F5] mb-3">Cost of Acquisition</h3>
                <p className="text-[#6F6F6F]">
                  Calculate correct cost basis including perquisite value for capital gains computation.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBmaWxpbmclMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxODA4MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Tax Filing"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#1A1A1A] mb-8">Why File ESOP/RSU Tax With Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#E9D9FF]/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    âœ“
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">ESOP Tax Specialists</h3>
                    <p className="text-[#6F6F6F]">Deep expertise in equity compensation taxation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#E9D9FF]/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    âœ“
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Accurate Calculations</h3>
                    <p className="text-[#6F6F6F]">Complex perquisite value and capital gains computation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#E9D9FF]/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    âœ“
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Foreign Tax Credit</h3>
                    <p className="text-[#6F6F6F]">Maximize relief from double taxation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#E9D9FF]/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    âœ“
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Compliance Assurance</h3>
                    <p className="text-[#6F6F6F]">Proper reporting as per IT Act and FEMA regulations</p>
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
          <h2 className="text-white mb-4 text-3xl">File Your ESOP/RSU Tax Return with Experts</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Don't let complex ESOP taxation confuse you. Get expert help and file accurately.
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



