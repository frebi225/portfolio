"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCarouselProps {
  children: React.ReactNode[]
  className?: string
}

export function ProjectCarousel({ children, className }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const totalSlides = children.length
  const slidesToShow = getSlidesToShow()
  const maxIndex = Math.max(0, totalSlides - slidesToShow)

  function getSlidesToShow() {
    // Responsive number of slides to show based on viewport
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 3 // lg and above
      if (window.innerWidth >= 768) return 2 // md
      return 1 // sm and below
    }
    return 3 // Default for SSR
  }

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const newIndex = Math.max(0, Math.min(index, maxIndex))
      setCurrentIndex(newIndex)

      const slideWidth = carouselRef.current.scrollWidth / totalSlides
      carouselRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      })
    }
  }

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1)
  }

  const handleNext = () => {
    scrollToIndex(currentIndex + 1)
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const slideWidth = carouselRef.current.scrollWidth / totalSlides
      const newIndex = Math.round(scrollLeft / slideWidth)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className={cn("relative group", className)}>
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="min-w-full sm:min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] px-4 snap-start"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm border-gray-200 shadow-md hover:bg-white",
          currentIndex <= 0 && "opacity-50 cursor-not-allowed",
        )}
        onClick={handlePrev}
        disabled={currentIndex <= 0}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 shadow-md hover:bg-white",
          currentIndex >= maxIndex && "opacity-50 cursor-not-allowed",
        )}
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-gray-400",
            )}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

