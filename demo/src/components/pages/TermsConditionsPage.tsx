import { motion } from 'motion/react';
import { Scale, FileCheck, UserCheck, CreditCard, Shield, AlertCircle, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { fadeInUp } from '../utils/animations';

export function TermsConditionsPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#A855F7] text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1758519288480-1489c17b1519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnRyYWN0JTIwZG9jdW1lbnR8ZW58MXx8fHwxNzYyNzY1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Terms"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Scale className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-white mb-6">Terms and Conditions</h1>
            <p className="text-white/90 text-xl">Please read these terms carefully before using our services</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#6F6F6F] text-lg mb-12 text-center">
              Welcome to TaxBreeze! Please read these Terms and Conditions ("Terms") carefully before using our website and services. By accessing or using TaxBreeze, you agree to be bound by these Terms.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">1. Acceptance of Terms</h2>
                      <p className="text-[#6F6F6F]">
                        By using TaxBreeze's website or services, you confirm that you have read, understood, and agreed to these Terms and any future amendments. If you do not agree, please do not use our services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">2. About TaxBreeze Services</h2>
                  <p className="text-[#6F6F6F]">
                    TaxBreeze provides online tax filing, registration, compliance, and advisory services. Our offerings include but are not limited to Income Tax Return (ITR) filing, GST registration, business registration, and professional tax assistance.
                  </p>
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
                      <h2 className="text-[#1A1A1A] mb-4">3. User Eligibility</h2>
                      <p className="text-[#6F6F6F]">
                        You must be at least 18 years old and legally competent to enter into contracts to use our services. By using TaxBreeze, you represent and warrant that you meet these criteria.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">4. User Responsibilities</h2>
                  <ul className="space-y-2 text-[#6F6F6F]">
                    <li>• Provide accurate, current, and complete information during registration and while using services.</li>
                    <li>• Maintain confidentiality of login credentials and notify TaxBreeze immediately of any unauthorized use.</li>
                    <li>• Comply with all applicable laws and regulations while using TaxBreeze.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">5. Service Process and Limitations</h2>
                  <ul className="space-y-2 text-[#6F6F6F]">
                    <li>• TaxBreeze facilitates preparation and filing of tax returns based on information provided by you.</li>
                    <li>• We do not offer legal or financial advice beyond the scope of tax compliance and filing services.</li>
                    <li>• TaxBreeze is not responsible for errors caused by incorrect or incomplete information supplied by you.</li>
                    <li>• Filing timelines depend on the government portal processing and acceptance.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">6. Payment Terms</h2>
                      <ul className="space-y-2 text-[#6F6F6F]">
                        <li>• All fees are payable as per the pricing detailed on the website or during service signup.</li>
                        <li>• Payments must be made through the authorized payment gateways provided by TaxBreeze.</li>
                        <li>• Refunds, if any, are subject to the specific refund policy available on the relevant service page.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">7. Intellectual Property Rights</h2>
                  <ul className="space-y-2 text-[#6F6F6F]">
                    <li>• All content on TaxBreeze, including text, logos, images, software, and trademarks, are owned or licensed by TaxBreeze.</li>
                    <li>• Users are prohibited from copying, distributing, or using TaxBreeze's intellectual property without explicit permission.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6A23F5] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">8. Privacy and Data Protection</h2>
                      <ul className="space-y-2 text-[#6F6F6F]">
                        <li>• Your personal data will be processed in accordance with our Privacy Policy.</li>
                        <li>• TaxBreeze is committed to protecting your data and maintaining confidentiality.</li>
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
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#1A1A1A] mb-4">9. Limitation of Liability</h2>
                      <ul className="space-y-2 text-[#6F6F6F]">
                        <li>• TaxBreeze shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</li>
                        <li>• Our total liability shall not exceed the fees paid by you for the specific service.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">10. Indemnification</h2>
                  <p className="text-[#6F6F6F]">
                    You agree to indemnify and hold TaxBreeze and its affiliates harmless against any claims, damages, losses, liabilities, or expenses arising out of your breach of these Terms or misuse of services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">11. Third-Party Links and Services</h2>
                  <p className="text-[#6F6F6F]">
                    TaxBreeze may contain links to third-party websites or services. We do not endorse or assume responsibility for the content, policies, or practices of third-party sites.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">12. Termination</h2>
                  <p className="text-[#6F6F6F]">
                    TaxBreeze reserves the right to suspend or terminate your access to services without prior notice if you violate these Terms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">13. Changes to Terms</h2>
                  <p className="text-[#6F6F6F]">
                    We may update these Terms periodically. The updated version will be posted on the website with a revised effective date. Continued use constitutes acceptance of changes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#E9D9FF]">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-4">14. Governing Law and Dispute Resolution</h2>
                  <p className="text-[#6F6F6F]">
                    These Terms are governed by the laws of India. Any disputes will be resolved exclusively by the courts located in India.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-2 border-[#6A23F5] bg-gradient-to-br from-[#6A23F5]/5 to-[#A855F7]/5">
                <CardContent className="p-8">
                  <h2 className="text-[#1A1A1A] mb-6">15. Contact Information</h2>
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
