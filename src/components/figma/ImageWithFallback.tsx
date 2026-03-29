import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({ src, alt, className, fallbackSrc }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 text-sm ${className ?? ""}`}
        style={{ minHeight: 200 }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={fallbackSrc && error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
