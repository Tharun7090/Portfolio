import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`relative w-full min-h-screen py-20 lg:py-0 overflow-hidden ${className}`}>
      {children}
    </section>
  );
}
