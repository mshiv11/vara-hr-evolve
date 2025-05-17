
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const VaraLogo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="bg-white p-1 rounded">
        <img 
          src="https://varahr.com/assets/images/varahr-logo-96x96.webp" 
          alt="VaraHR Logo"
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default VaraLogo;
