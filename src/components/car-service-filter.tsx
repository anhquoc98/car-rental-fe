"use client";

import { useEffect, useState } from "react";
import { CarCard } from "@/components/car-card";
import type { Car, ServiceType } from "@/data/cars";
import type { RentalService } from "@/data/service-types";

type ActiveFilter = "all" | ServiceType;

export function CarServiceFilter({
  cars,
  services,
}: {
  cars: Car[];
  services: RentalService[];
}) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");

  useEffect(() => {
    const syncFilterWithHash = () => {
      const hash = window.location.hash.slice(1);
      const matchedService = services.find((service) => service.id === hash);

      if (matchedService) {
        setActiveFilter(matchedService.id);
      }
    };

    syncFilterWithHash();
    window.addEventListener("hashchange", syncFilterWithHash);

    return () => window.removeEventListener("hashchange", syncFilterWithHash);
  }, [services]);

  const visibleCars =
    activeFilter === "all"
      ? cars
      : cars.filter((car) => car.serviceType === activeFilter);
  const activeService = services.find(
    (service) => service.id === activeFilter,
  );

  const selectFilter = (filter: ActiveFilter) => {
    setActiveFilter(filter);

    const nextUrl =
      filter === "all"
        ? window.location.pathname
        : window.location.pathname + "#" + filter;
    window.history.replaceState(null, "", nextUrl);
  };

  return (
    <>
      <div className="sticky top-20 z-30 border-b border-brand-blue/10 bg-white/95 py-4 backdrop-blur">
        <div
          className="container-page flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Lọc theo loại dịch vụ thuê xe"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "all"}
            onClick={() => selectFilter("all")}
            className={
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition " +
              (activeFilter === "all"
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-brand-blue/20 text-brand-blue-dark hover:border-brand-green hover:bg-brand-green-light/10")
            }
          >
            Tất cả
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === service.id}
              onClick={() => selectFilter(service.id)}
              className={
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition " +
                (activeFilter === service.id
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-brand-blue/20 text-brand-blue-dark hover:border-brand-green hover:bg-brand-green-light/10")
              }
            >
              {service.shortName}
            </button>
          ))}
        </div>
      </div>

      <section className="section-space" aria-live="polite">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {activeService ? "Loại xe đang chọn" : "Toàn bộ đội xe"}
              </p>
              <h2 className="heading-2">
                {activeService?.name ?? "Tất cả xe cho thuê"}
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                {activeService?.description ??
                  "Khám phá đầy đủ các lựa chọn xe theo nhu cầu, số chỗ và mức giá phù hợp."}
              </p>
            </div>
            <p className="font-semibold text-brand-green">
              {visibleCars.length} xe
            </p>
          </div>
          <div className="card-grid">
            {visibleCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
