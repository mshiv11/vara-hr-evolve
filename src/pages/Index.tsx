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
  const logos = [
    { src: "/Time of India logo.webp", alt: "Time of India" },
    { src: "/associated-press-logo.png", alt: "Associated Press" },
    { src: "/digital-journal-logo.png", alt: "Digital Journal" },
    { src: "/Fox40-removebg-preview.png", alt: "Fox40" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 max-w-4xl mx-auto">
            Automate Your Hiring.
            <br />
            <span className="text-primary">Save Weeks.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of innovative companies that have cut their hiring time from months to days. Our AI-powered platform automates tedious tasks, so you can focus on what matters most: finding the perfect candidate.
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
              <Link to="#how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="py-16 bg-gray-50/70">
        <div className="container">
          <h3 className="text-center text-sm text-gray-500 font-semibold uppercase tracking-widest mb-10">As Seen On</h3>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_1rem,_black_calc(100%-1rem),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll">
              {logos.map((logo) => (
                <li key={logo.alt}>
                  <img src={logo.src} alt={logo.alt} className="h-8 max-w-none filter grayscale hover:grayscale-0 transition-all duration-300" />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll" aria-hidden="true">
              {logos.map((logo) => (
                <li key={logo.alt}>
                  <img src={logo.src} alt={logo.alt} className="h-8 max-w-none filter grayscale hover:grayscale-0 transition-all duration-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="features">
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
      <section className="py-24 bg-gray-50/70" id="how-it-works">
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
              Stop Searching. Start Hiring.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              See for yourself how Vara can reduce your time-to-hire by up to 80%. Schedule a free, no-obligation demo with our team today.
            </p>
            <Button 
              size="lg" 
              className="px-10 py-3 text-base font-semibold rounded-full"
              data-cal-link="mshiv/vara" 
              data-cal-namespace="vara" 
              data-cal-config='{"layout":"month_view"}'
            >
              Request a Free Demo
            </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
