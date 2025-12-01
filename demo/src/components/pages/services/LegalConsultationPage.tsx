import { motion } from 'motion/react';
import { FileText, Users, Building, ShieldCheck, Briefcase, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export function LegalConsultationPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMGxhd3llcnxlbnwxfHx8fDE3NjI3NTk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Legal Consultation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-white mb-6">Legal Consultation Services</h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">Expert legal guidance for individuals and businesses</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[#1A1A1A] mb-6">Professional Legal Support</h2>
              <p className="text-[#6F6F6F] mb-4">
                Navigate complex legal matters with confidence. Our team of experienced legal professionals provides comprehensive consultation services across various domains of law.
              </p>
              <div className="space-y-3">
                {[
                  'Contract review and drafting',
                  'Business legal compliance',
                  'Employment law matters',
                  'Property and real estate law',
                  'Intellectual property protection',
                  'Dispute resolution support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6A23F5]" />
                    <span className="text-[#1A1A1A]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMGxhd3llcnxlbnwxfHx8fDE3NjI3NTk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Legal Consultation"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-[#1A1A1A] mb-12 text-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Areas of Practice
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <Building className="w-8 h-8" />, title: 'Corporate Law', desc: 'Company formation and governance' },
              { icon: <FileText className="w-8 h-8" />, title: 'Contract Law', desc: 'Agreement drafting and review' },
              { icon: <Users className="w-8 h-8" />, title: 'Employment Law', desc: 'HR policies and labor compliance' },
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'IP Protection', desc: 'Trademark and copyright matters' },
              { icon: <Briefcase className="w-8 h-8" />, title: 'Business Advisory', desc: 'Legal risk management' },
              { icon: <Award className="w-8 h-8" />, title: 'Compliance', desc: 'Regulatory adherence support' },
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
          <h2 className="text-white mb-6">Need Legal Consultation?</h2>
          <p className="text-white/90 text-lg mb-8">Book a consultation with our legal experts today</p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">Get Legal Advice</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
