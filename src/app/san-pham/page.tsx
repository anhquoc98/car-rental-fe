import type { Metadata } from "next";
import { CarServiceFilter } from "@/components/car-service-filter";
import { cars } from "@/data/cars";
import { rentalServices } from "@/data/service-types";

export const metadata: Metadata = {
  title: "Danh sách xe cho thuê",
  description: "Khám phá danh sách xe ô tô tự lái theo loại xe, số chỗ và mức giá phù hợp.",
  alternates: { canonical: "/san-pham" },
};

export default function CarsPage() {
  return (
    <>
      <section className="page-hero"><div className="container-page"><p className="eyebrow">Danh sách xe</p><h1 className="heading-1">Chọn xe cho hành trình của bạn</h1>
      </div></section>
      <CarServiceFilter cars={cars} services={rentalServices} />
    </>
  );
}
