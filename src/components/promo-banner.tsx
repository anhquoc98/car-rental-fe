"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const banners = [
  {
    href: "/san-pham#duong-dai",
    src: "/banner-long-trip.png",
    alt: "Xe SUV cho hành trình đi tỉnh và đường dài",
    eyebrow: "Chủ động mọi hành trình",
    title: "Thuê xe đi tỉnh",
    description: "Thoải mái, an toàn cho chuyến đi dài ngày",
    large: true,
  },
  {
    href: "/san-pham#san-bay",
    src: "/banner-airport.png",
    alt: "Xe sedan đưa đón tại sân bay",
    eyebrow: "Đúng giờ · Tận tâm",
    title: "Đưa đón sân bay",
    description: "Phục vụ cá nhân, gia đình và doanh nghiệp",
  },
  {
    href: "/san-pham#cuoi-hoi",
    src: "/banner-wedding.png",
    alt: "Xe cưới cao cấp tại khách sạn",
    eyebrow: "Trang trọng ngày vui",
    title: "Xe cưới & sự kiện",
    description: "Đội xe lịch sự, đa dạng lựa chọn",
  },
];

export function PromoBanner() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({
      left: slider.clientWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const interval = window.setInterval(() => {
      if (!mobileQuery.matches || reducedMotionQuery.matches) return;

      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % banners.length;
        const slider = sliderRef.current;

        slider?.scrollTo({
          left: slider.clientWidth * nextIndex,
          behavior: "smooth",
        });

        return nextIndex;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider || slider.clientWidth === 0) return;

    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    setActiveIndex(Math.min(index, banners.length - 1));
  };

  return (
    <section aria-label="Dịch vụ thuê xe nổi bật">
      <div className="container-page">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:gap-5 lg:overflow-visible"
        >
          {banners.map((banner) => (
          <Link
            key={banner.href}
            href={banner.href}
            className={
              "group relative isolate min-h-72 w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-brand-blue-dark shadow-sm lg:w-auto " +
              (banner.large ? "lg:row-span-2 lg:min-h-[540px]" : "lg:min-h-0")
            }
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              priority={banner.large}
              sizes={banner.large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 50vw"}
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/55 to-transparent" />
            <div className="relative flex h-full min-h-64 max-w-sm flex-col justify-end p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold-light">{banner.eyebrow}</p>
              <h2 className={"mt-2 font-bold tracking-tight " + (banner.large ? "text-4xl sm:text-5xl" : "text-3xl")}>{banner.title}</h2>
              <p className="mt-3 leading-7 text-blue-50">{banner.description}</p>
              <span className="mt-5 font-semibold text-brand-gold-light">Xem xe phù hợp →</span>
            </div>
          </Link>
          ))}
        </div>

        <div
          className="mt-5 flex items-center justify-center gap-2 lg:hidden"
          aria-label="Chọn banner"
        >
          {banners.map((banner, index) => (
            <button
              key={banner.href}
              type="button"
              onClick={() => goToSlide(index)}
              className={
                "h-2.5 rounded-full transition-all " +
                (activeIndex === index
                  ? "w-8 bg-brand-blue"
                  : "w-2.5 bg-brand-blue/25")
              }
              aria-label={"Xem banner " + (index + 1)}
              aria-current={activeIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
