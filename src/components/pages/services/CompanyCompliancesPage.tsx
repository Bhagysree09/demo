import { motion } from 'motion/react';
import { FileCheck, Calendar, ClipboardCheck, FileText, AlertCircle, Shield, CheckCircle2, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export function CompanyCompliancesPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1681505504714-4ded1bc247e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwcmVnaXN0cmF0aW9ufGVufDF8fHx8MTc2Mjc2NTg5MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Company Compliance"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-white mb-6">Company Compliances</h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">Stay compliant with all statutory requirements</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwY29tcGxpYW5jZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2Mjc1OTgxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Company Compliance"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[#1A1A1A] mb-6">Complete Compliance Management</h2>
              <p className="text-[#6F6F6F] mb-4">
                Running a company involves numerous statutory obligations. We help you stay compliant with MCA, ROC, and other regulatory requirements, avoiding penalties and legal issues.
              </p>
              <div className="space-y-3">
                {[
                  'Annual ROC filings (AOC-4, MGT-7)',
                  'Director KYC (DIR-3 KYC)',
                  'Board meeting compliance',
                  'Statutory audit coordination',
                  'DPT-3 and other MCA forms',
                  'Share capital maintenance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6A23F5]" />
                    <span className="text-[#1A1A1A]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-[#1A1A1A] mb-12 text-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Our Compliance Services
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <Calendar className="w-8 h-8" />, title: 'Annual Filings', desc: 'AOC-4, MGT-7, and annual returns' },
              { icon: <FileCheck className="w-8 h-8" />, title: 'Director KYC', desc: 'DIR-3 KYC annual compliance' },
              { icon: <ClipboardCheck className="w-8 h-8" />, title: 'Board Meetings', desc: 'Meeting notices and minutes' },
              { icon: <FileText className="w-8 h-8" />, title: 'MCA Forms', desc: 'All statutory form filings' },
              { icon: <Shield className="w-8 h-8" />, title: 'Audit Support', desc: 'Statutory audit coordination' },
              { icon: <AlertCircle className="w-8 h-8" />, title: 'DPT-3 Filing', desc: 'Deposit compliance' },
              { icon: <Building className="w-8 h-8" />, title: 'Registered Office', desc: 'Address compliance' },
              { icon: <FileCheck className="w-8 h-8" />, title: 'AGM Compliance', desc: 'Annual general meetings' },
            ].map((service, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Card className="border-2 border-[#E9D9FF] h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mx-auto mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2">{service.title}</h3>
                    <p className="text-[#6F6F6F] text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Need Help with Compliance?</h2>
          <p className="text-white/90 text-lg mb-8">Let us manage your company compliances while you focus on growth</p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
