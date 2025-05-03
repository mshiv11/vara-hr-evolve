
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users } from "lucide-react";
import MainLayout from "@/components/MainLayout";

const SkillsAssessments = () => {
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
                Custom Skills Assessments
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Evaluate candidates objectively with role-specific assessment tests. Verify skills before interviews and make data-driven hiring decisions.
              </p>
              
              <Button asChild size="lg" className="px-8">
                <Link to="/request-demo">See It In Action</Link>
              </Button>
            </div>
            
            <div className="order-first md:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                  alt="Custom Skills Assessments" 
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
            <h2 className="text-3xl font-bold mb-6 text-center">Skills Assessment Reimagined</h2>
            <p className="text-xl text-gray-700 text-center">
              Move beyond unreliable resumes to objective skill verification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-700">
                Candidates often exaggerate skills on resumes, leading to poor hires and wasted interview time with unqualified applicants.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Common Approaches</h3>
              <p className="text-gray-700">
                Generic assessment tools that don't match your specific role requirements or time-consuming custom test development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VaraHR Solution</h3>
              <p className="text-gray-700">
                AI-generated role-specific assessments that accurately evaluate technical and soft skills with detailed analytics.
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
              <h2 className="text-3xl font-bold mb-6">Create Tailored Assessments for Any Role</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Assessment Builder</h3>
                    <p className="text-gray-700">
                      Create role-specific assessments in minutes with our AI-powered builder, tailoring questions to your exact requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Format Testing</h3>
                    <p className="text-gray-700">
                      Evaluate candidates using multiple question formats including multiple choice, coding challenges, case studies, and video responses.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Anti-Cheating Measures</h3>
                    <p className="text-gray-700">
                      Advanced proctoring features and dynamic question generation to ensure assessment integrity and authentic results.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
                    <p className="text-gray-700">
                      Review comprehensive performance reports with skill-level breakdowns to identify candidates' strengths and weaknesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                alt="VaraHR Skills Assessment Interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Real-World Success Stories</h2>
            
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden mb-10">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Mitr.work University Assessment Success</h3>
                <p className="text-gray-700 mb-6">
                  VaraHR created a custom assessment solution for Mitr.work to efficiently evaluate hundreds of students during university recruitment drives, reducing the screening time by 90% while increasing quality of hires.
                </p>
                <Button asChild variant="outline">
                  <Link to="/case-studies/mitr-work">Read Full Case Study</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-5xl font-bold text-primary">85%</div>
                </div>
                <p className="text-center text-gray-700">
                  Reduction in unqualified candidates reaching the interview stage
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-5xl font-bold text-primary">62%</div>
                </div>
                <p className="text-center text-gray-700">
                  Improvement in new hire performance ratings after implementation
                </p>
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
              Create and deploy custom skills assessments in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Define Skills</h3>
              <p className="text-gray-700">
                Specify the skills and competencies you want to assess for your specific role requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate Assessment</h3>
              <p className="text-gray-700">
                Our AI creates a custom assessment with the appropriate question types and difficulty levels.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Evaluate Results</h3>
              <p className="text-gray-700">
                Review detailed performance analytics and compare candidates based on objective skill measurements.
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
              Ready to Assess Candidates More Effectively?
            </h2>
            <p className="text-xl mb-8">
              See how VaraHR's custom skills assessments can help you make better hiring decisions.
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

export default SkillsAssessments;
