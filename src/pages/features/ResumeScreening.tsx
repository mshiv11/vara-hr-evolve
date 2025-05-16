
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, UserCheck, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ResumeScreening = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-primary">Intelligent</span> Resume Screening
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Stop drowning in resumes. Our AI-powered resume screening solution helps you identify the best candidates in minutes, not days.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Automatically identify the most qualified candidates based on your specific requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Rank candidates by fit with customizable scoring criteria</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Eliminate bias with objective skill-based assessment</span>
                </li>
              </ul>
              
              <Button asChild size="lg">
                <Link to="/request-demo">Request Demo</Link>
              </Button>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Resume screening automation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Our Resume Screening Works</h2>
            <p className="text-xl text-gray-700">
              We build custom AI-powered tools that seamlessly integrate with your workflow to automatically screen and rank candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Configuration</h3>
                <p className="text-gray-700">
                  We work with you to understand your specific job requirements, must-have skills, and organizational values.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Tally Form Implementation</h3>
                <p className="text-gray-700">
                  We build a custom Tally form that collects and pre-processes candidate information, automatically filtering and scoring applications.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Google Sheet Dashboard</h3>
                <p className="text-gray-700">
                  Your custom Google Sheet automatically ranks candidates, providing visualization of top talent and key insights for decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-gray-700">
              Our AI-powered resume screening solutions are designed to make your hiring process faster, more accurate, and bias-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Scoring Logic</h3>
              <p className="text-gray-700">
                Automatically evaluate candidates based on criteria that matter specifically to your company and role.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Skill Matching</h3>
              <p className="text-gray-700">
                Identify candidates with the specific skills and experiences that match your job requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Filtering</h3>
              <p className="text-gray-700">
                Pre-screen candidates based on must-have qualifications and experience requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visual Candidate Ranking</h3>
              <p className="text-gray-700">
                Instantly see your top candidates ranked by fit score in an easy-to-use spreadsheet interface.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bias Mitigation</h3>
              <p className="text-gray-700">
                Focus on skills and qualifications with built-in tools to reduce unconscious bias in the screening process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
              <p className="text-gray-700">
                Enable your entire hiring team to review, comment, and collaborate on candidate assessment in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Deliverables */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Receive</h2>
            <p className="text-xl text-gray-700">
              Our AI-powered resume screening solutions include everything you need to transform your candidate evaluation process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img 
                  src="https://tally.so/favicon/favicon.svg" 
                  alt="Tally Forms" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Custom Tally Form Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Branded application form with your company logo and design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>AI-powered pre-screening questions that evaluate candidate fit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Automatic filtering of unqualified candidates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Custom thank you and follow-up messages</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img 
                  src="https://cdn.cdnlogo.com/logos/g/35/google-sheets.svg" 
                  alt="Google Sheets" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Resume Analysis Dashboard</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Custom Google Sheet with automatic candidate ranking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Visual dashboard showing top candidates at a glance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Collaborative tools for team feedback and notes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Export and reporting capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Resume Screening Process?</h2>
            <p className="text-xl mb-8">
              Let us show you how our AI-powered resume screening can save you time and help you find the best candidates.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link to="/request-demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Related Features */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Related Solutions</h2>
            <p className="text-xl text-gray-700">
              Discover our other AI-powered recruitment tools that work together to transform your hiring process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Automated Job Descriptions</h3>
                <p className="text-gray-700 mb-4">
                  Create compelling, bias-free job descriptions that attract top talent.
                </p>
                <Link to="/features/job-descriptions" className="text-primary font-medium flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Custom Skills Assessments</h3>
                <p className="text-gray-700 mb-4">
                  Evaluate candidates with tailored assessments for any role or skill set.
                </p>
                <Link to="/features/skills-assessments" className="text-primary font-medium flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Candidate Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  Track and manage your entire recruitment pipeline with real-time analytics.
                </p>
                <Link to="/features/candidate-dashboard" className="text-primary font-medium flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ResumeScreening;
