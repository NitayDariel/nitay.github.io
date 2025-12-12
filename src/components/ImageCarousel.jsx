import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({ images, alt, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef(null);

  // Minimum swipe distance to trigger slide change (in pixels)
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsSwiping(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!autoPlay || isHovered || isSwiping || images.length <= 1) return;
    
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovered, isSwiping, interval, nextSlide, images.length]);

  if (!images || images.length === 0) return null;
  
  if (images.length === 1) {
    return (
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-800">
        <img 
          src={images[0]} 
          alt={alt}
          loading="lazy"
          className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden touch-pan-y"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="w-full h-full flex-shrink-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800"
          >
            <img
              src={image}
              alt={`${alt} - ${index + 1}`}
              loading="lazy"
              draggable="false"
              className="max-w-full max-h-full w-auto h-auto object-contain select-none"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on hover for desktop */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700 hidden sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700 hidden sm:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Dots Indicator - Larger touch targets on mobile */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
            className={`h-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6 sm:w-6' 
                : 'bg-white/50 hover:bg-white/75 w-2.5 sm:w-2.5'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/50 text-white text-xs sm:text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Swipe hint for mobile - shows briefly */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:hidden pointer-events-none">
        Swipe to navigate
      </div>
    </div>
  );
}
