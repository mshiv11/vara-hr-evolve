
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const VaraLogo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="bg-white p-1 rounded">
        <img 
          src="https://github.com/mshiv11/vara-hr-evolve/blob/main/VaraHR%20Logo.png?raw=true" 
          alt="VaraHR Logo"
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default VaraLogo;
