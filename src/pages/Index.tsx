import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";
import { Rocket, CalendarCheck2, Target, Bot, Workflow, BarChartBig } from "lucide-react";

// New Feature Card Component based on inspiration
const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// New How It Works Step Component
const HowItWorksStep = ({ number, title, description, icon: Icon }: { number: string, title:string, description: string, icon: React.ElementType }) => (
  <div className="text-center">
      <div className="relative inline-flex">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center font-bold text-lg text-primary mb-6">
            {number}
          </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{description}</p>
  </div>
);

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 max-w-4xl mx-auto">
            Automate Your Hiring.
            <br />
            <span className="text-primary">Save Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Empowering recruiters and hiring managers to focus on people, not paperwork. Transform your recruitment process with AI-powered automation.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="px-8 py-3 text-base font-semibold rounded-full"
              data-cal-link="mshiv/vara"
              data-cal-namespace="vara"
              data-cal-config='{"layout":"month_view"}'
            >
              Request a Demo
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-base font-semibold rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400">
              <Link to="#features">How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50/70" id="features">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Rocket} 
              title="Faster Screening" 
              description="AI-powered candidate evaluation reduces screening time by 80%, helping you identify top talent instantly."
            />
            <FeatureCard 
              icon={CalendarCheck2} 
              title="Automated Scheduling" 
              description="Smart calendar integration eliminates back-and-forth emails, automatically coordinating interviews."
            />
            <FeatureCard 
              icon={Target} 
              title="Smart Candidate Matching" 
              description="Advanced algorithms analyze skills to surface the most qualified candidates for each role."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600">
              Transform your hiring process in three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <HowItWorksStep
              number="01"
              icon={Bot}
              title="Post Job"
              description="Create detailed job postings with our intelligent form that captures requirements and skills."
            />
            <HowItWorksStep
              number="02"
              icon={Workflow}
              title="Automate Workflow"
              description="Our AI engine screens resumes, schedules interviews, and manages communications."
            />
            <HowItWorksStep
              number="03"
              icon={BarChartBig}
              title="Hire Smarter"
              description="Receive ranked candidate recommendations with detailed insights for faster decisions."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 max-w-2xl mx-auto">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Join the recruitment revolution and discover what AI-powered hiring can do for your organization.
            </p>
            <Button 
              size="lg" 
              className="px-10 py-3 text-base font-semibold rounded-full"
              data-cal-link="mshiv/vara" 
              data-cal-namespace="vara" 
              data-cal-config='{"layout":"month_view"}'
            >
              Start Your Transformation
            </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
