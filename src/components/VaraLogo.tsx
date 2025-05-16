
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const VaraLogo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-white p-1 rounded">
        <img 
          src="https://varahr.com/assets/images/varahr-logo-96x96.webp" 
          alt="VaraHR Logo" 
          width="36" 
          height="36" 
          className="h-9 w-auto"
        />
      </div>
      <span className="font-bold text-xl tracking-tight text-black">VaraHR</span>
    </div>
  );
};

export default VaraLogo;
