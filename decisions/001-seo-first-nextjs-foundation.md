# Quyết định

Tạo frontend bằng Next.js App Router, TypeScript và Tailwind CSS; dùng route riêng cho mỗi sản phẩm thay vì chỉ hiển thị chi tiết bằng modal.

## Bối cảnh

- Vấn đề đang gặp: cần project mới, chưa có backend/UI cuối cùng nhưng yêu cầu nền tảng SEO tốt.
- Lựa chọn đang cân nhắc: chi tiết xe chỉ qua modal, hoặc có URL riêng theo slug.

## Lý do chọn

- Route riêng cung cấp title, description, canonical và structured data theo từng xe.
- Server Component và prerendering tạo HTML dễ crawl mà không cần backend trong giai đoạn đầu.
- Component/data tách riêng giúp thay UI và nối API sau này.

## Hệ quả

- Lợi ích: có URL index được, sitemap, robots và metadata ngay từ scaffold.
- Đánh đổi: modal nếu cần sẽ là enhancement UI bổ sung, không thay thế route chuẩn.
- Việc phải theo dõi thêm: domain, thương hiệu, dữ liệu xe thật và hai trang chưa xác nhận.

## Liên kết

- Note dự án liên quan: `features/website-foundation/overview.md`.
