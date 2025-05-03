
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText } from "lucide-react";
import MainLayout from "@/components/MainLayout";

const JobDescriptions = () => {
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
                Automated Job Descriptions
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Create compelling, inclusive job descriptions in minutes, not hours. Our AI helps you craft descriptions that attract top talent and improve your conversion rates.
              </p>
              
              <Button asChild size="lg" className="px-8">
                <Link to="/request-demo">See It In Action</Link>
              </Button>
            </div>
            
            <div className="order-first md:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="Automated Job Descriptions" 
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
            <h2 className="text-3xl font-bold mb-6 text-center">Job Description Creation Reimagined</h2>
            <p className="text-xl text-gray-700 text-center">
              Stop struggling with job descriptions that don't attract the right candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FileText size={24} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-700">
                Creating effective job descriptions is time-consuming and often results in generic postings that fail to attract the right candidates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <FileText size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Common Approaches</h3>
              <p className="text-gray-700">
                Copying competitors' job descriptions, reusing outdated templates, or rushing through the process, resulting in poor-quality candidates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FileText size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VaraHR Solution</h3>
              <p className="text-gray-700">
                AI-powered job description generator that creates compelling, bias-free descriptions optimized to attract top talent for your specific role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Create Perfect Job Descriptions Every Time</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Role-Specific Templates</h3>
                    <p className="text-gray-700">
                      Start with industry-specific templates crafted by hiring experts and tailored to your company's needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bias Detection</h3>
                    <p className="text-gray-700">
                      Our AI scans for biased language and suggests inclusive alternatives to help you attract diverse candidates.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                    <p className="text-gray-700">
                      Automatically optimize your job descriptions for search engines to increase visibility and attract more qualified candidates.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conversion Analytics</h3>
                    <p className="text-gray-700">
                      Track which descriptions perform best and get AI-powered suggestions for improvements to increase application rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                alt="VaraHR Job Description Interface" 
                className="w-full h-full object-cover"
              />
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
                    <div className="text-5xl font-bold mb-2">94%</div>
                    <p className="text-white/80">Increase in qualified applicants</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 md:w-2/3">
                <p className="text-xl text-gray-600 italic mb-6">
                  "VaraHR's job description tool transformed our hiring process. We're now attracting more qualified candidates, and our job posts have a much higher conversion rate. What used to take hours now takes minutes."
                </p>
                <div>
                  <p className="font-medium text-gray-900">Anjali Desai</p>
                  <p className="text-gray-600">Director of Talent Acquisition, TechStart Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-700">
              Create compelling job descriptions in just three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Input Role Details</h3>
              <p className="text-gray-700">
                Enter the job title, key responsibilities, and required skills. Our AI helps you complete this information.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Generation</h3>
              <p className="text-gray-700">
                Our AI creates a compelling job description, optimized for both search engines and candidate conversion.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Review & Publish</h3>
              <p className="text-gray-700">
                Review the AI-generated description, make any final edits, and publish directly to job boards or your ATS.
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
              Ready to Create Better Job Descriptions?
            </h2>
            <p className="text-xl mb-8">
              See how VaraHR can help you attract better candidates with compelling job descriptions.
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

export default JobDescriptions;
