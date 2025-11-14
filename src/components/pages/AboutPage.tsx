import { Link } from 'react-router-dom';
import { Shield, Target, Clock, HeartHandshake, Users, Award, TrendingUp, CheckCircle2, Lightbulb, Globe, Heart, Zap, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CounterAnimation } from '../utils/CounterAnimation';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

export function AboutPage() {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1646215993316-c98f642303ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYm91dCUyMGNvbXBhbnklMjBvZmZpY2V8ZW58MXx8fHwxNzYyNzY1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About TaxBreeze"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="200" rx="40" fill="white"/>
                  <path d="M60 80H140M60 100H140M60 120H140" stroke="#6A23F5" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M100 140L85 155M100 140L115 155" stroke="#6A23F5" strokeWidth="8" strokeLinecap="round"/>
                  <circle cx="100" cy="60" r="15" fill="#6A23F5"/>
                </svg>
              </div>
            </motion.div>
            <h1 className="text-white mb-6">About TaxBreeze</h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">Making tax and compliance simple for individuals and businesses across India</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Our Story</h2>
              <p className="text-[#6F6F6F] mb-4">
                Founded in 2018, TaxBreeze was born from a simple vision: to make tax compliance accessible and stress-free for everyone. We saw how complex taxation and regulatory requirements overwhelmed individuals and small businesses, creating unnecessary anxiety and errors.
              </p>
              <p className="text-[#6F6F6F] mb-4">
                What started as a small team of passionate chartered accountants has grown into a trusted platform serving over 5,000 clients across India. Our journey has been driven by innovation, dedication, and an unwavering commitment to client success.
              </p>
              <p className="text-[#6F6F6F]">
                Today, we combine expert knowledge with cutting-edge technology to deliver seamless compliance solutions. From income tax filing to GST services, company registration to trademark protection – we're here to help you focus on what matters most: growing your business.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873268528-af4613d099b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwam91cm5leSUyMG9mZmljZXxlbnwxfHx8fDE3NjI3NTk4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Story"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/* <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1A1A1A] mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Meet Our Founder
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#E9D9FF] overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1686543972602-da0c7ea61ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VuZGVyJTIwY2VvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNjg4NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Founder"
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="p-8 flex flex-col justify-center"
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#1A1A1A] mb-2">Rajesh Kumar</h3>
                    <p className="text-[#6A23F5] mb-4">Founder & CEO</p>
                    <p className="text-[#6F6F6F] mb-4">
                      A Chartered Accountant with over 15 years of experience in taxation and business compliance, Rajesh founded TaxBreeze with a mission to democratize access to quality financial services.
                    </p>
                    <p className="text-[#6F6F6F]">
                      His vision is to build India's most trusted and customer-centric compliance platform, where technology and expertise come together to serve millions of Indians.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      {/* <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1A1A1A] mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            Our Leadership Team
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Card className="border-2 border-[#E9D9FF] overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758518727592-706e80ebc354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI2OTE1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="COO"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-[#1A1A1A] mb-1">Priya Sharma</h3>
                    <p className="text-[#6A23F5] mb-3 text-sm">Chief Operating Officer</p>
                    <p className="text-[#6F6F6F] text-sm">Leading operations with 12+ years in finance and process excellence</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="border-2 border-[#E9D9FF] overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758518727592-706e80ebc354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI2OTE1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="CTO"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-[#1A1A1A] mb-1">Amit Patel</h3>
                    <p className="text-[#6A23F5] mb-3 text-sm">Chief Technology Officer</p>
                    <p className="text-[#6F6F6F] text-sm">Driving digital innovation with expertise in fintech solutions</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="border-2 border-[#E9D9FF] overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758518727592-706e80ebc354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI2OTE1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Head of Tax"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-[#1A1A1A] mb-1">Dr. Neha Gupta</h3>
                    <p className="text-[#6A23F5] mb-3 text-sm">Head of Tax Advisory</p>
                    <p className="text-[#6F6F6F] text-sm">CA with 18+ years specializing in corporate and international taxation</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Our Values */}
      <section ref={valuesRef} className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1A1A1A] mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {[
              { icon: <Shield className="w-10 h-10" />, title: 'Integrity', description: 'Your financial data is secure and confidential.' },
              { icon: <Target className="w-10 h-10" />, title: 'Accuracy', description: 'We ensure correct calculations & compliance.' },
              { icon: <Clock className="w-10 h-10" />, title: 'Timeliness', description: 'We file and deliver on time.' },
              { icon: <HeartHandshake className="w-10 h-10" />, title: 'Support', description: 'You get personal assistance — no bots.' },
            ].map((value, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="border-2 border-[#E9D9FF] h-full text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2">{value.title}</h3>
                    <p className="text-[#6F6F6F] text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: 5000, label: 'Happy Clients', suffix: '+' },
              { number: 10000, label: 'ITR Filed', suffix: '+' },
              { number: 500, label: 'Companies Registered', suffix: '+' },
              { number: 98, label: 'Customer Satisfaction', suffix: '%' },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={staggerItem}>
                <div className="text-4xl text-[#6A23F5] mb-2">
                  <CounterAnimation end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[#6F6F6F]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-white mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Join thousands of satisfied clients who trust TaxBreeze
          </motion.p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
