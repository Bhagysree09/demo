import { motion } from 'motion/react';
import { PiggyBank, Shield, Heart, Home, GraduationCap, CheckCircle2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export function FinancialPlanningPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1634128222187-18eababc763d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYW5uaW5nJTIwZmluYW5jZXxlbnwxfHx8fDE3NjI3NjU4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Financial Planning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-white mb-6">Financial Planning Assistance</h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">Secure your future with expert financial guidance</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762151662378-f40e20901824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjI3NTk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Financial Planning"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[#1A1A1A] mb-6">Build Your Financial Future</h2>
              <p className="text-[#6F6F6F] mb-4">
                Our certified financial planners help you create a comprehensive financial roadmap tailored to your life goals, risk appetite, and financial situation.
              </p>
              <div className="space-y-3">
                {[
                  'Retirement planning strategies',
                  'Investment portfolio management',
                  'Tax-efficient savings plans',
                  'Education planning for children',
                  'Estate and succession planning'
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
            Our Planning Services
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <PiggyBank className="w-8 h-8" />, title: 'Wealth Creation', desc: 'Smart investment strategies' },
              { icon: <Shield className="w-8 h-8" />, title: 'Insurance Planning', desc: 'Protect what matters most' },
              { icon: <Home className="w-8 h-8" />, title: 'Real Estate Advisory', desc: 'Property investment guidance' },
              { icon: <GraduationCap className="w-8 h-8" />, title: 'Education Fund', desc: 'Secure your child\'s future' },
              { icon: <Heart className="w-8 h-8" />, title: 'Retirement Planning', desc: 'Live your golden years stress-free' },
              { icon: <Target className="w-8 h-8" />, title: 'Goal-Based Planning', desc: 'Achieve life milestones' },
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
          <h2 className="text-white mb-6">Start Your Financial Journey Today</h2>
          <p className="text-white/90 text-lg mb-8">Book a free consultation with our financial experts</p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">Schedule Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
