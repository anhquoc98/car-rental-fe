import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Tìm hiểu định hướng, giá trị và cam kết dịch vụ thuê xe ô tô của DriveGo.",
  alternates: { canonical: "/ve-chung-toi" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container-page"><p className="eyebrow">Về chúng tôi</p><h1 className="heading-1">Giúp việc thuê xe trở nên đơn giản hơn</h1></div></section>
      <section className="section-space"><div className="container-page grid gap-12 lg:grid-cols-2"><div><h2 className="heading-2">Câu chuyện thương hiệu</h2><p className="mt-5 leading-8 text-slate-600">Đây là nội dung giữ chỗ cho câu chuyện doanh nghiệp, kinh nghiệm vận hành và khu vực phục vụ. Hãy thay bằng thông tin đã được xác minh trước khi xuất bản.</p></div><div className="rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 text-white"><h2 className="text-2xl font-bold text-brand-gold-light">Giá trị cốt lõi</h2><ul className="mt-6 space-y-4 text-blue-100"><li>Minh bạch trong thông tin và chi phí</li><li>An toàn trong quy trình giao nhận xe</li><li>Tận tâm trong từng điểm chạm dịch vụ</li></ul></div></div></section>
    </>
  );
}
