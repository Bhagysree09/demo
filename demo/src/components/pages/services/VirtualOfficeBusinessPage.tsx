import { motion } from 'motion/react';
import { CheckCircle2, MapPin, FileText, Shield, Phone, Mail, Clock, DollarSign, Users, Building, Briefcase } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import planComparisonImage from "../../../assets/planComparison.jpg"

export function VirtualOfficeBusinessPage() {
  const benefits = [
    'Prestigious business address for company registration',
    'Legal documents (NOC, lease, utility bills)',
    'Full compliance for ROC (Company) and GST registration',
    'Ideal for new company/APOB',
    'Includes mail management',
    'Trusted address accepted by ROC & GST authorities',
  ];

  const whoShouldBuy = [
    { icon: <Briefcase className="w-6 h-6" />, text: 'Entrepreneurs incorporating a private limited, LLP, or OPC' },
    { icon: <Building className="w-6 h-6" />, text: 'Startups seeking premium address for ROC/GST' },
    { icon: <Users className="w-6 h-6" />, text: 'Small businesses registering for first-time GST submission' },
  ];

  const howItsDone = [
    { step: '1', title: 'Select Location', description: 'Select your TaxBreeze virtual office location' },
    { step: '2', title: 'Choose Plan', description: 'Choose an annual plan and sign up' },
    { step: '3', title: 'Payment & KYC', description: 'Make payment and upload KYC (PAN/Aadhaar + Certificate of Incorporation if available)' },
    { step: '4', title: 'Documentation', description: 'We issue all statutory address docs' },
    { step: '5', title: 'File Registration', description: 'Use these to file company incorporation (ROC) and GST registration' },
    { step: '6', title: 'Optional Add-ons', description: 'Optionally add mail handling and call services' },
  ];

  const documentsRequired = [
    { doc: 'Director\'s PAN & Aadhaar/Passport', purpose: 'Personal identity verification' },
    { doc: 'Certificate of Incorporation', purpose: 'If already formed, or just KYC proof' },
    { doc: 'Completed company registration application', purpose: 'For processing registration' },
    { doc: 'Digital signature (DSC) for director', purpose: 'Required for company filings' },
  ];

  const whyChoose = [
    { icon: <MapPin className="w-6 h-6" />, title: 'Trusted Address', description: 'Premium locations accepted by ROC & GST authorities' },
    { icon: <FileText className="w-6 h-6" />, title: 'Compliance-Ready Kits', description: 'NOCs, lease agreements, utility bills included' },
    { icon: <Clock className="w-6 h-6" />, title: 'Fast Processing', description: 'Get documentation within ~72 hours' },
    { icon: <Shield className="w-6 h-6" />, title: 'Flexible Add-ons', description: 'Mail forwarding, call handling, meeting rooms' },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Risk-Free', description: 'If registration fails due to provider errors, documents are revised or refunded' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] via-[#8B4FFF] to-[#A855F7] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white mb-6 text-4xl lg:text-5xl">Virtual Place for Business Registration</h1>
            <p className="text-white/90 text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
              Your virtual HQ for company startup���provides a prestigious business address, legal documents (NOC, lease, utility bills), and full compliance for ROC (Company) and GST registration.
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm text-white/80">Starting From</div>
                  <div className="text-3xl">₹18,000</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Plan Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1A1A1A] mb-4">Plan Summary</h2>
            <p className="text-[#6F6F6F] text-lg max-w-3xl mx-auto">
              Your virtual HQ for company startup—provides a prestigious business address, legal documents (NOC, lease, utility bills), and full compliance for ROC (Company) and GST registration. Ideal for new company/APOB. Includes mail management.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="border-2 border-[#E9D9FF] h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#6A23F5] flex-shrink-0 mt-1" />
                    <p className="text-[#1A1A1A]">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Should Buy */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1A1A1A] mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Who Should Buy
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whoShouldBuy.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="border-2 border-[#E9D9FF] h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mb-4">
                      {item.icon}
                    </div>
                    <p className="text-[#1A1A1A]">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It's Done */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1A1A1A] mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            How It's Done
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {howItsDone.map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] rounded-full flex items-center justify-center text-white mx-auto text-2xl">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-[#6F6F6F] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plan Comparison Image */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1A1A1A] mb-4">Choose Your Plan</h2>
            <p className="text-[#6F6F6F] text-lg">Select the perfect virtual office package for your business registration</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border-2 border-[#E9D9FF] overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={planComparisonImage}
                  alt="Virtual Office Plans Comparison"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1A1A1A] mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Documents Required From You
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {documentsRequired.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="border-2 border-[#E9D9FF]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-[#6A23F5] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-[#1A1A1A] mb-1">{item.doc}</h3>
                        <p className="text-[#6F6F6F] text-sm">{item.purpose}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose TaxBreeze */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1A1A1A] mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose TaxBreeze?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChoose.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="border-2 border-[#E9D9FF] h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-[#6F6F6F] text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-white mb-6 text-3xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Get Your Virtual Office for Business?
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Request a callback or email us to get started today!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="tel:9740564642">
              <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: 9740564642
              </Button>
            </a>
            <a href="mailto:support@taxbreeze.in">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#6A23F5] rounded-xl px-8 py-6 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Email: support@taxbreeze.in
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
