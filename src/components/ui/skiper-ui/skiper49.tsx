"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, Star, CheckCircle, Quote, ExternalLink, Play, Pause } from "lucide-react";
import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "../../../lib/utils";
import { GoogleReview } from "../../../types";

interface ReviewCardCarouselProps {
  reviews: GoogleReview[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  onSelectReview?: (review: GoogleReview) => void;
}

export const Carousel_003: React.FC<ReviewCardCarouselProps> = ({
  reviews,
  className,
  showPagination = true,
  showNavigation = true,
  loop = true,
  autoplay = true,
  autoplayDelay = 2500,
  onSelectReview,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);

  const handleReviewClick = (review: GoogleReview) => {
    setSelectedReviewId(review.id);
    // User requested: keep animation continuing, do not stop on hovering until someone clicks on a particular review
    if (swiperRef.current?.autoplay?.running) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    }
    if (onSelectReview) {
      onSelectReview(review);
    }
  };

  const togglePlayPause = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  const css = `
  .Carousal_003_Reviews {
    width: 100%;
    padding-top: 20px !important;
    padding-bottom: 55px !important;
  }
  
  .Carousal_003_Reviews .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    transition: all 0.4s ease;
  }

  @media (min-width: 640px) {
    .Carousal_003_Reviews .swiper-slide {
      width: 360px;
    }
  }

  @media (min-width: 1024px) {
    .Carousal_003_Reviews .swiper-slide {
      width: 390px;
    }
  }

  .Carousal_003_Reviews .swiper-pagination-bullet {
    background-color: #C9A86A !important;
    opacity: 0.35;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }

  .Carousal_003_Reviews .swiper-pagination-bullet-active {
    opacity: 1;
    width: 24px;
    border-radius: 9999px;
    background-color: #C9A86A !important;
  }

  .Carousal_003_Reviews .swiper-3d .swiper-slide-shadow-left,
  .Carousal_003_Reviews .swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(11, 13, 18, 0.75), rgba(11, 13, 18, 0.2)) !important;
    border-radius: 24px;
  }
`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("relative w-full max-w-6xl mx-auto px-2 sm:px-4", className)}
    >
      <style>{css}</style>

      {/* Floating Status & Autoplay Toggle Controls */}
      <div className="flex items-center justify-between px-2 mb-3">
        <div className="flex items-center gap-2 text-xs text-[#9AA3B4]">
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                isPlaying ? "bg-[#C9A86A]" : "bg-zinc-500"
              )}
            />
            <span
              className={cn(
                "relative inline-flex rounded-full h-2 w-2",
                isPlaying ? "bg-[#C9A86A]" : "bg-zinc-500"
              )}
            />
          </span>
          <span className="font-semibold text-white/80">
            {isPlaying ? "Continuous 3D Slide Active" : "Paused (Click to Resume)"}
          </span>
        </div>

        <button
          onClick={togglePlayPause}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#E5C58E] bg-[#161B26] border border-[#C9A86A]/30 hover:bg-[#1C2230] transition-colors"
          title={isPlaying ? "Pause auto-slide" : "Resume auto-slide"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-[#C9A86A]" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#C9A86A]" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full relative"
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={0}
          // CRITICAL: User requirement:
          // "keep the animation (sliding animation) continue it should not stop hovering until any clicks on a particular review"
          autoplay={
            autoplay
              ? {
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false, // Does NOT stop on hover! Continues sliding continuously!
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 28,
            stretch: 0,
            depth: 130,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }
              : false
          }
          className="Carousal_003_Reviews"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-auto">
              <div
                onClick={() => handleReviewClick(review)}
                className={cn(
                  "group cursor-pointer relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-[24px] border transition-all duration-300 select-none overflow-hidden",
                  selectedReviewId === review.id
                    ? "bg-[#181E2C] border-[#C9A86A] shadow-[0_20px_50px_rgba(201,168,106,0.25)] ring-1 ring-[#C9A86A]"
                    : "bg-[#131722]/95 backdrop-blur-md border-white/10 hover:border-[#C9A86A]/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                )}
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A86A]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C9A86A]/10 transition-colors" />

                {/* Card Top: Face Avatar + Name & Rating */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* AI Face Portrait Image */}
                      <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#C9A86A] p-0.5 bg-[#0B0D12] shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                        {review.avatarImage ? (
                          <img
                            src={review.avatarImage}
                            alt={review.reviewerName}
                            className="w-full h-full object-cover rounded-full filter contrast-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-[#1C2230] text-[#E5C58E] flex items-center justify-center font-bold text-sm">
                            {review.reviewerName.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        {/* Verified Check Badge */}
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#1B633B] text-white rounded-full flex items-center justify-center border border-[#0B0D12]">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="min-w-0">
                        <h4 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#E5C58E] transition-colors truncate">
                          {review.reviewerName}
                        </h4>
                        <p className="text-xs text-[#9AA3B4] truncate">
                          {review.role || "Client"} • {review.location || "Agra"}
                        </p>
                      </div>
                    </div>

                    {/* Google G Logo Badge */}
                    <div className="flex flex-col items-end shrink-0">
                      <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                        G
                      </div>
                    </div>
                  </div>

                  {/* 5 Stars + Architectural Discipline Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center text-[#C9A86A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C9A86A] text-[#C9A86A]" />
                      ))}
                    </div>
                    {review.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A86A] bg-[#C9A86A]/10 border border-[#C9A86A]/30 px-2.5 py-0.5 rounded-full truncate max-w-[170px]">
                        {review.tag}
                      </span>
                    )}
                  </div>

                  {/* Review Quote Text */}
                  <div className="relative">
                    <Quote className="w-5 h-5 text-[#C9A86A]/20 absolute -top-1 -left-1 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-[#CAD2E0] leading-relaxed relative z-10 pl-2 line-clamp-4">
                      "{review.text}"
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Verified Footer & Click Hint */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#828B9C]">
                  <span className="font-medium text-[#C9A86A] flex items-center gap-1">
                    <span>5.0 Verified Review</span>
                  </span>
                  <span className="text-white/60 group-hover:text-[#E5C58E] transition-colors flex items-center gap-1 font-semibold">
                    <span>Read Full</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        {showNavigation && (
          <>
            <button
              className="swiper-button-prev-custom absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#131722]/90 border border-white/15 text-white flex items-center justify-center hover:bg-[#C9A86A] hover:text-[#0B0D12] hover:border-[#C9A86A] transition-all shadow-xl backdrop-blur-md"
              aria-label="Previous review"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              className="swiper-button-next-custom absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#131722]/90 border border-white/15 text-white flex items-center justify-center hover:bg-[#C9A86A] hover:text-[#0B0D12] hover:border-[#C9A86A] transition-all shadow-xl backdrop-blur-md"
              aria-label="Next review"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 as Skiper49 };
export default Carousel_003;
