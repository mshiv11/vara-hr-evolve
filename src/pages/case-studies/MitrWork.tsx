
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";

const MitrWork = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
                  Case Study
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                How VaraHR Created a Custom Assessment for Mitr.work University Recruitment
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Streamlining campus recruitment with AI-powered assessments for evaluating hundreds of students efficiently and accurately.
              </p>
            </div>
            
            <div className="order-first md:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                  alt="University Recruitment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
              <p className="text-lg text-gray-700">
                Mitr.work is a fast-growing tech company specializing in collaborative workflow solutions. 
                With rapid expansion plans, they needed to hire a large number of entry-level developers and 
                product managers from university campuses across India. However, they faced significant 
                challenges in efficiently evaluating hundreds of candidates during campus recruitment drives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Industry</h3>
                <p>Technology</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Company Size</h3>
                <p>150+ employees</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p>Multiple offices across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">The Challenge</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Volume of Candidates</h3>
                <p className="text-gray-700">
                  Mitr.work needed to evaluate 500+ students per campus visit, creating a logistical 
                  challenge for their small HR team.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Assessment Consistency</h3>
                <p className="text-gray-700">
                  Ensuring standardized evaluation across different campuses and interviewers was proving difficult.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Technical & Soft Skills</h3>
                <p className="text-gray-700">
                  They needed to assess both technical proficiency and soft skills critical for their collaborative culture.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Time Constraints</h3>
                <p className="text-gray-700">
                  Campus recruitment slots were limited, allowing only 1-2 days per campus to complete all evaluations.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-red-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Breaking Point</h3>
              <p className="text-gray-700">
                After a particularly challenging recruitment drive where they spent three weeks processing assessments
                only to make just five offers—with three candidates declining—Mitr.work realized their approach was 
                unsustainable. They needed a more efficient solution that could scale with their hiring needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">The VaraHR Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Custom Assessment Platform</h3>
                <p className="text-gray-700 mb-6">
                  VaraHR developed a tailored assessment solution specifically for Mitr.work's campus recruitment needs:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Role-specific technical assessments for developers and product managers</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated evaluation of coding challenges with plagiarism detection</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Video response questions to assess communication and problem-solving skills</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scalable platform capable of handling 500+ simultaneous test takers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">AI-Powered Analysis</h3>
                <p className="text-gray-700 mb-6">
                  VaraHR's AI capabilities transformed how Mitr.work evaluated candidates:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated scoring of technical assessments with detailed skill breakdowns</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Natural language processing to evaluate communication skills from video responses</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Predictive analytics to identify candidates most likely to succeed in the company culture</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ranked candidate lists with objective scoring and comparative analysis</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Implementation Process</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium">Discovery & Requirement Analysis</p>
                    <p className="text-gray-700">Understanding Mitr.work's specific hiring criteria and company values (2 weeks)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium">Custom Assessment Design</p>
                    <p className="text-gray-700">Creating role-specific technical challenges and behavioral questions (3 weeks)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium">Platform Testing & Refinement</p>
                    <p className="text-gray-700">Ensuring scalability and reliability for campus environments (2 weeks)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <p className="font-medium">Pilot Program</p>
                    <p className="text-gray-700">Initial deployment at one campus with real-time adjustments (1 week)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <p className="font-medium">Full Deployment & HR Team Training</p>
                    <p className="text-gray-700">Rolling out across all target campuses (2 weeks)</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">The Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p className="text-gray-700">Reduction in assessment processing time</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">3X</div>
                <p className="text-gray-700">Increase in qualified candidates identified</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p className="text-gray-700">Offer acceptance rate (up from 40%)</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">78%</div>
                <p className="text-gray-700">Retention rate after one year</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Transformative Impact</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Efficient Campus Recruitment</h4>
                  <p className="text-gray-700">
                    Mitr.work could now process assessments for 500+ students in just 24 hours, with immediate 
                    results and analysis available to the hiring team.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Improved Candidate Quality</h4>
                  <p className="text-gray-700">
                    The AI-powered assessments identified candidates who not only had strong technical skills
                    but also aligned well with the company's collaborative culture.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Data-Driven Hiring Decisions</h4>
                  <p className="text-gray-700">
                    Recruiters now had objective data to back their hiring decisions, reducing bias and
                    ensuring consistency across all campus recruitment drives.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Long-term Retention</h4>
                  <p className="text-gray-700">
                    By better matching candidates to roles that suited their skills and work preferences,
                    Mitr.work saw a significant improvement in new hire retention rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Aditya Sharma</h3>
                  <p className="text-gray-700">Head of Talent Acquisition, Mitr.work</p>
                </div>
              </div>
              <blockquote className="text-xl italic text-gray-700">
                "VaraHR's custom assessment solution transformed our campus recruitment process. We went from spending 
                weeks evaluating candidates to getting real-time results during our campus visits. The quality of hires 
                has improved dramatically, and we're now able to make offers on the spot to top performers. This has given 
                us a competitive edge in securing the best talent before other companies can even complete their evaluations."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Recruitment Process?
            </h2>
            <p className="text-xl mb-8">
              Learn how VaraHR can create a custom assessment solution for your unique hiring needs.
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

export default MitrWork;
