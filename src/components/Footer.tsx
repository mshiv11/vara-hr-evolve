
import { Link } from "react-router-dom";
import VaraLogo from "./VaraLogo";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <VaraLogo />
            <p className="mt-4 text-gray-600">
              Transforming recruitment through AI-powered tools and workflows, no technical expertise required.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://x.com/SainiMrityunjay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Twitter profile"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mrityunjaysaini/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:mshiv@varahr.com" 
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Email us"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features/job-descriptions" className="text-gray-600 hover:text-primary">
                  Automated Job Descriptions
                </Link>
              </li>
              <li>
                <Link to="/features/resume-screening" className="text-gray-600 hover:text-primary">
                  Intelligent Resume Screening
                </Link>
              </li>
              <li>
                <Link to="/features/skills-assessments" className="text-gray-600 hover:text-primary">
                  Custom Skills Assessments
                </Link>
              </li>
              <li>
                <Link to="/features/candidate-dashboard" className="text-gray-600 hover:text-primary">
                  Candidate Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/case-studies/mitr-work" className="text-gray-600 hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: <a href="mailto:mshiv@varahr.com" className="hover:text-primary">mshiv@varahr.com</a>
            </p>
            <div className="mt-6">
              <Button
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} VaraHR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
