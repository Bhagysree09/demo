import { Link } from 'react-router-dom';
import { Users, TrendingUp, Globe, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';


export function IncomeTaxPage() {
  const whoIsThisFor = [
    { icon: <Users className="w-8 h-8 text-[#6A23F5]" />, title: 'Salaried individuals' },
    { icon: <BarChart3 className="w-8 h-8 text-[#6A23F5]" />, title: 'Freelancers / consultants' },
    { icon: <TrendingUp className="w-8 h-8 text-[#6A23F5]" />, title: 'Investors with capital gains' },
    { icon: <Globe className="w-8 h-8 text-[#6A23F5]" />, title: 'NRIs or individuals with foreign income' },
  ];

  const documents = [
    'PAN Card',
    'Aadhaar Card',
    'Salary Slip / Form 16',
    'Bank Statement',
    'Investment proofs (80C, 80D, etc.)',
    'Capital gains statements (if applicable)',
    'TDS certificates',
  ];

  const process = [
    { step: '1', title: 'Consult', description: 'Discuss your tax situation with our expert' },
    { step: '2', title: 'Document Upload', description: 'Share required documents securely' },
    { step: '3', title: 'Filing', description: 'We prepare and file your ITR accurately' },
    { step: '4', title: 'Refund Follow-up', description: 'Track your refund status with our support' },
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762151662378-f40e20901824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBmaWxpbmclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzYyNzY1ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Income Tax Filing"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-4">File Your Income Tax Return with Expert Assistance.</h1>
            <p className="text-white/90 text-lg">
              Hassle-free, accurate filing for all types of income.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Who is this for?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoIsThisFor.map((item, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <p className="text-[#1A1A1A]">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Documents Required</h2>
          <div className="bg-white p-8 rounded-xl border-2 border-[#E9D9FF]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#E9D9FF]/30 p-6 rounded-xl h-full">
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
      <section className="py-20 bg-[#6A23F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to File Your Income Tax Return?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Get started with expert assistance today.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6">
              Start Filing
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
