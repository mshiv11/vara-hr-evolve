import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";
import { Rocket, CalendarCheck2, Target, Bot, Workflow, BarChartBig, CheckCircle, Users, Clock, Star } from "lucide-react";

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
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_times_of_india.svg/485px-The_times_of_india.svg.png", alt: "The Times of India" },
    { src: "https://i0.wp.com/www.iadea.com/wp-content/uploads/2018/10/digital-journal-logo.png", alt: "Digital Journal" },
    { src: "https://asmruniversity.com/wp-content/uploads/2019/02/associated-press-logo.png", alt: "Associated Press" },
    { src: "https://www.lightboarddepot.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LmxpZ2h0Ym9hcmRkZXBvdC5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjAlMkYxMiUyRmZveDQwLWxvZ28tc3F1YXJlLTEucG5nJmNhY2hlTWFya2VyPTE3MjMyOTQ3NDItNTE5NDcmdG9rZW49YjkyNjEyMmFjY2MzNzcwYg.q.png", alt: "Fox40" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white text-center relative overflow-hidden">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 max-w-4xl mx-auto">
            Automate Your Hiring.
            <br />
            <span className="text-primary">Save Weeks.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join innovative companies that have cut their hiring time from months to days. Our AI-powered automation eliminates tedious tasks, so you can focus on finding the perfect candidate.
          </p>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>80% faster screening</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-blue-500" />
              <span>Trusted by leading companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500" />
              <span>4.9/5 customer rating</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button
              size="lg"
              className="px-8 py-3 text-base font-semibold rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              data-cal-link="mshiv/vara"
              data-cal-namespace="vara"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* As Seen On Section - Enhanced */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <h3 className="text-center text-sm text-gray-500 font-semibold uppercase tracking-widest mb-12">As Seen On</h3>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-scroll">
              {logos.map((logo) => (
                <li key={logo.alt} className="flex-shrink-0">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-12 w-auto max-w-none filter grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 object-contain" 
                  />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-scroll" aria-hidden="true">
              {logos.map((logo) => (
                <li key={`${logo.alt}-duplicate`} className="flex-shrink-0">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-12 w-auto max-w-none filter grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 object-contain" 
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section with Gradient */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30" id="features">
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
      <section className="py-24 bg-gradient-to-br from-purple-50/30 to-pink-50/30" id="how-it-works">
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
      <section className="py-24 bg-blue-600 text-white">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
              Stop Searching. Start Hiring.
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
              See for yourself how our automation can reduce your time-to-hire by up to 80%. Schedule a free consultation with our team today.
            </p>
            <Button 
              size="lg" 
              className="px-10 py-3 text-base font-semibold rounded-full bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              data-cal-link="mshiv/vara" 
              data-cal-namespace="vara" 
              data-cal-config='{"layout":"month_view"}'
            >
              Request a Free Demo
            </Button>
            <p className="text-sm text-blue-200 mt-4">
              ⚡ Book in 30 seconds • Meet with our automation experts • Get personalized recommendations
            </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
