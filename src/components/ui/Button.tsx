import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDownRight, ArrowLeft } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'default' | 'line' | 'line-small';
  icon?: 'right' | 'down-right' | 'left' | 'none';
  children: React.ReactNode;
  target?: string; // Add specific anchor props we might use
  rel?: string;
}

export function Button({ href, variant = 'default', icon = 'none', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 group";
  
  const variants = {
    default: "bg-foreground text-background border border-foreground/20 hover:bg-background hover:text-foreground px-8 py-4 rounded-full uppercase tracking-wider text-sm font-medium transition-colors",
    line: "text-foreground uppercase tracking-wider text-sm font-medium hover:text-accent",
    "line-small": "text-foreground/80 hover:text-foreground uppercase tracking-wider text-xs font-medium border-b border-foreground/20 hover:border-foreground pb-1"

  };

  const iconMap = {
    'right': <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />,
    'down-right': <ArrowDownRight className="ml-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />,
    'left': <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />,
    'none': null
  };

  const content = (
    <>
      {icon === 'left' && iconMap.left}
      <span>{children}</span>
      {(icon === 'right' || icon === 'down-right') && iconMap[icon]}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
}
