import { Link } from 'react-router-dom';
import { FileText, Receipt, ShieldCheck, Building2, UtensilsCrossed } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export function ServicesPage() {
  const serviceCategories = [
    {
      icon: <FileText className="w-10 h-10 text-[#6A23F5]" />,
      category: 'Income Tax Filing',
      services: ['Salaried', 'Capital Gains', 'NRIs', 'ESOP/RSU'],
      link: '/services/income-tax',
    },
    {
      icon: <Receipt className="w-10 h-10 text-[#6A23F5]" />,
      category: 'GST Services',
      services: ['Registration', 'Monthly Filing', 'Compliance Review'],
      links: ['/services/gst-registration', '/services/gst-filing', '/services/gst-compliance'],
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#6A23F5]" />,
      category: 'Trademark Services',
      services: ['Registration', 'Objection Reply'],
      links: ['/services/trademark-registration', '/services/trademark-objection'],
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#6A23F5]" />,
      category: 'Business Registrations',
      services: ['Pvt Ltd', 'LLP', 'Proprietorship', 'MSME'],
      link: '/company',
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10 text-[#6A23F5]" />,
      category: 'Licensing',
      services: ['Food License (FSSAI)'],
      link: '/services/food-license',
    },
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Explore Our Services</h1>
          <p className="text-white/90 text-lg">
            Comprehensive tax, GST, and business compliance solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-[#1A1A1A] mb-4">{category.category}</h3>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="text-[#6F6F6F] flex items-start">
                        <span className="text-[#6A23F5] mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  {category.link && (
                    <Link to={category.link}>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[#6A23F5] text-[#6A23F5] hover:bg-[#6A23F5] hover:text-white rounded-xl"
                      >
                        Know More
                      </Button>
                    </Link>
                  )}
                  {category.links && (
                    <div className="space-y-2">
                      {category.links.map((link, idx) => (
                        <Link key={idx} to={link}>
                          <Button
                            variant="outline"
                            className="w-full border-2 border-[#6A23F5] text-[#6A23F5] hover:bg-[#6A23F5] hover:text-white rounded-xl"
                          >
                            {category.services[idx]}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A1A1A] mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-[#6F6F6F] mb-8 text-lg">
            Our experts can help you choose the right service for your needs.
          </p>
          <Link to="/contact">
            <Button className="bg-[#6A23F5] hover:bg-[#571BD0] text-white rounded-xl px-8 py-6">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
