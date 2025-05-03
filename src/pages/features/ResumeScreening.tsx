
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, UserCheck } from "lucide-react";
import MainLayout from "@/components/MainLayout";

const ResumeScreening = () => {
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
                Intelligent Resume Screening
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Stop spending hours manually reviewing resumes. Our AI can process hundreds of applications in minutes, identifying the most qualified candidates with 93% accuracy.
              </p>
              
              <Button asChild size="lg" className="px-8">
                <Link to="/request-demo">See It In Action</Link>
              </Button>
            </div>
            
            <div className="order-first md:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Intelligent Resume Screening" 
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
            <h2 className="text-3xl font-bold mb-6 text-center">Resume Screening Reimagined</h2>
            <p className="text-xl text-gray-700 text-center">
              Eliminate the bottleneck in your hiring process with intelligent resume screening.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-700">
                Manually reviewing hundreds of resumes is time-consuming, prone to bias, and often leads to missing the best candidates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Common Approaches</h3>
              <p className="text-gray-700">
                Basic keyword screening or outsourcing to agencies that still rely on manual processes and subjective evaluations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VaraHR Solution</h3>
              <p className="text-gray-700">
                AI-powered screening that evaluates skills, experience, and cultural fit, ranking candidates by match score with 93% accuracy.
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
                  alt="VaraHR Resume Screening Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Identify Your Ideal Candidates Faster</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bulk Processing</h3>
                    <p className="text-gray-700">
                      Process hundreds or even thousands of resumes in minutes, not days, saving your team valuable time.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Skill Matching</h3>
                    <p className="text-gray-700">
                      Our AI goes beyond keywords to understand context, identifying candidates with the right skills, even if they use different terminology.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bias Reduction</h3>
                    <p className="text-gray-700">
                      Our algorithms are designed to focus on relevant skills and experience, not demographics, helping you build more diverse teams.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Candidate Ranking</h3>
                    <p className="text-gray-700">
                      Get a prioritized list of candidates ranked by match score, with detailed explanations of why they're a good fit.
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
                    <div className="text-5xl font-bold mb-2">80%</div>
                    <p className="text-white/80">Reduction in screening time</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 md:w-2/3">
                <p className="text-xl text-gray-600 italic mb-6">
                  "Before VaraHR, screening resumes was our biggest bottleneck. Now, our team can focus on engaging with top candidates instead of sifting through hundreds of unqualified applications."
                </p>
                <div>
                  <p className="font-medium text-gray-900">Vikram Mehta</p>
                  <p className="text-gray-600">Recruitment Manager, CloudTech Solutions</p>
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
              Streamline your resume screening process in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Resumes</h3>
              <p className="text-gray-700">
                Bulk upload resumes from your ATS or directly from job boards in any format (PDF, Word, etc.).
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-700">
                Our AI processes all resumes, evaluating skills, experience, education, and potential culture fit.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ranked Results</h3>
              <p className="text-gray-700">
                Review a prioritized list of candidates with match scores and detailed analysis of their qualifications.
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
              Ready to Transform Your Resume Screening Process?
            </h2>
            <p className="text-xl mb-8">
              See how VaraHR can help you find the best candidates faster and more accurately.
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

export default ResumeScreening;
