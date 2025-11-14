import { motion } from 'motion/react';
import { Shield, Lock, Eye, UserCheck, FileText, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { fadeInUp } from '../utils/animations';

export function PrivacyPolicyPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1760597307381-2bec368dcf26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YWN5JTIwc2VjdXJpdHklMjBsb2NrfGVufDF8fHx8MTc2Mjc2NTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Privacy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-white mb-6">Privacy Policy</h1>
            <p className="text-white/90 text-xl">Effective Date: 20/04/2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#6F6F6F] text-lg mb-12 text-center">
              At TaxBreeze, your privacy is important. This Privacy Policy explains how we collect, use, store, and protect your personal information.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">1. Information We Collect</h2>
                      <div className="space-y-3 text-[#6F6F6F]">
                        <p><strong className="text-[#1A1A1A]">Personal data:</strong> Includes your name, contact details, PAN, Aadhaar, bank details, tax documents, and any other information you provide.</p>
                        <p><strong className="text-[#1A1A1A]">Technical data:</strong> IP address, browser type, device information, and usage patterns collected automatically via cookies and analytics tools.</p>
                        <p><strong className="text-[#1A1A1A]">Communication data:</strong> Emails, chat logs, and support queries you submit.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <Eye className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">2. How We Use Your Information</h2>
                      <ul className="space-y-2 text-[#6F6F6F]">
                        <li>• To provide and improve tax filing and compliance services.</li>
                        <li>• To communicate with you regarding your account, transactions, and updates.</li>
                        <li>• For marketing purposes, only with your consent.</li>
                        <li>• To comply with legal obligations, including tax authorities and regulatory bodies.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">3. Data Sharing and Disclosure</h2>
                      <ul className="space-y-2 text-[#6F6F6F]">
                        <li>• We do not sell or share your personal data with third parties for marketing purposes without consent.</li>
                        <li>• Data may be shared with government authorities, tax departments, and service providers strictly for fulfilling service obligations.</li>
                        <li>• We use third-party vendors for payment processing and IT infrastructure under strict confidentiality agreements.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">4. Data Security</h2>
                      <p className="text-[#6F6F6F]">
                        We use industry-standard security measures such as encryption, firewalls, and secure servers to protect your information. However, no internet transmission is completely secure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">5. Your Rights</h2>
                  <ul className="space-y-2 text-[#6F6F6F]">
                    <li><strong className="text-[#1A1A1A]">Access and Correction:</strong> You can request access to and correction of your personal data.</li>
                    <li><strong className="text-[#1A1A1A]">Deletion:</strong> You may request deletion of your data, subject to legal retention requirements.</li>
                    <li><strong className="text-[#1A1A1A]">Opt-Out:</strong> You may opt out of marketing communications at any time by contacting us.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">6. Data Retention</h2>
                  <p className="text-[#6F6F6F]">
                    We retain your personal information only as long as necessary for providing services and complying with legal requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-[#6F6F6F]">
                    TaxBreeze uses cookies to enhance user experience and analyze site traffic. You can disable cookies in your browser settings, but this may affect site functionality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">8. Children's Privacy</h2>
                  <p className="text-[#6F6F6F]">
                    TaxBreeze services are not intended for individuals under 18. We do not knowingly collect data from minors.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">9. Changes to Privacy Policy</h2>
                  <p className="text-[#6F6F6F]">
                    We may update this Privacy Policy to reflect changes in practices or legal requirements. Updates will be posted on our website.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#6A23F5] bg-gradient-to-br from-[#6A23F5]/5 to-[#A855F7]/5">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-6">10. Contact Us</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#6A23F5]" />
                      <a href="mailto:support@taxbreeze.in" className="text-[#6A23F5] hover:underline">
                        support@taxbreeze.in
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#6A23F5]" />
                      <a href="tel:9740564642" className="text-[#6A23F5] hover:underline">
                        9740564642
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
