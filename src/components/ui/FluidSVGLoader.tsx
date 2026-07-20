import React from "react";

interface FluidSVGLoaderProps {
  size?: number;
  color?: string;
  className?: string;
}

export const FluidSVGLoader: React.FC<FluidSVGLoaderProps> = ({
  size = 48,
  color = "currentColor",
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin text-primary"
      >
        <defs>
          <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary, #3b82f6)" stopOpacity="1" />
            <stop offset="50%" stopColor="var(--accent, #a855f7)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--primary, #3b82f6)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          fill="none"
          stroke="url(#fluidGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="80"
          strokeDashoffset="20"
          d="M 25 5 A 20 20 0 1 1 5 25"
        />
        <circle
          cx="25"
          cy="25"
          r="4"
          className="fill-accent animate-pulse"
        />
      </svg>
    </div>
  );
};
