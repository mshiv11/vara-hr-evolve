
import MainLayout from "@/components/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700">
              Everything you need to know about VaraHR and our AI-powered recruitment solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How does VaraHR's AI technology work?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  VaraHR uses advanced machine learning algorithms trained on millions of hiring outcomes to match candidates to roles based on skills, experience, and cultural fit. Our technology reads and analyzes resumes, cover letters, and assessment responses to identify the most qualified candidates. The AI continuously learns and improves from your feedback and hiring decisions, becoming more accurate over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Is VaraHR suitable for all company sizes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, VaraHR is designed to scale with your needs. Whether you're a solo founder making your first hire, a growing startup building a team, or an enterprise processing thousands of applications, our platform can be tailored to your specific requirements and hiring volume. We have solutions designed specifically for small businesses, mid-market companies, and enterprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How long does it take to implement VaraHR?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Most clients are up and running within 48 hours. Our onboarding team will guide you through the setup process, help integrate with your existing ATS if needed, and provide training for your team to ensure a smooth transition. For larger organizations with complex requirements, we offer custom implementation plans with dedicated support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How does VaraHR handle bias in recruiting?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  We've built our AI with fairness at its core. Our algorithms are regularly audited for bias and designed to focus on skills and qualifications while ignoring irrelevant personal characteristics. We also provide bias detection tools to help make your job descriptions and assessments more inclusive. Additionally, we continuously train our models on diverse datasets to ensure equitable outcomes across different demographic groups.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Can VaraHR integrate with my existing ATS?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, VaraHR integrates seamlessly with most popular ATS platforms, including Greenhouse, Lever, Workday, BambooHR, and more. Our team will work with you to ensure a smooth integration with your existing recruitment tech stack. If you're using a less common ATS, we have an API that allows for custom integrations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What types of roles can VaraHR help me hire for?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  VaraHR can assist with hiring across virtually all roles and industries. Our AI has been trained on millions of job descriptions and resumes spanning technical roles (software engineers, data scientists), creative positions (designers, marketers), operational roles (project managers, operations specialists), leadership positions, and more. We can customize the assessment process for any specific role or skill set your organization requires.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How accurate is VaraHR's candidate matching?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Our AI achieves a 93% accuracy rate in identifying candidates who match your specific requirements. This is significantly higher than traditional manual screening methods, which typically achieve 50-70% accuracy. Our system has been validated across thousands of hiring decisions and continuously improves its accuracy through machine learning feedback loops based on your hiring decisions and candidate performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What kind of support does VaraHR provide?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  We provide comprehensive support to ensure your success. All clients receive access to our dedicated customer success team, knowledge base, and regular training sessions. Our premium tiers include dedicated account management, custom implementation support, and personalized training programs. Our support team is available via email, chat, and phone during business hours, with emergency support available 24/7.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How does VaraHR handle data security and privacy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  We take data security and privacy extremely seriously. VaraHR is fully GDPR and CCPA compliant, with robust encryption for all data both in transit and at rest. We maintain SOC 2 compliance and undergo regular security audits. Our platform includes features for data anonymization, retention policies, and candidate consent management to help you maintain compliance with global privacy regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Can candidates try to game the VaraHR system?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Our AI is designed with multiple layers of validation to prevent gaming. For resume screening, we analyze contextual patterns in work history and achievements rather than just keywords. Our skills assessments include anti-cheating measures like plagiarism detection, dynamic question generation, and proctoring options. Additionally, our video response analysis looks at substantive content, providing a multi-dimensional evaluation that's difficult to manipulate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Can I customize the assessment process for my company's needs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. VaraHR offers extensive customization options. You can tailor assessment criteria, question types, difficulty levels, and evaluation metrics to match your specific requirements. Our platform allows you to incorporate company-specific scenarios and problems into assessments, align evaluations with your unique values and culture, and adjust the weighting of different skills and competencies based on role priorities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How quickly can I expect to see results with VaraHR?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Most clients see immediate improvements in their hiring efficiency, with an average 75% reduction in time-to-hire from the first recruiting cycle. The quality improvements typically become apparent within 3-6 months, as you'll notice better employee performance, higher retention rates, and improved team cohesion. Our analytics dashboard provides real-time metrics so you can track your improvements from day one.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-center">Still have questions?</h2>
              <p className="text-center text-gray-700 mb-6">
                Contact us and our team will be happy to help you with any questions you have.
              </p>
              <div className="flex justify-center">
                <Button asChild>
                  <Link to="/request-demo">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;
