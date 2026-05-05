import { LucideProps } from "lucide-react";

export const Logo = ({ className = "w-8 h-8", ...props }: { className?: string } & LucideProps) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    {...props}
  >
    {/* Geometric Faceted 'B' Structure */}
    {/* Left vertical spine */}
    <path d="M20 10L40 15V85L20 90V10Z" fill="#C1FF72" fillOpacity="0.9" />
    <path d="M20 10L30 50L20 90V10Z" fill="#A4E052" />
    
    {/* Top faceted loop */}
    <path d="M40 15L80 15L80 42L55 50L40 15Z" fill="#D4FF91" />
    <path d="M80 15L65 35L80 42V15Z" fill="#B2EC5D" />
    
    {/* Bottom faceted loop */}
    <path d="M40 85L80 85L80 58L55 50L40 85Z" fill="#8BC34A" />
    <path d="M80 85L65 65L80 58V85Z" fill="#7CB342" />
    
    {/* Central Gold Diamond (as seen in image) */}
    <path d="M38 50L55 32L72 50L55 68L38 50Z" fill="#D4AF37" />
    <path d="M55 32L72 50L55 68V32Z" fill="#B8972F" />
    
    {/* Connecting folds */}
    <path d="M40 15L55 50L40 85V15Z" fill="#C1FF72" fillOpacity="0.5" />
  </svg>
);
