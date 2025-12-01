import { Link } from 'react-router-dom';
import { Store, ShoppingBag, Truck, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';


export function GSTRegistrationPage() {
  const whoNeedsGST = [
    { icon: <Store className="w-8 h-8 text-[#6A23F5]" />, title: 'Retailers & Wholesalers' },
    { icon: <ShoppingBag className="w-8 h-8 text-[#6A23F5]" />, title: 'Online Sellers' },
    { icon: <Truck className="w-8 h-8 text-[#6A23F5]" />, title: 'Service Providers' },
    { icon: <Globe className="w-8 h-8 text-[#6A23F5]" />, title: 'Import/Export Businesses' },
  ];

  const benefits = [
    'Get GSTIN within 3-7 working days',
    'Complete documentation support',
    'Legal compliance for your business',
    'Enable invoice generation with GST',
    'Claim input tax credit',
    'Expand business across India',
  ];

  const documents = [
    'PAN Card of Business',
    'Aadhaar Card of Proprietor/Partners/Directors',
    'Business Address Proof',
    'Bank Account Statement/Cancelled Cheque',
    'Business Registration Certificate (if applicable)',
    'Photographs of Proprietor/Partners/Directors',
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762427354566-2b6902a9fd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRheCUyMGFjY291bnRpbmd8ZW58MXx8fHwxNzYyNzY1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="GST Registration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-4">Get GSTIN within days with proper documentation.</h1>
            <p className="text-white/90 text-lg">
              Fast and hassle-free GST registration for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Needs GST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Who Needs GST Registration?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoNeedsGST.map((item, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <p className="text-[#1A1A1A]">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-[#6F6F6F] text-center mt-8">
            *GST registration is mandatory if your annual turnover exceeds â‚¹40 lakhs (â‚¹20 lakhs for service providers)
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Benefits of GST Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-[#6A23F5] flex-shrink-0 mt-0.5" />
                <p className="text-[#1A1A1A]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Documents Required</h2>
          <div className="bg-[#E9D9FF]/30 p-8 rounded-xl">
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6A23F5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1A1A1A]">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6A23F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Register for GST?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Get your GSTIN quickly with our expert support.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6">
              Start Registration
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



