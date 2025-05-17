
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Invest once in your hiring process and see returns for years to come.
              No recurring fees, no subscriptions - just powerful tools that work.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="border rounded-xl shadow-sm p-8 bg-white relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-medium">
                Most Popular
              </div>
              <h2 className="text-2xl font-bold mb-2">Standard Solution</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$2,497</span>
                <span className="text-gray-600 ml-2">one-time fee</span>
              </div>
              
              <p className="text-gray-700 mb-6">
                Perfect for companies looking to optimize their hiring process for a single job role.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Custom Google Sheet recruitment system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>1 Tally Form with intelligent screening logic</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Role-specific assessment templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Basic AI-powered resume screening</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>One round of revisions</span>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mb-8">
                <h3 className="font-semibold mb-2">Bonus Included:</h3>
                <p className="text-green-800">Free 2-week AI training for your team (Worth $997)</p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
              >
                Get Started
              </Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="border rounded-xl shadow-sm p-8 bg-white">
              <h2 className="text-2xl font-bold mb-2">Enterprise Solution</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$9,997</span>
                <span className="text-gray-600 ml-2">one-time fee</span>
              </div>
              
              <p className="text-gray-700 mb-6">
                Comprehensive hiring solution for multiple positions or departments across your organization.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Advanced multi-position recruitment system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>5 Tally Forms with custom screening logic</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Unlimited assessment templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Advanced AI screening with predictive analytics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Custom interview scorecard system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Three rounds of revisions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Priority support</span>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mb-8">
                <h3 className="font-semibold mb-2">Bonuses Included:</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Free 2-week AI training for your entire team (Worth $1,997)</li>
                  <li>• Custom recruitment dashboard (Worth $1,500)</li>
                  <li>• 2 hours strategic hiring consultation (Worth $997)</li>
                </ul>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Bulk discount notice */}
          <div className="max-w-3xl mx-auto mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Volume Discounts Available</h3>
            <p className="text-center text-gray-700">
              Need solutions for multiple departments or hiring campaigns? Contact us for custom packages 
              and bulk discounts. Save up to 30% when implementing multiple recruitment systems.
            </p>
            <div className="mt-6 text-center">
              <Button 
                variant="outline"
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
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Built on Trusted Tools You Already Know</h2>
            <p className="text-lg text-gray-700">
              Our solutions leverage familiar, powerful tools that integrate seamlessly with your existing workflow.
              No complex setup or learning curve required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="h-20 flex items-center justify-center mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/74px-Google_Sheets_logo_%282014-2020%29.svg.png" 
                  alt="Google Sheets" 
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Sheets</h3>
              <p className="text-gray-700">
                Powerful recruitment trackers with built-in automations, custom scoring systems, 
                and visual dashboards. Easy to use, accessible anywhere, and instantly shareable 
                with your team.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="h-20 flex items-center justify-center mb-6">
                <img 
                  src="https://tally.so/images/logo_v2.png" 
                  alt="Tally Forms" 
                  className="h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Tally Forms</h3>
              <p className="text-gray-700">
                Elegant, intelligent forms that pre-screen candidates based on your custom criteria. 
                Automatically filter and route applications, collect structured data, 
                and integrate directly with your Google Sheets dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Is this a subscription service?</h3>
                <p className="text-gray-700">
                  No. VaraHR offers a one-time fee model. You pay once for your custom recruitment system and it's yours to use indefinitely. There are no recurring charges or hidden fees.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">What exactly do I receive for my investment?</h3>
                <p className="text-gray-700">
                  You receive a complete, customized recruitment system built on Google Sheets and Tally Forms, tailored specifically to your hiring needs. This includes setup, implementation, AI-powered screening logic, customized assessment templates, and training for your team.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">How quickly can I get started?</h3>
                <p className="text-gray-700">
                  Most clients are up and running within 48 hours. After your initial consultation, we'll configure your custom solution and provide access to your new recruitment tools, along with comprehensive training.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">What's included in the free AI training?</h3>
                <p className="text-gray-700">
                  The 2-week AI training includes live sessions covering how to leverage AI tools for recruitment, creating effective prompts for candidate assessment, using AI to write job descriptions, and strategies for optimizing your entire hiring workflow with AI.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Are there any additional costs?</h3>
                <p className="text-gray-700">
                  No. Your one-time payment covers everything you need. The tools we build on (Google Sheets and Tally Forms) are free to use for most businesses. The only scenario where additional costs might apply is if you exceed Tally's free tier limits, which only happens for extremely high-volume recruitment (thousands of applications per month).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
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
              className="px-8"
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
