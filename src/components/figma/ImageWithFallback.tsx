import { useState } from "react";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  errorComponent?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  fallbackSrc,
  errorComponent,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!hasError && (
        <img
          src={currentSrc}
          alt={alt}
          onError={() => {
            if (fallbackSrc && currentSrc !== fallbackSrc) {
              setCurrentSrc(fallbackSrc);
            } else {
              setHasError(true);
            }
          }}
          {...props}
        />
      )}
      {hasError && (errorComponent ?? <div className="text-sm text-gray-500">Image not available</div>)}
    </>
  );
}


