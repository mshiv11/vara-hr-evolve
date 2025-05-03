
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";
import { CheckCircle, ChevronRight, FileCheck, UserCheck, BarChart3, Users } from "lucide-react";

// Testimonial component
const Testimonial = ({ quote, name, position, company }: { quote: string, name: string, position: string, company: string }) => (
  <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
    <p className="text-gray-600 italic mb-4">{quote}</p>
    <div>
      <p className="font-medium text-gray-900">{name}</p>
      <p className="text-gray-600 text-sm">{position}, {company}</p>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, link }: { icon: React.ElementType, title: string, description: string, link: string }) => (
  <Link to={link} className="block p-6 bg-white border border-gray-100 rounded-lg shadow-sm transition-transform hover:scale-105">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 flex items-center text-primary font-medium">
      Learn more <ChevronRight size={16} className="ml-1" />
    </div>
  </Link>
);

// Stats component
const Statistic = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center">
    <p className="text-3xl md:text-4xl font-bold text-primary">{value}</p>
    <p className="text-gray-600 mt-1">{label}</p>
  </div>
);

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              {/* Eyebrow text */}
              <p className="text-primary font-medium mb-3">For Hiring Professionals and Recruiters</p>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Transform Your Recruitment Process with AI-Powered <span className="text-primary">Intelligence</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-gray-700 mb-8">
                Stop drowning in resumes. Start finding the right talent, faster and more accurately with VaraHR's AI recruitment solutions.
              </p>
              
              {/* Key benefits bullets */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Cut hiring time by up to 80% with intelligent automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Identify best-fit candidates with 93% accuracy using AI analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Reduce bias and improve diversity in your recruitment funnel</span>
                </li>
              </ul>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/request-demo">Request Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link to="/case-studies/solo-founder">View Case Studies</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-first md:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="HR professional using VaraHR" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem Statement Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Recruitment Challenges, Solved</h2>
            <p className="text-xl text-gray-700">
              The traditional recruitment process is broken. I've interviewed 30,000+ candidates 
              and seen firsthand how time-consuming, inefficient, and prone to bias it can be.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">I've been in your shoes...</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Drowning in Resumes</h4>
                  <p>Spending nights manually scanning through hundreds of resumes, knowing I might miss the perfect candidate.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Wasting Time on Unqualified Candidates</h4>
                  <p>Conducting endless interviews only to discover candidates don't have the right skills or cultural fit.</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Missing Hiring Deadlines</h4>
                  <p>Feeling the pressure from management to fill positions quickly while maintaining quality standards.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">That's why we built VaraHR...</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">AI-Powered Screening</h4>
                  <p>Our algorithms review thousands of resumes in minutes, identifying the most qualified candidates with 93% accuracy.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Custom Skills Assessment</h4>
                  <p>Automatically evaluate candidates' actual abilities before interviews, saving you countless hours of wasted meetings.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Structured Interview Tools</h4>
                  <p>Generate role-specific interview questions and evaluation criteria to make consistently better hiring decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <Statistic value="30,000+" label="Interviews Conducted" />
            <Statistic value="93%" label="Candidate Match Accuracy" />
            <Statistic value="80%" label="Time Saved in Hiring" />
            <Statistic value="68%" label="Improvement in Retention" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features for Modern Recruiters</h2>
            <p className="text-xl text-gray-700">
              Our AI-powered platform streamlines every step of your recruitment process,
              helping you find the right talent faster and more accurately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={FileCheck} 
              title="Automated Job Descriptions" 
              description="Create compelling, bias-free job descriptions in minutes that attract top talent."
              link="/features/job-descriptions"
            />
            <FeatureCard 
              icon={UserCheck} 
              title="Intelligent Resume Screening" 
              description="Automatically identify the most qualified candidates and rank them by fit."
              link="/features/resume-screening"
            />
            <FeatureCard 
              icon={Users} 
              title="Custom Skills Assessments" 
              description="Evaluate candidates with tailored assessments for any role or skill set."
              link="/features/skills-assessments"
            />
            <FeatureCard 
              icon={BarChart3} 
              title="Candidate Dashboard" 
              description="Track and manage your entire recruitment pipeline with real-time analytics."
              link="/features/candidate-dashboard"
            />
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Results, Real Companies</h2>
            <p className="text-xl text-gray-700">
              See how leading organizations have transformed their hiring process with VaraHR.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                  alt="University recruitment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Mitr.work University Assessment Case Study</h3>
                <p className="text-gray-700 mb-6">
                  How VaraHR created a custom assessment solution for Mitr.work to efficiently evaluate hundreds of students during university recruitment drives.
                </p>
                <Button asChild variant="outline">
                  <Link to="/case-studies/mitr-work">Read Case Study</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                  alt="Solo founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Solo Founder Hiring Success Story</h3>
                <p className="text-gray-700 mb-6">
                  How VaraHR helped a solo founder process 424 applications and find top talent in just 24 hours without reading a single resume.
                </p>
                <Button asChild variant="outline">
                  <Link to="/case-studies/solo-founder">Read Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-700">
              Join hundreds of satisfied HR professionals and recruiters who have transformed their hiring process with VaraHR.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="VaraHR has completely transformed how we recruit. We've cut our time-to-hire by 75% while finding better candidates."
              name="Priya Sharma"
              position="Head of Talent Acquisition"
              company="Mindtree"
            />
            <Testimonial 
              quote="As a solo founder, hiring used to consume all my time. VaraHR's AI screening saved me weeks of work and found amazing talent."
              name="Rahul Khanna"
              position="Founder & CEO"
              company="FinTech Startup"
            />
            <Testimonial 
              quote="The custom skills assessments are a game-changer. We now have objective data on candidates before they even reach the interview stage."
              name="Ananya Patel"
              position="HR Director"
              company="Global Services Inc."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Recruitment Process?</h2>
            <p className="text-xl mb-8">
              Join hundreds of companies using VaraHR to find better candidates faster.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link to="/request-demo">Request Your Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700">
                Everything you need to know about VaraHR and our AI-powered recruitment solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">How does VaraHR's AI technology work?</h3>
                <p className="text-gray-700">
                  VaraHR uses advanced machine learning algorithms trained on millions of hiring outcomes to match candidates to roles based on skills, experience, and cultural fit. Our technology continuously learns and improves from your feedback and hiring decisions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Is VaraHR suitable for all company sizes?</h3>
                <p className="text-gray-700">
                  Yes, VaraHR is designed to scale with your needs. Whether you're a startup making your first hire or an enterprise processing thousands of applications, our platform can be tailored to your specific requirements and hiring volume.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">How long does it take to implement VaraHR?</h3>
                <p className="text-gray-700">
                  Most clients are up and running within 48 hours. Our onboarding team will guide you through the setup process, help integrate with your existing ATS if needed, and provide training for your team to ensure a smooth transition.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">How does VaraHR handle bias in recruiting?</h3>
                <p className="text-gray-700">
                  We've built our AI with fairness at its core. Our algorithms are regularly audited for bias and designed to focus on skills and qualifications while ignoring irrelevant personal characteristics. We also provide bias detection tools to help make your job descriptions and assessments more inclusive.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Can VaraHR integrate with my existing ATS?</h3>
                <p className="text-gray-700">
                  Yes, VaraHR integrates seamlessly with most popular ATS platforms, including Greenhouse, Lever, Workday, and more. Our team will work with you to ensure a smooth integration with your existing recruitment tech stack.
                </p>
              </div>
              
              <div className="text-center mt-10">
                <Link to="/faq" className="text-primary font-medium flex items-center justify-center">
                  View all FAQs <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Transforming Your Hiring Today</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join the recruitment revolution with VaraHR's AI-powered solutions.
            </p>
            <Button asChild size="lg" className="px-8">
              <Link to="/request-demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
