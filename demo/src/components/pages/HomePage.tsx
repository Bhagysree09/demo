import { Link } from 'react-router-dom';
import { FileText, Building, Receipt, ShieldCheck, UtensilsCrossed, CheckCircle2, MessageCircle, ArrowRight, TrendingUp, Users, Clock, Award, Star, Phone, Zap, Target, Heart, Briefcase, DollarSign, FileCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CounterAnimation } from '../utils/CounterAnimation';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

export function HomePage() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const industriesRef = useRef(null);
  const industriesInView = useInView(industriesRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Income Tax Filing',
      description: 'Hassle-free filing for individuals, NRIs & investors.',
      link: '/tax-filing',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      icon: <Receipt className="w-10 h-10" />,
      title: 'GST Services',
      description: 'Complete GST registration, filing & compliance solutions.',
      link: '/gst-services',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Trademark Services',
      description: 'Protect your brand with trademark registration.',
      link: '/trademark-services',
      gradient: 'from-cyan-600 to-teal-600',
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: 'Company Setup',
      description: 'Register your Pvt Ltd, LLP, or Partnership firm.',
      link: '/company',
      gradient: 'from-teal-600 to-green-600',
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10" />,
      title: 'Food License',
      description: 'FSSAI licensing for restaurants & food businesses.',
      link: '/food-license',
      gradient: 'from-green-600 to-emerald-600',
    },
  ];

  const benefits = [
    { icon: <CheckCircle2 className="w-6 h-6" />, text: 'Transparent Pricing â€” No Hidden Charges' },
    { icon: <Users className="w-6 h-6" />, text: 'Dedicated Personal Expert' },
    { icon: <Clock className="w-6 h-6" />, text: 'Accurate & On-time Filing' },
    { icon: <ShieldCheck className="w-6 h-6" />, text: 'Data Privacy & Confidentiality Maintained' },
    { icon: <TrendingUp className="w-6 h-6" />, text: 'Made for Salaried, Freelancers, Small Businesses & Startups' },
  ];

  const stats = [
    { number: 5000, label: 'Happy Clients', suffix: '+' },
    { number: 10000, label: 'Returns Filed', suffix: '+' },
    { number: 98, label: 'Success Rate', suffix: '%' },
    { number: 24, label: 'Support', suffix: '/7' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Startup Founder',
      image: 'https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjE4NDg2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'TaxBreeze made my ITR filing so simple! Their team handled everything professionally and I got my refund within 2 weeks.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1611663809751-a988194a855a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHRlc3RpbW9uaWFsJTIwaGFwcHl8ZW58MXx8fHwxNzYxOTc2MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Excellent service for ESOP taxation! They explained everything clearly and filed my complex return with ease.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTk3NTk2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Got my FSSAI license and GST registration done quickly. Very professional and helpful team!',
      rating: 5,
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Share Your Requirements',
      description: 'Tell us what you need - tax filing, GST, trademark, or company setup',
      icon: <MessageCircle className="w-8 h-8" />,
    },
    {
      step: '2',
      title: 'Upload Documents',
      description: 'Securely share required documents through our platform',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: '3',
      title: 'Expert Processing',
      description: 'Our CAs and experts handle everything professionally',
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: '4',
      title: 'Get It Done',
      description: 'Receive your filed returns, certificates, or registrations',
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
  ];

  const industries = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Startups & SMEs',
      description: 'Complete compliance solutions for growing businesses',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Freelancers',
      description: 'Easy tax filing for independent professionals',
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Corporates',
      description: 'Enterprise-grade tax and GST services',
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: 'Food & Beverage',
      description: 'FSSAI licensing and compliance support',
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Processing',
      description: '24-48 hour turnaround for most services',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear upfront costs',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: '100% Accurate',
      description: 'Error-free filing guaranteed',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personal Support',
      description: 'Dedicated CA assigned to you',
    },
  ];

  // Floating cards data for hero section
  const floatingCards = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'ITR Filed',
      subtitle: 'Completed',
      status: 'success',
      delay: 0,
      position: { top: '10%', left: '-5%' }
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      title: 'GST Return',
      subtitle: 'In Progress',
      status: 'progress',
      delay: 0.2,
      position: { top: '50%', left: '-8%' }
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Company Setup',
      subtitle: 'â‚¹15,999',
      status: 'price',
      delay: 0.4,
      position: { bottom: '15%', left: '0%' }
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Trademark',
      subtitle: '98% Success',
      status: 'success',
      delay: 0.6,
      position: { top: '5%', right: '-5%' }
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Tax Saved',
      subtitle: 'â‚¹45,000',
      status: 'success',
      delay: 0.8,
      position: { top: '45%', right: '-8%' }
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Refund',
      subtitle: 'Processed',
      status: 'success',
      delay: 1,
      position: { bottom: '20%', right: '0%' }
    },
  ];

  return (
    <div>
      {/* Hero Banner with Floating Cards Animation */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] via-[#8B4FFF] to-[#A855F7] overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm"
              >
                âœ¨ Trusted by 5000+ Businesses
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white mb-6 text-4xl lg:text-5xl xl:text-6xl"
              >
                Simplify Your Taxes, GST & Business Compliance
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/90 mb-8 text-lg lg:text-xl"
              >
                Fast, reliable and guided support for individuals, professionals and businesses. File with confidence, grow with ease.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg group">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Now
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Right Side - Person with Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative h-[600px] flex items-center justify-center">
                {/* Central Image */}
                <motion.div 
                  className="relative z-10"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-2xl"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758876022088-2d46af5635c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxhcHRvcCUyMHNtaWxpbmd8ZW58MXx8fHwxNzYyNTEwMjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Tax Professional"
                    className="relative rounded-full w-80 h-80 object-cover border-8 border-white/20 shadow-2xl"
                  />
                </motion.div>

                {/* Floating Cards */}
                {floatingCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={card.position}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0],
                    }}
                    transition={{
                      opacity: { delay: card.delay, duration: 0.5 },
                      scale: { delay: card.delay, duration: 0.5 },
                      y: {
                        delay: card.delay + 0.5,
                        duration: 2 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl min-w-[180px]">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            card.status === 'success' ? 'bg-green-100 text-green-600' :
                            card.status === 'progress' ? 'bg-blue-100 text-blue-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {card.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-[#1A1A1A] text-sm">{card.title}</div>
                            <div className={`text-xs flex items-center gap-1 ${
                              card.status === 'success' ? 'text-green-600' :
                              card.status === 'progress' ? 'text-blue-600' :
                              'text-purple-600'
                            }`}>
                              {card.status === 'success' && <CheckCircle className="w-3 h-3" />}
                              {card.status === 'progress' && <AlertCircle className="w-3 h-3" />}
                              {card.subtitle}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section - Animated Counters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={staggerItem}
              >
                <div className="text-4xl lg:text-5xl text-[#6A23F5] mb-2">
                  <CounterAnimation end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[#6F6F6F]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#E9D9FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-[#1A1A1A] mb-4">Why Choose TaxBreeze?</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              Experience the perfect blend of technology and expertise
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10 }}
              >
                <Card className="border-2 border-[#E9D9FF] hover:border-[#6A23F5] transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-[#1A1A1A] mb-2">{feature.title}</h3>
                    <p className="text-[#6F6F6F] text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#1A1A1A] mb-4">Our Services</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              Comprehensive tax, GST, and business compliance solutions tailored for your success
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <Link to={service.link} className="group block">
                  <Card className="border-2 border-transparent hover:border-[#6A23F5] transition-all duration-300 h-full hover:shadow-2xl hover:-translate-y-2">
                    <CardContent className="p-8">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-[#1A1A1A] mb-3 group-hover:text-[#6A23F5] transition-colors">{service.title}</h3>
                      <p className="text-[#6F6F6F] mb-4">{service.description}</p>
                      <div className="flex items-center text-[#6A23F5] group-hover:gap-2 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section ref={industriesRef} className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={industriesInView ? "visible" : "hidden"}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjI0NjExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse Team"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={industriesInView ? "visible" : "hidden"}
            >
              <h2 className="text-[#1A1A1A] mb-8">Industries We Serve</h2>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={industriesInView ? "visible" : "hidden"}
              >
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mb-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2">{industry.title}</h3>
                    <p className="text-[#6F6F6F] text-sm">{industry.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Process Animation */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            <h2 className="text-[#1A1A1A] mb-4">How It Works</h2>
            <p className="text-[#6F6F6F] text-lg">
              Get started in 4 simple steps
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            {process.map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={staggerItem}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] rounded-full flex items-center justify-center text-white mx-auto"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 40px rgba(106, 35, 245, 0.3)"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-10 h-10 bg-[#0CAB63] rounded-full flex items-center justify-center text-white"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {item.step}
                  </motion.div>
                </div>
                <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-[#6F6F6F] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories with Image */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Empowering Business Success</h2>
              <p className="text-[#6F6F6F] text-lg mb-6">
                From startups to established enterprises, we've helped thousands achieve their compliance goals while focusing on growth.
              </p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Award, text: '500+ Startups Successfully Registered', color: 'from-blue-500 to-blue-600' },
                  { icon: TrendingUp, text: 'â‚¹50 Cr+ Tax Savings for Clients', color: 'from-green-500 to-green-600' },
                  { icon: Target, text: '98% Client Retention Rate', color: 'from-purple-500 to-purple-600' },
                  { icon: CheckCircle2, text: 'Zero Penalty Track Record', color: 'from-pink-500 to-pink-600' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[#1A1A1A]">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwY2VsZWJyYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzYyNDMyMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Success Celebration"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518725921-1eb74ed293be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTc5ODk5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Consultation"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[#1A1A1A] mb-8">Your Benefits with TaxBreeze</h2>
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#E9D9FF]/30 transition-colors"
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <p className="text-[#1A1A1A] pt-2">{benefit.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with Floating Cards */}
      <section ref={testimonialsRef} className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            <h2 className="text-[#1A1A1A] mb-4">What Our Clients Say</h2>
            <p className="text-[#6F6F6F] text-lg">
              Trusted by thousands of satisfied customers
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="relative"
              >
                <Card className="border-2 border-[#E9D9FF] h-full overflow-visible">
                  <CardContent className="p-6 relative">
                    {/* Floating badge */}
                    <motion.div
                      className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </motion.div>

                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h4 className="text-[#1A1A1A]">{testimonial.name}</h4>
                        <p className="text-[#6F6F6F] text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-[#6F6F6F]">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Your Trusted Tax & Compliance Partner</h2>
              <p className="text-[#6F6F6F] text-lg mb-6">
                We understand that tax filing and compliance can be overwhelming. That's why we've built a team of expert CAs and tax professionals who are committed to making your experience seamless.
              </p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Award, text: 'Certified Chartered Accountants' },
                  { icon: CheckCircle2, text: '100% Accuracy Guaranteed' },
                  { icon: ShieldCheck, text: 'Secure & Confidential' },
                  { icon: Clock, text: '24-48 Hour Turnaround' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    variants={staggerItem}
                  >
                    <item.icon className="w-6 h-6 text-[#6A23F5]" />
                    <span className="text-[#1A1A1A]">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { src: 'https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50YW50JTIwd29ya2luZ3xlbnwxfHx8fDE3NjE5NzYzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Accountant Working', mt: 0 },
                { src: 'https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwdGF4JTIwZG9jdW1lbnRzfGVufDF8fHx8MTc2MTg5NDEyMnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Tax Documents', mt: 8 },
                { src: 'https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTk3MTY3NHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Workspace', mt: -8 },
                { src: 'https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzYxOTUzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Business Meeting', mt: 0 },
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={img.mt ? `mt-${img.mt}` : ''}
                  style={{ marginTop: `${img.mt}px` }}
                >
                  <ImageWithFallback
                    src={img.src}
                    alt={img.alt}
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#6A23F5] via-[#8B4FFF] to-[#A855F7] text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-white mb-4 text-3xl lg:text-4xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Your Compliance Journey Starts Today
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-white/90 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let our experts assist you with personalized solutions for your tax and business needs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg group">
                  Schedule a Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+91XXXXXXXXXX">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



