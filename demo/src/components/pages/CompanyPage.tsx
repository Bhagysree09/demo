import { Link } from 'react-router-dom';
import { Building2, Users, FileText, Scale } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export function CompanyPage() {
  const services = [
    {
      icon: <Building2 className="w-10 h-10 text-[#6A23F5]" />,
      title: 'Private Limited Registration',
      description: 'Ideal for startups seeking funding & credibility.',
    },
    {
      icon: <Users className="w-10 h-10 text-[#6A23F5]" />,
      title: 'LLP Registration',
      description: 'Flexibility of partnership + limited liability protection.',
    },
    {
      icon: <FileText className="w-10 h-10 text-[#6A23F5]" />,
      title: 'Proprietorship Setup',
      description: 'Simple structure for individual business owners.',
    },
    {
      icon: <Scale className="w-10 h-10 text-[#6A23F5]" />,
      title: 'Partnership Firm Registration',
      description: 'Register a traditional partnership legally.',
    },
  ];

  const process = [
    { step: '1', title: 'Free Consultation', description: 'Discuss your business needs with our experts' },
    { step: '2', title: 'Documentation Support', description: 'We guide you through all required documents' },
    { step: '3', title: 'Application Filing', description: 'We handle all paperwork and submissions' },
    { step: '4', title: 'Certification & Account Setup', description: 'Receive your incorporation certificate and get set up' },
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Start Your Business the Right Way.</h1>
          <p className="text-white/90 text-lg">
            Complete business registration and licensing support for startups and established businesses.
          </p>
        </div>
      </section>

      {/* We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-[#1A1A1A] mb-2">{service.title}</h3>
                  <p className="text-[#6F6F6F]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <Card className="border-2 border-[#6A23F5] bg-[#E9D9FF]/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-[#1A1A1A] mb-2">CIN, PAN, MSME, GST Assistance</h3>
              <p className="text-[#6F6F6F]">Get all required licenses in one place.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Our Process</h2>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A1A1A] mb-4">Ready to Start Your Business?</h2>
          <p className="text-[#6F6F6F] mb-8 text-lg">
            Get a personalized quote for your business registration.
          </p>
          <Link to="/contact">
            <Button className="bg-[#6A23F5] hover:bg-[#571BD0] text-white rounded-xl px-8 py-6">
              Get Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



