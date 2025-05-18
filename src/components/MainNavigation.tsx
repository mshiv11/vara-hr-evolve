
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VaraLogo from "./VaraLogo";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const MainNavigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const features = [
    { name: 'Job Descriptions', href: '/features/job-descriptions' },
    { name: 'Resume Screening', href: '/features/resume-screening' },
    { name: 'Skills Assessments', href: '/features/skills-assessments' },
    { name: 'Candidate Dashboard', href: '/features/candidate-dashboard' },
  ];

  const caseStudies = [
    { name: 'Buik Hiring', href: '/case-studies/mitr-work' },
    { name: 'Solo Founder', href: '/case-studies/solo-founder' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between relative">
        <Link to="/" className="flex items-center space-x-2">
          <VaraLogo className={isMobile ? "h-7 w-7" : "h-8 w-8"} />
          <span className="text-lg md:text-xl font-bold">VaraHR</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {features.map((feature) => (
                      <li key={feature.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={feature.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{feature.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors">Case Studies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {caseStudies.map((caseStudy) => (
                      <li key={caseStudy.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={caseStudy.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{caseStudy.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/faq"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Button 
            data-cal-link="mshiv/vara" 
            data-cal-namespace="vara" 
            data-cal-config='{"layout":"month_view"}'
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-b border-gray-100 py-4 shadow-lg">
            <div className="flex flex-col space-y-3 container">
              {/* Features Dropdown */}
              <div className="relative">
                <button 
                  className="flex w-full items-center justify-between px-2 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    const target = document.getElementById('features-dropdown');
                    if (target) {
                      target.classList.toggle('hidden');
                    }
                  }}
                >
                  <span>Features</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div id="features-dropdown" className="hidden bg-gray-50 rounded-md mt-1">
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      to={feature.href}
                      className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Case Studies Dropdown */}
              <div className="relative">
                <button 
                  className="flex w-full items-center justify-between px-2 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    const target = document.getElementById('case-studies-dropdown');
                    if (target) {
                      target.classList.toggle('hidden');
                    }
                  }}
                >
                  <span>Case Studies</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div id="case-studies-dropdown" className="hidden bg-gray-50 rounded-md mt-1">
                  {caseStudies.map((caseStudy) => (
                    <Link
                      key={caseStudy.name}
                      to={caseStudy.href}
                      className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {caseStudy.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/pricing"
                className="px-2 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/faq"
                className="px-2 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button 
                className="mt-2"
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
