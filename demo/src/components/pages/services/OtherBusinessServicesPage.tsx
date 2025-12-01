import { motion } from 'motion/react';
import { FileText, Key, Shield, Scale, Building2, Users, Fingerprint, ClipboardList, FileCheck, Calculator, Palette, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export function OtherBusinessServicesPage() {
  const services = [
    { icon: <FileText className="w-8 h-8" />, title: 'ROC Filing', desc: 'All MCA and ROC related filings', color: 'from-purple-500 to-purple-600' },
    { icon: <Key className="w-8 h-8" />, title: 'DIR 3 KYC', desc: 'Director KYC compliance', color: 'from-blue-500 to-blue-600' },
    { icon: <Shield className="w-8 h-8" />, title: 'Trademark Objection Management', desc: 'Handle trademark objections', color: 'from-green-500 to-green-600' },
    { icon: <Scale className="w-8 h-8" />, title: 'Company Annual Compliance Premium', desc: 'Comprehensive annual compliance', color: 'from-orange-500 to-orange-600' },
    { icon: <Building2 className="w-8 h-8" />, title: 'Trade Licence', desc: 'Municipal trade license registration', color: 'from-pink-500 to-pink-600' },
    { icon: <Users className="w-8 h-8" />, title: 'PF Registration', desc: 'Employee Provident Fund setup', color: 'from-teal-500 to-teal-600' },
    { icon: <Fingerprint className="w-8 h-8" />, title: 'Digital Signature', desc: 'DSC for directors and compliance', color: 'from-indigo-500 to-indigo-600' },
    { icon: <ClipboardList className="w-8 h-8" />, title: 'DPT 3 Filing', desc: 'Deposit acceptance compliance', color: 'from-red-500 to-red-600' },
    { icon: <FileCheck className="w-8 h-8" />, title: 'ADT1 Filing', desc: 'Auditor appointment filing', color: 'from-yellow-500 to-yellow-600' },
    { icon: <Calculator className="w-8 h-8" />, title: 'Bookkeeping Services', desc: 'Professional accounting & bookkeeping', color: 'from-cyan-500 to-cyan-600' },
    { icon: <Palette className="w-8 h-8" />, title: 'Trademark Logo Design', desc: 'Professional logo design services', color: 'from-violet-500 to-violet-600' },
    { icon: <MapPin className="w-8 h-8" />, title: 'Virtual Office for GST', desc: 'Premium virtual address for GST', color: 'from-emerald-500 to-emerald-600' },
    { icon: <Building2 className="w-8 h-8" />, title: 'Virtual Office for Business', desc: 'Virtual office for company registration', color: 'from-rose-500 to-rose-600' },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-white mb-6">Other Business Services</h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">Comprehensive business support services for your growing company</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[#1A1A1A] mb-4">All-in-One Business Solutions</h2>
            <p className="text-[#6F6F6F] text-lg max-w-3xl mx-auto">
              From compliance to branding, we offer a complete suite of business services to help you succeed
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((service, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={{ y: -5 }}>
                <Card className="border-2 border-[#E9D9FF] h-full hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2">{service.title}</h3>
                    <p className="text-[#6F6F6F] text-sm mb-4">{service.desc}</p>
                    <div className="flex items-center text-[#6A23F5] text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      <span>Available</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[#1A1A1A] mb-6">Why Choose Our Services?</h2>
              <div className="space-y-4">
                {[
                  { title: 'Expert Professionals', desc: 'Team of CAs, lawyers, and business consultants' },
                  { title: 'Fast Processing', desc: 'Quick turnaround time for all services' },
                  { title: 'Transparent Pricing', desc: 'No hidden charges, upfront cost disclosure' },
                  { title: 'End-to-End Support', desc: 'Complete handholding from start to finish' },
                  { title: 'Compliance Guarantee', desc: 'Stay compliant with all regulations' },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-[#6A23F5] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-[#1A1A1A] mb-1">{benefit.title}</h4>
                      <p className="text-[#6F6F6F] text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#6A23F5] bg-gradient-to-br from-[#6A23F5]/5 to-[#A855F7]/5">
                <CardContent className="p-8">
                  <h3 className="text-[#1A1A1A] mb-4">Need a Custom Package?</h3>
                  <p className="text-[#6F6F6F] mb-6">
                    We understand every business is unique. Contact us to discuss your specific requirements and get a tailored solution.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-[#6A23F5] text-white hover:bg-[#5A1DE5] rounded-xl px-6 py-3 w-full">
                      Talk to Expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h3 className="text-[#1A1A1A] mb-4">Popular Service Bundles</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-[#6F6F6F]">
                      <CheckCircle2 className="w-4 h-4 text-[#6A23F5]" />
                      <span>Startup Complete Package</span>
                    </li>
                    <li className="flex items-center gap-2 text-[#6F6F6F]">
                      <CheckCircle2 className="w-4 h-4 text-[#6A23F5]" />
                      <span>Annual Compliance Bundle</span>
                    </li>
                    <li className="flex items-center gap-2 text-[#6F6F6F]">
                      <CheckCircle2 className="w-4 h-4 text-[#6A23F5]" />
                      <span>HR & Payroll Package</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">Let us handle your business services while you focus on growth</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">Contact Us</Button>
            </Link>
            <a href="tel:9740564642">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#6A23F5] rounded-xl px-8 py-6 text-lg">
                Call: 9740564642
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}



