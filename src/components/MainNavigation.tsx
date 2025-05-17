
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VaraLogo from "./VaraLogo";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MainNavigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features/job-descriptions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies/mitr-work' },
    { name: 'FAQ', href: '/faq' },
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
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button 
            data-cal-link="mshiv/vara" 
            data-cal-namespace="vara" 
            data-cal-config='{"layout":"month_view"}'
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-b border-gray-100 py-4 shadow-lg">
            <div className="flex flex-col space-y-3 container">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-2 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="mt-2"
                data-cal-link="mshiv/vara" 
                data-cal-namespace="vara" 
                data-cal-config='{"layout":"month_view"}'
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
