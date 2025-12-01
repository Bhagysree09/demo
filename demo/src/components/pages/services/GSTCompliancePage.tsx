import { Link } from 'react-router-dom';
import { Search, AlertCircle, CheckCircle2, FileWarning } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';

export function GSTCompliancePage() {
  const whatWeCheck = [
    { icon: <Search className="w-8 h-8 text-[#6A23F5]" />, title: 'ITC Mismatches', description: 'Compare your ITC claims with 2A/2B data' },
    { icon: <AlertCircle className="w-8 h-8 text-[#6A23F5]" />, title: 'Filing Errors', description: 'Identify incorrect entries in previous returns' },
    { icon: <FileWarning className="w-8 h-8 text-[#6A23F5]" />, title: 'Missing Returns', description: 'Check for any unfiled monthly returns' },
    { icon: <CheckCircle2 className="w-8 h-8 text-[#6A23F5]" />, title: 'Rate Discrepancies', description: 'Verify correct GST rate application' },
  ];

  const whyCompliance = [
    'Avoid GST notices and scrutiny',
    'Prevent penalty and interest charges',
    'Ensure smooth business operations',
    'Build trust with tax authorities',
    'Optimize input tax credit utilization',
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Identify errors, ITC mismatches, wrong filing & avoid penalties.</h1>
          <p className="text-white/90 text-lg">
            Comprehensive GST compliance review and audit.
          </p>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">What We Check in GST Compliance Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeCheck.map((item, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#6F6F6F]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-[#E85C5C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl border-2 border-[#E85C5C]">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-10 h-10 text-[#E85C5C] flex-shrink-0" />
              <div>
                <h3 className="text-[#1A1A1A] mb-2">Common GST Compliance Issues</h3>
                <ul className="space-y-2 text-[#6F6F6F]">
                  <li>â€¢ Claiming ITC on invoices not reflected in GSTR-2A/2B</li>
                  <li>â€¢ Wrong HSN/SAC code classification</li>
                  <li>â€¢ Incorrect place of supply reporting</li>
                  <li>â€¢ Mismatch between books and GST returns</li>
                  <li>â€¢ Late filing penalties accumulating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Why GST Compliance Review Matters</h2>
          <div className="space-y-4">
            {whyCompliance.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#E9D9FF]/30 p-4 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-[#6A23F5] flex-shrink-0 mt-0.5" />
                <p className="text-[#1A1A1A]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Our Review Process</h2>
          <div className="space-y-6">
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Data Collection</h3>
                    <p className="text-[#6F6F6F]">Gather your GST returns, 2A/2B data, and books of accounts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Detailed Analysis</h3>
                    <p className="text-[#6F6F6F]">Review all filings and identify discrepancies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Report & Recommendations</h3>
                    <p className="text-[#6F6F6F]">Provide detailed compliance report with actionable steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Rectification Support</h3>
                    <p className="text-[#6F6F6F]">Help fix errors and file corrections if needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6A23F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Get Your GST Compliance Reviewed</h2>
          <p className="text-white/90 mb-8 text-lg">
            Stay ahead of GST notices with our expert compliance review.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6">
              Schedule Review
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



