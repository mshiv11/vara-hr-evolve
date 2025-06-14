
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 max-w-3xl mx-auto">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Invest once in your hiring process and see returns for years to come. No recurring fees, no subscriptions - just powerful tools that work.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50/70">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
              <div className="absolute top-0 right-8 bg-primary text-white px-4 py-1 rounded-b-lg text-sm font-semibold">
                Most Popular
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Standard Solution</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">$2,497</span>
                <span className="text-gray-500 ml-2">one-time fee</span>
              </div>
              
              <p className="text-gray-600 mb-6 min-h-[72px]">
                Perfect for companies looking to optimize their hiring process for a single job role.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Custom Google Sheet recruitment system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">1 Tally Form with intelligent screening logic</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Role-specific assessment templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Basic AI-powered resume screening</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">One round of revisions</span>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-8">
                <h3 className="font-semibold mb-2 text-primary">Bonus Included:</h3>
                <p className="text-primary/90">Free 2-week AI training for your team (Worth $997)</p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full rounded-full"
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
              >
                Get Started
              </Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Enterprise Solution</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">$9,997</span>
                <span className="text-gray-500 ml-2">one-time fee</span>
              </div>
              
              <p className="text-gray-600 mb-6 min-h-[72px]">
                Comprehensive hiring solution for multiple positions or departments across your organization.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Advanced multi-position recruitment system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">5 Tally Forms with custom screening logic</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Unlimited assessment templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Advanced AI screening with predictive analytics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Custom interview scorecard system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Three rounds of revisions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Priority support</span>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-8">
                <h3 className="font-semibold mb-2 text-primary">Bonuses Included:</h3>
                <ul className="space-y-2 text-primary/90">
                  <li>• Free 2-week AI training for your entire team (Worth $1,997)</li>
                  <li>• Custom recruitment dashboard (Worth $1,500)</li>
                  <li>• 2 hours strategic hiring consultation (Worth $997)</li>
                </ul>
              </div>
              
              <Button 
                size="lg" 
                className="w-full rounded-full"
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Bulk discount notice */}
          <div className="max-w-3xl mx-auto mt-16 bg-white border border-gray-200/80 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Volume Discounts Available</h3>
            <p className="text-center text-gray-600">
              Need solutions for multiple departments or hiring campaigns? Contact us for custom packages 
              and bulk discounts. Save up to 30% when implementing multiple recruitment systems.
            </p>
            <div className="mt-6 text-center">
              <Button 
                variant="outline"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
              >
                Discuss Custom Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tool Showcase with Added Logos */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Built on Trusted Tools You Already Know</h2>
            <p className="text-lg text-gray-600">
              Our solutions leverage familiar, powerful tools that integrate seamlessly with your existing workflow.
              No complex setup or learning curve required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-8 text-center shadow-sm">
              <div className="h-20 flex items-center justify-center mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/74px-Google_Sheets_logo_%282014-2020%29.svg.png" 
                  alt="Google Sheets" 
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Google Sheets</h3>
              <p className="text-gray-600">
                Powerful recruitment trackers with built-in automations, custom scoring systems, 
                and visual dashboards. Easy to use, accessible anywhere, and instantly shareable 
                with your team.
              </p>
            </div>
            
            <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-8 text-center shadow-sm">
              <div className="h-20 flex items-center justify-center mb-6">
                <img 
                  src="https://tally.so/images/logo_v2.png" 
                  alt="Tally Forms" 
                  className="h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tally Forms</h3>
              <p className="text-gray-600">
                Elegant, intelligent forms that pre-screen candidates based on your custom criteria. 
                Automatically filter and route applications, collect structured data, 
                and integrate directly with your Google Sheets dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50/70">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200/80 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Is this a subscription service?</h3>
                <p className="text-gray-600">
                  No. VaraHR offers a one-time fee model. You pay once for your custom recruitment system and it's yours to use indefinitely. There are no recurring charges or hidden fees.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200/80 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">What exactly do I receive for my investment?</h3>
                <p className="text-gray-600">
                  You receive a complete, customized recruitment system built on Google Sheets and Tally Forms, tailored specifically to your hiring needs. This includes setup, implementation, AI-powered screening logic, customized assessment templates, and training for your team.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200/80 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">How quickly can I get started?</h3>
                <p className="text-gray-600">
                  Most clients are up and running within 48 hours. After your initial consultation, we'll configure your custom solution and provide access to your new recruitment tools, along with comprehensive training.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200/80 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">What's included in the free AI training?</h3>
                <p className="text-gray-600">
                  The 2-week AI training includes live sessions covering how to leverage AI tools for recruitment, creating effective prompts for candidate assessment, using AI to write job descriptions, and strategies for optimizing your entire hiring workflow with AI.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200/80 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Are there any additional costs?</h3>
                <p className="text-gray-600">
                  No. Your one-time payment covers everything you need. The tools we build on (Google Sheets and Tally Forms) are free to use for most businesses. The only scenario where additional costs might apply is if you exceed Tally's free tier limits, which only happens for extremely high-volume recruitment (thousands of applications per month).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl mb-8">
              Schedule a call today and discover which solution is right for your recruitment needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 rounded-full"
              data-cal-link="mshiv/vara" 
              data-cal-namespace="vara" 
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;
