import { Link } from 'react-router-dom';
import { UtensilsCrossed, Store, Truck, Home } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';

export function FoodLicensePage() {
  const whoNeedsIt = [
    { icon: <Store className="w-8 h-8 text-[#6A23F5]" />, title: 'Restaurants & Cafes', description: 'All food service establishments' },
    { icon: <UtensilsCrossed className="w-8 h-8 text-[#6A23F5]" />, title: 'Food Manufacturers', description: 'Packaged food production units' },
    { icon: <Truck className="w-8 h-8 text-[#6A23F5]" />, title: 'Food Distributors', description: 'Wholesale & retail food traders' },
    { icon: <Home className="w-8 h-8 text-[#6A23F5]" />, title: 'Home Bakers', description: 'Cloud kitchens & home-based food businesses' },
  ];

  const licenseTypes = [
    { name: 'Basic FSSAI Registration', turnover: 'Up to ₹12 lakhs', validity: '1-5 years' },
    { name: 'State FSSAI License', turnover: '₹12 lakhs - ₹20 crores', validity: '1-5 years' },
    { name: 'Central FSSAI License', turnover: 'Above ₹20 crores', validity: '1-5 years' },
  ];

  const documents = [
    'Form B (Application form)',
    'Photo ID & Address proof of applicant',
    'Business PAN card',
    'Shop/Property documents (rent/ownership)',
    'Food safety management plan',
    'List of food products',
    'Source of water (testing report if required)',
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Licensing for restaurants & food businesses.</h1>
          <p className="text-white/90 text-lg">
            Get your FSSAI Food License quickly and stay compliant.
          </p>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Who Needs FSSAI License?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoNeedsIt.map((item, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#6F6F6F] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-[#6F6F6F] text-center mt-8">
            Any business involved in food manufacturing, processing, packaging, storage, transportation, or distribution needs an FSSAI license.
          </p>
        </div>
      </section>

      {/* License Types */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Types of FSSAI License</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenseTypes.map((license, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#6A23F5] text-white rounded-full flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-[#1A1A1A] mb-2">{license.name}</h3>
                  <p className="text-[#6F6F6F] text-sm mb-1">Annual Turnover: {license.turnover}</p>
                  <p className="text-[#6F6F6F] text-sm">Validity: {license.validity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-[#6F6F6F] text-center mt-8">
            We help you identify the right license type based on your business.
          </p>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Documents Required</h2>
          <Card className="border-2 border-[#E9D9FF]">
            <CardContent className="p-8">
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </span>
                    <p className="text-[#1A1A1A]">{doc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Why FSSAI License is Important</h2>
          <div className="space-y-4">
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-4">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">✓</span> Mandatory by law — operating without FSSAI license can lead to heavy penalties
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-4">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">✓</span> Builds customer trust and credibility
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-4">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">✓</span> Required for listing on food delivery platforms (Zomato, Swiggy, etc.)
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-4">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">✓</span> Ensures food safety standards are maintained
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A1A1A] mb-6">Processing Timeline</h2>
          <Card className="border-2 border-[#6A23F5] bg-[#E9D9FF]/20">
            <CardContent className="p-6">
              <p className="text-[#1A1A1A] text-lg">
                Registration: 7-10 working days<br />
                State License: 30-45 days<br />
                Central License: 45-60 days
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6A23F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Get Your Food License?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Start your FSSAI registration today with expert assistance.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6">
              Apply for FSSAI License
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
