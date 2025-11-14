import { Link } from 'react-router-dom';
import { AlertCircle, FileText, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';

export function TrademarkObjectionPage() {
  const commonObjections = [
    'Similarity with existing trademark',
    'Descriptive or generic name',
    'Deceptive or misleading trademark',
    'Prohibited under Emblems Act',
    'Contains geographical indication',
    'Offensive or scandalous matter',
  ];

  const howWeHelp = [
    { icon: <FileText className="w-8 h-8 text-[#6A23F5]" />, title: 'Analysis', description: 'Review examination report and identify objection grounds' },
    { icon: <MessageSquare className="w-8 h-8 text-[#6A23F5]" />, title: 'Response Drafting', description: 'Prepare strong legal reply with supporting evidence' },
    { icon: <CheckCircle2 className="w-8 h-8 text-[#6A23F5]" />, title: 'Filing & Follow-up', description: 'Submit reply and track application status' },
  ];

  return (
    <div>
      {/* Page Heading */}
      <section className="bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Professional response drafting to ensure approval.</h1>
          <p className="text-white/90 text-lg">
            Expert handling of trademark objections and examination reports.
          </p>
        </div>
      </section>

      {/* What is Trademark Objection */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-6 text-center">What is a Trademark Objection?</h2>
          <p className="text-[#6F6F6F] text-center text-lg mb-8">
            When you apply for trademark registration, the Trademark Examiner may raise objections if your trademark doesn't meet certain criteria. You have 30 days to respond with a proper reply, failing which your application will be abandoned.
          </p>
          <Card className="border-2 border-[#E85C5C] bg-[#E85C5C]/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#E85C5C] flex-shrink-0" />
                <div>
                  <h3 className="text-[#1A1A1A] mb-2">⚠️ Important</h3>
                  <p className="text-[#6F6F6F]">
                    Missing the 30-day deadline or submitting a weak response can result in your trademark application being abandoned. Professional assistance is crucial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Objections */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Common Trademark Objections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonObjections.map((objection, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </span>
                    <p className="text-[#1A1A1A]">{objection}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">How We Help You Overcome Objections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeHelp.map((item, index) => (
              <Card key={index} className="border-2 border-[#E9D9FF] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#6F6F6F] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#E9D9FF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A1A1A] mb-12 text-center">Our Objection Reply Process</h2>
          <div className="space-y-4">
            <Card className="border-2 border-[#E9D9FF] bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6A23F5] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Share Examination Report</h3>
                    <p className="text-[#6F6F6F]">Provide us with the objection/examination report from Trademark Registry</p>
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
                    <h3 className="text-[#1A1A1A] mb-1">Expert Analysis</h3>
                    <p className="text-[#6F6F6F]">Our trademark experts analyze objection grounds and legal precedents</p>
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
                    <h3 className="text-[#1A1A1A] mb-1">Draft Strong Reply</h3>
                    <p className="text-[#6F6F6F]">Prepare comprehensive reply with legal arguments and supporting documents</p>
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
                    <h3 className="text-[#1A1A1A] mb-1">File & Track</h3>
                    <p className="text-[#6F6F6F]">Submit reply before deadline and monitor application progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Rate */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#0CAB63]/10 border-2 border-[#0CAB63] p-8 rounded-xl">
            <CheckCircle2 className="w-16 h-16 text-[#0CAB63] mx-auto mb-4" />
            <h3 className="text-[#1A1A1A] mb-2">High Success Rate</h3>
            <p className="text-[#6F6F6F]">
              Our professionally drafted objection replies have helped hundreds of clients successfully register their trademarks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6A23F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Received a Trademark Objection?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Don't let objections stop your trademark. Get expert help today.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] hover:bg-gray-100 rounded-xl px-8 py-6">
              Get Objection Reply Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
