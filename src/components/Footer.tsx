import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '../assets/logo.png';

export function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com', label: 'Facebook' },
    // { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    // { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/login', label: 'Login' },
  ];

  const services = [
    { path: '/tax-filing', label: 'Income Tax Filing' },
    { path: '/gst-services', label: 'GST Services' },
    { path: '/trademark-services', label: 'Trademark Services' },
    { path: '/company', label: 'Company Setup' },
    { path: '/food-license', label: 'Food License' },
  ];

  const resources = [
    { path: '/services', label: 'All Services' },
    { path: '#', label: 'Blog' },
    { path: '#', label: 'FAQs' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-conditions', label: 'Terms & Conditions' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1A1A1A] via-[#2A1A3A] to-[#1A1A1A] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6A23F5] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A855F7] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logoImage} alt="TaxBreeze" className="h-12 mb-4" />
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for hassle-free tax filing, GST services, and business registrations. Making compliance simple since 2018.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#6A23F5] flex-shrink-0 mt-1" />
                <span className="text-sm">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#6A23F5] flex-shrink-0" />
                <a href="tel:9740564642" className="text-sm hover:text-[#6A23F5] transition-colors">9740564642</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#6A23F5] flex-shrink-0" />
                <a href="mailto:support@taxbreeze.in" className="text-sm hover:text-[#6A23F5] transition-colors">support@taxbreeze.in</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#6A23F5] flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#6A23F5] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-[#6A23F5] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path} 
                    className="text-gray-300 hover:text-[#6A23F5] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    <span>{resource.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="border-t border-white/10 pt-8 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-2 text-xl">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for tax tips and updates</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#6A23F5] transition-colors"
              />
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-[#6A23F5] to-[#A855F7] rounded-xl hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} TaxBreeze. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-gray-400 hover:text-[#6A23F5] transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-[#6A23F5] transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-400 hover:text-[#6A23F5] transition-colors">Cookie Policy</Link>
          </div>
        </motion.div>

        {/* WhatsApp Float Button */}
        <motion.a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>
    </footer>
  );
}
