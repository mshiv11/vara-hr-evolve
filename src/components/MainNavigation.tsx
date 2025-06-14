
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VaraLogo from "./VaraLogo";
import { Menu, X } from "lucide-react";
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
    { name: 'Bulk Hiring', href: '/case-studies/bulk-hiring' },
    { name: 'Solo Founder', href: '/case-studies/solo-founder' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between relative">
        <Link to="/" className="flex items-center space-x-2">
          <VaraLogo className={isMobile ? "h-7 w-7" : "h-8 w-8"} />
          <span className="text-lg md:text-xl font-bold text-gray-900">VaraHR</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary bg-transparent data-[state=open]:bg-gray-100">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border-gray-200">
                    {features.map((feature) => (
                      <li key={feature.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={feature.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-gray-700 hover:text-primary"
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
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary bg-transparent data-[state=open]:bg-gray-100">Case Studies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-white border-gray-200">
                    {caseStudies.map((caseStudy) => (
                      <li key={caseStudy.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={caseStudy.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-gray-700 hover:text-primary"
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
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/faq"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
            data-cal-link="mshiv/vara" 
            data-cal-namespace="vara" 
            data-cal-config='{"layout":"month_view"}'
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-b border-gray-200 py-4 shadow-lg">
            <div className="flex flex-col space-y-1 container">
              <h3 className="px-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Features</h3>
              {features.map((feature) => (
                <Link
                  key={feature.name}
                  to={feature.href}
                  className="px-2 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {feature.name}
                </Link>
              ))}
              <h3 className="px-2 pt-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">Case Studies</h3>
              {caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.name}
                  to={caseStudy.href}
                  className="px-2 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {caseStudy.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 !my-3"></div>
              <Link
                to="/pricing"
                className="px-2 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/faq"
                className="px-2 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button 
                className="!mt-4 bg-primary hover:bg-primary/90 text-white rounded-full"
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
