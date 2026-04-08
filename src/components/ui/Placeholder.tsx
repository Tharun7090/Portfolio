import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderProps {
  width?: string | number;
  height?: string | number;
  text?: string;
  className?: string;
}

export function Placeholder({
  width = "100%",
  height = "100%",
  text,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-600 ${className}`}
      style={{ width, height }}
    >
      <ImageIcon size={32} strokeWidth={1} />
      {text && <span className="mt-2 text-sm font-light">{text}</span>}
    </div>
  );
}

export function ImagePlaceholder({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div
      className={`overflow-hidden bg-zinc-800 relative ${className}`}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center text-zinc-600 opacity-20">
        <ImageIcon size={48} strokeWidth={1} />
      </div>
    </div>
  );
}
