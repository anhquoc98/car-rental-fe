import type { Metadata } from "next";
import Link from "next/link";
import { CarCard } from "@/components/car-card";
import { JsonLd } from "@/components/json-ld";
import { PromoBanner } from "@/components/promo-banner";
import { cars } from "@/data/cars";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Thuê xe ô tô tự lái an toàn, nhanh chóng",
  description:
    "Tìm và thuê xe ô tô tự lái phù hợp cho mọi hành trình. Giá minh bạch, thủ tục rõ ràng và hỗ trợ tận tâm.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, description: siteConfig.description }} />
      <PromoBanner />
      <section className="section-space" aria-labelledby="featured-cars">
        <div className="container-page">
          <div className="section-heading">
            <div><p className="eyebrow">Xe nổi bật</p><h2 id="featured-cars" className="heading-2">Lựa chọn phù hợp cho bạn</h2></div>
            <Link className="text-link" href="/san-pham">Xem tất cả xe →</Link>
          </div>
          <div className="card-grid">{cars.slice(0, 3).map((car) => <CarCard key={car.slug} car={car} />)}</div>
        </div>
      </section>
      <section className="border-y border-brand-green-light/30 bg-brand-green-light/10 section-space">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            ["01", "Thông tin rõ ràng", "Giá thuê và đặc điểm xe được trình bày minh bạch."],
            ["02", "Đặt xe thuận tiện", "Chọn xe và gửi yêu cầu chỉ trong vài bước đơn giản."],
            ["03", "Hỗ trợ tận tâm", "Đội ngũ sẵn sàng hỗ trợ trước và trong hành trình."],
          ].map(([number, title, description]) => (
            <article key={number}><span className="text-sm font-bold text-brand-green">{number}</span><h2 className="mt-3 text-xl font-bold text-brand-blue-dark">{title}</h2><p className="mt-2 leading-7 text-slate-600">{description}</p></article>
          ))}
        </div>
      </section>
    </>
  );
}
