import Link from "next/link";
import type { Car } from "@/data/cars";
import { formatPrice } from "@/data/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-blue/15 bg-white shadow-sm transition hover:border-brand-green-light hover:shadow-md">
      <div className="flex aspect-[16/9] items-center justify-center bg-brand-blue/5 text-sm font-semibold text-brand-blue/50" aria-hidden="true">Khu vực hình ảnh xe</div>
      <div className="p-6">
        <p className="text-sm font-semibold text-brand-green">{car.category}</p>
        <h2 className="mt-2 text-xl font-bold text-brand-blue-dark"><Link className="hover:underline" href={"/san-pham/" + car.slug}>{car.name}</Link></h2>
        <p className="mt-3 text-sm text-slate-600">{car.seats} chỗ · {car.transmission} · {car.fuel}</p>
        <p className="mt-5 font-bold text-brand-blue-dark">{formatPrice(car.pricePerDay)} <span className="text-sm font-normal text-slate-500">/ ngày</span></p>
        <Link className="mt-5 inline-block text-link" href={"/san-pham/" + car.slug}>Xem chi tiết →</Link>
      </div>
    </article>
  );
}
