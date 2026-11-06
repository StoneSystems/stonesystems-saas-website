import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import classes from './LazyLoadVideo.module.css';

interface LazyLoadVideoProps {
  src: string;
  poster: string;
  alt: string;
  type: string;
  width: string;
  height: string;
  onPlay?: () => void;
  onPause?: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

const LazyLoadVideo: React.FC<LazyLoadVideoProps> = ({
  src,
  poster,
  alt,
  type,
  width,
  height,
  onPlay,
  onPause,
  onFullscreenChange,
}) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const thumbnailRef = useRef<HTMLDivElement | null>(null);

  // Observe element intersection (lazy load trigger)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (thumbnailRef.current) {
      observer.observe(thumbnailRef.current);
    }

    return () => {
      if (thumbnailRef.current) {
        observer.unobserve(thumbnailRef.current);
      }
    };
  }, []);

  // Handle video loading
  useEffect(() => {
    if (isIntersecting && videoRef.current) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      videoRef.current.addEventListener('loadeddata', handleLoadedData);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    }
    return undefined;
  }, [isIntersecting]);

  // Fullscreen change handler
  useEffect(() => {
    const handleFullscreenChange = () => {
      const { fullscreenElement } = document;

      if (fullscreenElement === videoRef.current) {
        onFullscreenChange?.(true); // Video is in fullscreen mode
      } else {
        onFullscreenChange?.(false); // Video exited fullscreen mode
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, [onFullscreenChange]);

  return (
    <div ref={thumbnailRef} className={classes.videoContainer}>
      {isIntersecting ? (
        <>
          {!isLoaded && (
            <>
              <div className={classes.spinner}></div>
              <Image
                className={classes.image}
                width={100}
                height={100}
                loading="eager"
                src={poster}
                alt={alt}
              />
            </>
          )}
          <video
            width={width}
            height={height}
            ref={videoRef}
            src={src}
            poster={poster}
            controls={isLoaded}
            preload="metadata"
            style={{ display: isLoaded ? 'block' : 'none' }}
            className={classes.video}
            onPlay={onPlay}
            onPause={onPause}
          >
            <source src={src} type={type} />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <Image
          className={classes.image}
          width={100}
          height={100}
          loading="eager"
          src={poster}
          alt={alt}
        />
      )}
    </div>
  );
};

export default LazyLoadVideo;
