"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const totalImages = 9; // Total number of images

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === totalImages ? 1 : (prev || 0) + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 1 ? totalImages : (prev || 0) - 1));
  };

  return (
    <section className="relative w-full bg-emerald-950 py-20 font-family-nunito">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-linear-to-r from-white to-white bg-clip-text text-transparent">
          GALERIA
        </h2>

        <div className="max-w-7xl mx-auto">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              } as React.CSSProperties
            }
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-12" // Space for pagination dots
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative aspect-4/5 w-full overflow-hidden group cursor-pointer"
                  onClick={() => openImage(index)}
                >
                  <Image
                    src={`/s${index}.jpg`}
                    alt={`Gallery image ${index}`}
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Simple Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] aspect-3/2">
            <Image
              src={`/s${selectedImage}.jpg`}
              alt={`Gallery image ${selectedImage}`}
              fill
              className="object-contain"
              priority
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white">
              {selectedImage} / {totalImages}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
