
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const VaraLogo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-black p-2 rounded">
        <svg width="28" height="28" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M125 20C64.1 20 20 73.2 20 125C20 176.8 64.1 230 125 230C185.9 230 230 176.8 230 125C230 73.2 185.9 20 125 20ZM125 200L50 75H85L125 140L165 75H200L125 200Z" fill="#FFFFFF"/>
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight text-black">VaraHR</span>
    </div>
  );
};

export default VaraLogo;
