
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3 } from "lucide-react";
import MainLayout from "@/components/MainLayout";

const CandidateDashboard = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
                  Feature
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Candidate Dashboard
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Manage your entire recruitment pipeline in one central location. Track candidates, analyze performance, and make data-driven hiring decisions.
              </p>
              
              <Button asChild size="lg" className="px-8">
                <Link to="/request-demo">See It In Action</Link>
              </Button>
            </div>
            
            <div className="order-first md:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                  alt="Candidate Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Recruitment Analytics Reimagined</h2>
            <p className="text-xl text-gray-700 text-center">
              Gain complete visibility and control over your hiring process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-700">
                Fragmented recruitment tools make it difficult to track candidates, measure performance, or identify bottlenecks in your hiring process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Common Approaches</h3>
              <p className="text-gray-700">
                Cobbling together multiple systems, spreadsheets, and email threads, resulting in inconsistent processes and lost information.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VaraHR Solution</h3>
              <p className="text-gray-700">
                A comprehensive dashboard that centralizes candidate information, provides real-time analytics, and automates repetitive tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
                  alt="VaraHR Dashboard Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Visibility and Control</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Pipeline Tracking</h3>
                    <p className="text-gray-700">
                      Visual kanban-style boards to track candidates through each stage of your recruitment process.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                    <p className="text-gray-700">
                      Comprehensive metrics and visualizations to measure key performance indicators like time-to-hire, source effectiveness, and diversity metrics.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaboration Tools</h3>
                    <p className="text-gray-700">
                      Built-in communication features for hiring teams to share feedback, schedule interviews, and make collaborative decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automated Workflows</h3>
                    <p className="text-gray-700">
                      Customizable automation to handle repetitive tasks like candidate communication, interview scheduling, and follow-ups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-primary">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <div className="text-5xl font-bold mb-2">40%</div>
                    <p className="text-white/80">Reduction in time-to-hire</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 md:w-2/3">
                <p className="text-xl text-gray-600 italic mb-6">
                  "VaraHR's dashboard has transformed how we manage our recruitment. The analytics have helped us identify bottlenecks we didn't even know existed, and the automation has freed up our team to focus on what really matters – connecting with candidates."
                </p>
                <div>
                  <p className="font-medium text-gray-900">Sanjay Kumar</p>
                  <p className="text-gray-600">VP of Talent, Innovate Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Key Dashboard Features</h2>
            <p className="text-xl text-gray-700">
              Everything you need to manage your recruitment process efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Kanban Boards</h3>
              <p className="text-gray-700">
                Visual pipeline management to track candidates through each stage of your recruitment process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
              <p className="text-gray-700">
                Comprehensive analytics to measure time-to-hire, source effectiveness, cost-per-hire, and more.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Notifications</h3>
              <p className="text-gray-700">
                AI-powered alerts for important events, bottlenecks, and candidate engagement opportunities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Scheduling</h3>
              <p className="text-gray-700">
                Intelligent interview scheduling that syncs with your calendar and sends automatic reminders.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-gray-700">
                Built-in feedback collection, interview scoring, and collaborative decision-making tools.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Tracking</h3>
              <p className="text-gray-700">
                Monitor recruitment spending across job boards, agencies, and other channels with detailed ROI analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Take Control of Your Recruitment Process?
            </h2>
            <p className="text-xl mb-8">
              See how VaraHR's candidate dashboard can help you streamline your hiring and make better decisions.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link to="/request-demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CandidateDashboard;
