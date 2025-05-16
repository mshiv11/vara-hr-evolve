
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";

const SoloFounder = () => {
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
                How VaraHR Helped a Solo Founder Hire Smarter & Faster
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                From 424 Applications to Top Talent in Just 24 Hours Without Reading a Single Resume!
              </p>
            </div>
            
            <div className="order-first md:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                  alt="Solo Founder Hiring" 
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
                A fintech startup that helps small businesses manage cash flow. 
                After securing seed funding, the founder needed to quickly build a core team of developers, marketers, and operations 
                specialists to scale the MVP to a full-featured product. With no HR department and limited time, they faced the 
                daunting task of hiring quality talent while still running day-to-day operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Industry</h3>
                <p>Fintech</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Company Size</h3>
                <p>Solo founder (pre-hiring)</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p>Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">The Challenges</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Time Constraints</h3>
                <p className="text-gray-700">
                  As a solo founder, they were already working 14-hour days building the product, meeting investors,
                  and acquiring early customers. They simply didn't have time to sift through hundreds of resumes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Volume of Applications</h3>
                <p className="text-gray-700">
                  After posting job openings on multiple platforms, they received over 400 applications in just a few days,
                  creating an overwhelming backlog.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Critical First Hires</h3>
                <p className="text-gray-700">
                  These initial team members would make or break the startup. They needed not just technical skills but 
                  also people who could wear multiple hats and thrive in a startup environment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">No Hiring Experience</h3>
                <p className="text-gray-700">
                  While an experienced product developer, the founder had limited experience screening, interviewing, and assessing candidates,
                  especially for non-technical roles.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-red-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Breaking Point</h3>
              <p className="text-gray-700">
                "I was drowning in resumes. I'd spent an entire weekend trying to go through them and had only managed to review about 50.
                I ended up interviewing 6 people, but none were the right fit. Meanwhile, my product development was at a standstill, and
                I was missing deadlines I'd promised to investors. I knew I needed help, but couldn't afford a full-time recruiter or agency."
                <br /><br />
                <em>— Founder</em>
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
            
            <div className="mb-12">
              <p className="text-lg text-gray-700">
                After a 30-minute consultation with the founder, VaraHR implemented a comprehensive AI-powered recruitment solution that allowed them
                to find the perfect candidates without reading a single resume:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Intelligent Resume Screening</h3>
                <p className="text-gray-700">
                  VaraHR's AI processed all 424 applications in just 2 hours, analyzing not just skills and experience,
                  but also startup compatibility and growth potential.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Skills Assessment</h3>
                <p className="text-gray-700">
                  Role-specific assessments were automatically sent to the top 30 candidates, evaluating both technical skills
                  and startup aptitude through practical challenges.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Automated Scheduling</h3>
                <p className="text-gray-700">
                  The system automatically scheduled video interviews with the top 10 candidates based on assessment results,
                  working around the founder's limited availability.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Interview Assistant</h3>
                <p className="text-gray-700">
                  During video interviews, VaraHR provided real-time question suggestions and analyzed candidate responses
                  to help make the best hiring decisions.
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-4">The Implementation Timeline</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Day 1: Initial Consultation (30 minutes)</h4>
                    <p className="text-gray-700">
                      The founder explained their hiring needs and startup vision. VaraHR configured the AI system to specific requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Day 1: Resume Processing (2 hours)</h4>
                    <p className="text-gray-700">
                      All 424 resumes were uploaded to the VaraHR platform and processed by the AI system.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Day 1: Automated Assessments (4 hours)</h4>
                    <p className="text-gray-700">
                      Custom assessments were sent to top candidates, with 27 completing them by the end of the day.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Day 2: Video Interviews (6 hours)</h4>
                    <p className="text-gray-700">
                      The founder conducted 8 video interviews with top performers, supported by VaraHR's AI interview assistant.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      5
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Day 2: Candidate Selection</h4>
                    <p className="text-gray-700">
                      With comprehensive data on each candidate, they confidently extended offers to their top 3 choices.
                    </p>
                  </div>
                </div>
              </div>
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
                <div className="text-4xl font-bold text-primary mb-2">24</div>
                <p className="text-gray-700">Hours from start to offers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-700">Offer acceptance rate</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">39</div>
                <p className="text-gray-700">Hours saved in hiring process</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p className="text-gray-700">Team retention after 6 months</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Rapid Team Formation</h3>
                <p className="text-gray-700">
                  Within 24 hours, the founder had extended offers to three exceptional candidates: a senior developer, 
                  a growth marketer, and an operations specialist. All three accepted within a day, allowing them to 
                  form their core team and resume product development immediately.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Quality Hires</h3>
                <p className="text-gray-700">
                  The AI screening process identified candidates who not only had the right skills but also entrepreneurial mindsets. 
                  All three hires quickly became valuable contributors, helping the startup exceed its product development milestones.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Founder Time Reclaimed</h3>
                <p className="text-gray-700">
                  Instead of spending weeks on recruitment, the founder was able to focus on product development and investor relations. 
                  The automated process saved an estimated 39 hours of resume screening and initial interviews.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Long-term Business Impact</h3>
                <p className="text-gray-700">
                  With a strong core team in place, the startup successfully launched its product one week ahead of schedule. 
                  Within six months, they had secured an additional round of funding and grown to a team of twelve, 
                  using VaraHR for all subsequent hires.
                </p>
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
                  <h3 className="font-semibold">Founder & CEO</h3>
                  <p className="text-gray-700">Fintech Startup</p>
                </div>
              </div>
              <blockquote className="text-xl italic text-gray-700">
                "VaraHR saved my startup. As a solo founder, I was completely overwhelmed by the hiring process and drowning in resumes. 
                Their AI solution did in 24 hours what would have taken me weeks to accomplish. The quality of candidates was exceptional, 
                and all three of my initial hires are still with the company and thriving. I've since used VaraHR for all our hiring needs, 
                and it's been instrumental to our growth. If you're a founder trying to build a team while running your business, you need this solution."
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
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl mb-8">
              Whether you're a solo founder or leading a growing team, VaraHR can help you find the right talent faster.
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

export default SoloFounder;
