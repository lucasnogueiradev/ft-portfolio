import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const StyledImage = styled.img<LazyImageProps>`
  width: 100%;
  max-width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  object-fit: cover;
`;

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <StyledImage
      ref={imgRef}
      className={`${className} ${isVisible ? "loaded" : ""}`}
      src={isVisible ? src : undefined}
      alt={alt}
    />
  );
};

export default LazyImage;
