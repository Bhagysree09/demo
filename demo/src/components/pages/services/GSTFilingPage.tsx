import { Link } from 'react-router-dom';
import { FileText, Calculator, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';


export function GSTFilingPage() {
  const returns = [
    { name: 'GSTR-1', description: 'Details of outward supplies (sales)', frequency: 'Monthly/Quarterly' },
    { name: 'GSTR-3B', description: 'Summary return with tax payment', frequency: 'Monthly' },
    { name: 'GSTR-9', description: 'Annual return', frequency: 'Yearly' },
  ];

  const whatWeOffer = [
    { icon: <FileText className="w-8 h-8 text-[#6A23F5]" />, title: 'Accurate Data Entry', description: 'Professional handling of all sales and purchase data' },
    { icon: <Calculator className="w-8 h-8 text-[#6A23F5]" />, title: 'ITC Reconciliation', description: 'Match input tax credit with 2A/2B data' },
    { icon: <CheckCircle className="w-8 h-8 text-[#6A23F5]" />, title: 'Timely Filing', description: 'Never miss a deadline, avoid penalties' },
    { icon: <AlertTriangle className="w-8 h-8 text-[#6A23F5]" />, title: 'Error Detection', description: 'Identify and fix filing errors before submission' },
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762427354566-2b6902a9fd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRheCUyMGFjY291bnRpbmd8ZW58MXx8fHwxNzYyNzY1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="GST Filing"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-4">Accurate GSTR-1, GSTR-3B, ITC matching & compliance tracking.</h1>
            <p className="text-white/90 text-lg">
              Expert monthly GST filing to keep your business compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GST Returns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">GST Returns We File</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {returns.map((returnType, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF]">
                <CardContent className="p-6">
                  <h3 className="text-[#6A23F5] mb-2">{returnType.name}</h3>
                  <p className="text-[#1A1A1A] mb-2">{returnType.description}</p>
                  <p className="text-[#6F6F6F] text-sm">Frequency: {returnType.frequency}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeOffer.map((item, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#6F6F6F]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Monthly Filing Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Why Monthly GST Filing Matters</h2>
          <div className="space-y-4">
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">âœ“</span> Avoid late fees and penalties (â‚¹200 per day for GSTR-3B)
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">âœ“</span> Maintain clean compliance record
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">âœ“</span> Ensure your customers can claim input tax credit
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF]">
              <CardContent className="p-6">
                <p className="text-[#1A1A1A]">
                  <span className="text-[#6A23F5]">âœ“</span> Keep your business running smoothly without GST notices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6A23F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Need Help with GST Filing?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Let our experts handle your monthly GST returns accurately.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



