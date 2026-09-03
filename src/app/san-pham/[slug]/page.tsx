import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { cars, formatPrice, getCarBySlug } from "@/data/cars";
import { siteConfig } from "@/data/site";

export const dynamicParams = false;
export function generateStaticParams() { return cars.map((car) => ({ slug: car.slug })); }

export async function generateMetadata({ params }: PageProps<"/san-pham/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return { title: "Không tìm thấy xe" };
  return {
    title: "Thuê " + car.name,
    description: car.description,
    alternates: { canonical: "/san-pham/" + car.slug },
    openGraph: { title: "Thuê " + car.name, description: car.description },
  };
}

export default async function CarDetailPage({ params }: PageProps<"/san-pham/[slug]">) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: car.name,
        description: car.description,
        category: car.category,
        offers: { "@type": "Offer", priceCurrency: "VND", price: car.pricePerDay, url: siteConfig.url + "/san-pham/" + car.slug, availability: "https://schema.org/InStock" },
      }} />
      <article className="section-space">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600"><Link className="hover:underline" href="/">Trang chủ</Link> / <Link className="hover:underline" href="/san-pham">Sản phẩm</Link> / <span aria-current="page">{car.name}</span></nav>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-brand-blue/5 font-semibold text-brand-blue/50">Khu vực thư viện hình ảnh</div>
            <div>
              <p className="eyebrow">{car.category}</p><h1 className="heading-1">{car.name}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{car.description}</p>
              <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-brand-green-light/30 bg-brand-green-light/10 p-6">
                <div><dt className="text-sm text-slate-500">Số chỗ</dt><dd className="mt-1 font-bold">{car.seats} chỗ</dd></div>
                <div><dt className="text-sm text-slate-500">Hộp số</dt><dd className="mt-1 font-bold">{car.transmission}</dd></div>
                <div><dt className="text-sm text-slate-500">Nhiên liệu</dt><dd className="mt-1 font-bold">{car.fuel}</dd></div>
                <div><dt className="text-sm text-slate-500">Giá tham khảo</dt><dd className="mt-1 font-bold">{formatPrice(car.pricePerDay)}/ngày</dd></div>
              </dl>
              <p className="mt-6 text-sm leading-6 text-slate-500">Giá và tình trạng xe là dữ liệu mẫu, cần xác nhận từ backend trước khi cho phép đặt xe.</p>
              <Link className="button-primary mt-8" href="/san-pham">Quay lại danh sách</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
