import { Link } from 'react-router-dom';
import { FileCheck, FileText, Search, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function GSTServicesPage() {
  const gstServices = [
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'GST Registration',
      description: 'Get your GSTIN quickly with complete documentation support. Register within 3-7 working days.',
      link: '/gst-services/registration',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'GST Monthly Filing',
      description: 'Accurate GSTR-1, GSTR-3B filing with ITC reconciliation. Never miss a deadline.',
      link: '/gst-services/filing',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'GST Compliance Review',
      description: 'Identify errors, ITC mismatches, and avoid penalties with expert compliance audit.',
      link: '/gst-services/compliance',
      gradient: 'from-cyan-600 to-teal-600',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] via-[#8B4FFF] to-[#A855F7] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              ðŸ“‹ GST Services
            </div>
            <h1 className="text-white mb-6 text-4xl lg:text-5xl">Complete GST Solutions for Your Business</h1>
            <p className="text-white/90 text-lg lg:text-xl mb-8">
              From registration to monthly filing and compliance review - we handle all your GST needs.
            </p>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* GST Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A1A1A] mb-4">Our GST Services</h2>
            <p className="text-[#6F6F6F] text-lg">
              Comprehensive GST solutions to keep your business compliant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gstServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card className="border-2 border-gray-200 hover:border-[#6A23F5] transition-all duration-300 h-full hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-[#1A1A1A] mb-3 text-2xl group-hover:text-[#6A23F5] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6F6F6F] mb-6">{service.description}</p>
                    <div className="flex items-center text-[#6A23F5] group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why GST Compliance Matters */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYxNzQ4NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Growth"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-[#1A1A1A] mb-6">Why GST Compliance Matters</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Avoid Penalties</h3>
                    <p className="text-[#6F6F6F]">Late filing attracts â‚¹200 per day penalty for GSTR-3B</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Maintain ITC Benefits</h3>
                    <p className="text-[#6F6F6F]">Timely filing ensures your customers can claim input tax credit</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Clean Compliance Record</h3>
                    <p className="text-[#6F6F6F]">Avoid GST notices and scrutiny from tax authorities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#6A23F5] flex items-center justify-center text-white flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Business Credibility</h3>
                    <p className="text-[#6F6F6F]">Proper GST compliance builds trust with vendors and customers</p>
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
          <h2 className="text-white mb-4 text-3xl">Need Help with GST?</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Let our GST experts handle your registration, filing, and compliance needs.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg group">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



