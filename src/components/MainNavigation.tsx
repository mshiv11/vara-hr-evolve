
import { useState } from "react";
import { Link } from "react-router-dom";
import VaraLogo from "./VaraLogo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white w-full border-b border-gray-200 py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <VaraLogo />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary">
                Features <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem asChild>
                <Link to="/features/job-descriptions" className="cursor-pointer">
                  Automated Job Descriptions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/features/resume-screening" className="cursor-pointer">
                  Intelligent Resume Screening
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/features/skills-assessments" className="cursor-pointer">
                  Custom Skills Assessments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/features/candidate-dashboard" className="cursor-pointer">
                  Candidate Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary">
                Case Studies <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem asChild>
                <Link to="/case-studies/mitr-work" className="cursor-pointer">
                  University Assessment
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/case-studies/solo-founder" className="cursor-pointer">
                  Solo Founder 24-Hour Hiring
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/faq" className="font-medium text-gray-700 hover:text-primary">
            FAQ
          </Link>
        </div>

        <div className="hidden md:block">
          <Button 
            data-cal-link="mshiv/vara" 
            data-cal-namespace="vara" 
            data-cal-config='{"layout":"month_view"}'
          >
            Request Demo
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-md z-50">
            <div className="flex flex-col p-4">
              <Link 
                to="/" 
                className="py-2 px-4 text-gray-700 hover:text-primary"
                onClick={closeMenu}
              >
                Home
              </Link>
              <div className="py-2 px-4">
                <p className="font-medium">Features</p>
                <div className="ml-4 mt-1 flex flex-col">
                  <Link 
                    to="/features/job-descriptions" 
                    className="py-1 text-gray-700 hover:text-primary"
                    onClick={closeMenu}
                  >
                    Automated Job Descriptions
                  </Link>
                  <Link 
                    to="/features/resume-screening" 
                    className="py-1 text-gray-700 hover:text-primary"
                    onClick={closeMenu}
                  >
                    Intelligent Resume Screening
                  </Link>
                  <Link 
                    to="/features/skills-assessments" 
                    className="py-1 text-gray-700 hover:text-primary"
                    onClick={closeMenu}
                  >
                    Custom Skills Assessments
                  </Link>
                  <Link 
                    to="/features/candidate-dashboard" 
                    className="py-1 text-gray-700 hover:text-primary"
                    onClick={closeMenu}
                  >
                    Candidate Dashboard
                  </Link>
                </div>
              </div>
              <div className="py-2 px-4">
                <p className="font-medium">Case Studies</p>
                <div className="ml-4 mt-1 flex flex-col">
                  <Link 
                    to="/case-studies/mitr-work" 
                    className="py-1 text-gray-700 hover:text-primary"
                    onClick={closeMenu}
                  >
                    University Assessment
                  </Link>
                  <Link 
                    to="/case-studies/solo-founder" 
                    className="py-1 text-gray-700 hover:text-primary"
                    onClick={closeMenu}
                  >
                    Solo Founder 24-Hour Hiring
                  </Link>
                </div>
              </div>
              <Link 
                to="/faq" 
                className="py-2 px-4 text-gray-700 hover:text-primary"
                onClick={closeMenu}
              >
                FAQ
              </Link>
              <div className="mt-4">
                <Button 
                  className="w-full"
                  data-cal-link="mshiv/vara" 
                  data-cal-namespace="vara" 
                  data-cal-config='{"layout":"month_view"}'
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
