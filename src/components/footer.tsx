import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-blue-dark to-brand-blue py-12 text-blue-100">
      <div className="container-page grid gap-8 md:grid-cols-2">
        <div>
          <Link
            className="inline-flex rounded-lg bg-white p-2"
            href="/"
            aria-label="AK Car Rental - Trang chủ"
          >
            <Image
              src="/logo_AK.svg"
              alt="AK Car Rental"
              width={127}
              height={79}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-md leading-7">
            Khung website cho thuê xe. Thông tin thương hiệu, pháp lý và liên hệ
            cần được cập nhật trước khi đưa lên môi trường thật.
          </p>
        </div>
        <nav aria-label="Điều hướng cuối trang" className="md:text-right">
          <Link className="hover:text-brand-gold-light hover:underline" href="/san-pham">Sản phẩm</Link><span aria-hidden="true" className="mx-3 text-brand-gold">·</span>
          <Link className="hover:text-brand-gold-light hover:underline" href="/ve-chung-toi">Về chúng tôi</Link><span aria-hidden="true" className="mx-3 text-brand-gold">·</span>
          <Link className="hover:text-brand-gold-light hover:underline" href="/tin-tuc">Tin tức</Link>
        </nav>
      </div>
    </footer>
  );
}
