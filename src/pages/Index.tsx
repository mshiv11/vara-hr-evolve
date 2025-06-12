import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";
import { CheckCircle, ArrowRight, FileCheck, UserCheck, BarChart3, Users } from "lucide-react";

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, link }: { icon: React.ElementType, title: string, description: string, link: string }) => (
  <Link to={link} className="group block p-8 bg-gray-900/50 border border-gray-800 rounded-2xl transition-all duration-300 hover:bg-gray-900/70 hover:border-gray-700 hover:scale-105">
    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
      <Icon size={28} className="text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
      Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

// Stats component
const Statistic = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center p-6">
    <p className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</p>
    <p className="text-gray-300 text-lg">{label}</p>
  </div>
);

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section with YouTube Video */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1),_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(120,119,198,0.2),_transparent_50%)]"></div>
        
        <div className="container relative z-10 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="animate-fade-in">
              {/* Eyebrow text */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                <span className="text-primary font-medium">AI-Powered Recruitment Solutions</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
                Reactive
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Recruitment
                </span>
                <br />
                Experiences
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                We create intelligent hiring systems that respond to your needs. Every candidate, every decision becomes part of a seamless experience.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="px-10 py-4 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300"
                  data-cal-link="mshiv/vara" 
                  data-cal-namespace="vara" 
                  data-cal-config='{"layout":"month_view"}'
                >
                  Explore Interactive Demo
                </Button>
                <Button asChild size="lg" variant="outline" className="px-10 py-4 text-lg font-semibold rounded-full border-white text-black bg-white hover:bg-gray-100 transition-all duration-300">
                  <Link to="/case-studies/solo-founder">View Portfolio</Link>
                </Button>
              </div>

              {/* Featured Technologies */}
              <div className="mt-16">
                <p className="text-gray-400 mb-6">Featured Technologies</p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">AI Screening</span>
                  <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">Smart Matching</span>
                  <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">Analytics</span>
                  <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">Automation</span>
                </div>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="relative">
                {/* YouTube Video Embed */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/QHN0NRUoIwE"
                      title="VaraHR Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Statistic value="30,000+" label="Interviews Conducted" />
            <Statistic value="93%" label="Match Accuracy" />
            <Statistic value="80%" label="Time Reduction" />
            <Statistic value="68%" label="Retention Improvement" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900" id="features">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Next-Generation
              <br />
              <span className="text-primary">Recruitment Tools</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our AI-powered solutions create seamless experiences that transform
              how you discover, evaluate, and hire exceptional talent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={FileCheck} 
              title="Smart Job Descriptions" 
              description="AI-crafted, bias-free job descriptions that attract the right talent automatically."
              link="/features/job-descriptions"
            />
            <FeatureCard 
              icon={UserCheck} 
              title="Intelligent Screening" 
              description="Advanced algorithms that identify and rank the most qualified candidates instantly."
              link="/features/resume-screening"
            />
            <FeatureCard 
              icon={Users} 
              title="Dynamic Assessments" 
              description="Adaptive skill evaluations that adjust to any role or industry requirement."
              link="/features/skills-assessments"
            />
            <FeatureCard 
              icon={BarChart3} 
              title="Real-time Analytics" 
              description="Comprehensive dashboards with actionable insights for data-driven hiring."
              link="/features/candidate-dashboard"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-32 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Traditional Hiring
                <br />
                <span className="text-red-400">Doesn't Scale</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">Manual resume screening wastes 40+ hours per hire</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">Unconscious bias leads to missed opportunities</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">Inconsistent evaluation creates poor hiring decisions</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                AI-Driven Solutions
                <br />
                <span className="text-primary">That Deliver</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">Automated screening processes thousands of applications instantly</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">Objective evaluation removes bias and improves diversity</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">Standardized assessments ensure consistent quality hires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview */}
      <section className="py-32 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real results from organizations that transformed their hiring with VaraHR
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-transparent relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                  alt="University recruitment" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Bulk University Assessment</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Streamlined evaluation of hundreds of students during campus recruitment with custom AI assessments.
                </p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  <Link to="/case-studies/bulk-hiring">Read Success Story</Link>
                </Button>
              </div>
            </div>
            
            <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-transparent relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                  alt="Solo founder" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Solo Founder Success</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  How one founder processed 424 applications and found perfect hires in just 24 hours.
                </p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  <Link to="/case-studies/solo-founder">Read Success Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-primary via-blue-600 to-purple-700 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Transform
              <br />
              Your Hiring Process?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join the recruitment revolution and discover what AI-powered hiring can do for your organization.
            </p>
            <Button 
              size="lg" 
              className="px-12 py-4 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300"
              data-cal-link="mshiv/vara" 
              data-cal-namespace="vara" 
              data-cal-config='{"layout":"month_view"}'
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
