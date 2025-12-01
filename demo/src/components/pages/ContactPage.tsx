import { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '9740564642',
      link: 'tel:9740564642',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'support@taxbreeze.in',
      link: 'mailto:support@taxbreeze.in',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      details: '9740564642',
      link: 'https://wa.me/919740564642',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'Bangalore, Karnataka',
      link: '#',
      gradient: 'from-pink-500 to-pink-600',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <div>
      {/* Page Heading with Background Image */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1657727534662-d0e38d3a011b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWxwJTIwZGVza3xlbnwxfHx8fDE3NjI0NTIwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact TaxBreeze"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#6A23F5]/95 via-[#8B4FFF]/90 to-[#A855F7]/95"></div>
        </div>

        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1] as any
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1] as any
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm"
          >
            📞 Available 24/7 for Your Queries
          </motion.div>
          
          <motion.h1 
            className="text-white mb-6 text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We're Here to Help You
          </motion.h1>
          <motion.p 
            className="text-white/90 text-lg lg:text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions about tax filing, GST, or business registration? Our expert team is ready to assist you with personalized solutions. Reach out via phone, email, WhatsApp, or fill out the form below.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>support@taxbreeze.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Mon-Fri: 9AM-7PM</span>
            </div>
          </motion.div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <Card className="border-2 border-[#E9D9FF] h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white mx-auto mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {info.icon}
                    </motion.div>
                    <h3 className="text-[#1A1A1A] mb-2">{info.title}</h3>
                    <p className="text-[#6F6F6F] text-sm">{info.details}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-[#E9D9FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 rounded-xl h-12"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2 rounded-xl h-12"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2 rounded-xl h-12"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="mt-2 rounded-xl h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income-tax">Income Tax Filing</SelectItem>
                      <SelectItem value="gst">GST Services</SelectItem>
                      <SelectItem value="trademark">Trademark Services</SelectItem>
                      <SelectItem value="company">Company Setup</SelectItem>
                      <SelectItem value="food-license">Food License</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-2 rounded-xl"
                    placeholder="Tell us about your requirements..."
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#6A23F5] to-[#A855F7] hover:from-[#571BD0] hover:to-[#8B4FFF] text-white rounded-xl h-12 group"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info & Image */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2MjQ0MTAzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer Support"
                  className="rounded-3xl shadow-2xl w-full h-[300px] object-cover"
                />
              </motion.div>

              {/* Office Location */}
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[#1A1A1A] mb-2">Our Office</h3>
                      <p className="text-[#6F6F6F]">
                        123 Business Hub, Financial District<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#1A1A1A] mb-4">Working Hours</h3>
                      <div className="space-y-2">
                        {workingHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-[#6F6F6F]">{schedule.day}</span>
                            <span className="text-[#1A1A1A]">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Using placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-[#1A1A1A] mb-8 text-center">Find Us</h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gradient-to-br from-[#E9D9FF]/30 to-[#6A23F5]/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#6A23F5] mx-auto mb-4" />
                <p className="text-[#6F6F6F] text-lg">Map Integration Coming Soon</p>
                <p className="text-[#6F6F6F] text-sm">Mumbai, Maharashtra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Quick Links */}
      <section className="py-20 bg-gradient-to-b from-[#E9D9FF]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-[#1A1A1A] mb-4">Need Quick Answers?</h2>
            <p className="text-[#6F6F6F] text-lg">
              Check out our frequently asked questions or connect with us directly
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Chat Support', description: 'Get instant help on WhatsApp', link: 'https://wa.me/', icon: MessageCircle },
              { title: 'Email Us', description: 'Detailed queries via email', link: 'mailto:support@taxbreeze.com', icon: Mail },
              { title: 'Call Us', description: 'Speak directly with our team', link: 'tel:+919876543210', icon: Phone },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={staggerItem}
                whileHover={{ y: -10 }}
              >
                <Card className="border-2 border-[#E9D9FF] hover:border-[#6A23F5] transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white mx-auto mb-4">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-[#6F6F6F] text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
