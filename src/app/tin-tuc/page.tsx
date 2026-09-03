import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức và kinh nghiệm thuê xe",
  description: "Cập nhật kinh nghiệm thuê xe tự lái, hướng dẫn chuẩn bị hành trình và tin tức ô tô.",
  alternates: { canonical: "/tin-tuc" },
};

const posts = [
  ["Kinh nghiệm thuê xe tự lái lần đầu", "Những giấy tờ và bước kiểm tra nên chuẩn bị trước khi nhận xe."],
  ["Cách chọn xe phù hợp cho chuyến đi gia đình", "Gợi ý chọn số chỗ, khoang hành lý và tiện nghi theo hành trình."],
  ["Checklist kiểm tra xe trước khi khởi hành", "Các hạng mục cơ bản giúp chuyến đi an toàn và chủ động hơn."],
];

export default function NewsPage() {
  return (
    <>
      <section className="page-hero"><div className="container-page"><p className="eyebrow">Tin tức</p><h1 className="heading-1">Kiến thức hữu ích cho người thuê xe</h1><p className="mt-5 max-w-2xl leading-7 text-slate-600">Danh sách bài viết mẫu; trang chi tiết tin tức chưa nằm trong phạm vi đã xác nhận.</p></div></section>
      <section className="section-space"><div className="container-page card-grid">{posts.map(([title, description], index) => <article key={title} className="rounded-2xl border border-brand-blue/15 p-6 transition hover:border-brand-green-light"><p className="text-sm font-semibold text-brand-green">Bài viết {String(index + 1).padStart(2, "0")}</p><h2 className="mt-3 text-xl font-bold text-brand-blue-dark">{title}</h2><p className="mt-3 leading-7 text-slate-600">{description}</p><p className="mt-5 text-sm text-slate-400">Nội dung chi tiết sẽ cập nhật sau</p></article>)}</div></section>
    </>
  );
}
