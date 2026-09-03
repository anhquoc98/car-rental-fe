# Website foundation

Status: `in-progress`

## 1. Mục tiêu

Tạo khung frontend thuê xe có semantic HTML, responsive layout và nền tảng technical SEO để thay UI/nối backend sau.

## 2. Entry point

- `src/app/layout.tsx`: root layout và metadata mặc định.
- `src/app/page.tsx`: Trang chủ.

## 3. Input / output

- Input hiện tại: 21 xe mẫu trong `src/data/cars.ts` và 7 loại dịch vụ trong `src/data/service-types.ts`.
- Output: HTML prerendered cho các route đã xác nhận, `robots.txt`, `sitemap.xml` và JSON-LD.

## 4. Flow xử lý

1. App Router ánh xạ folder trong `src/app` thành URL.
2. Trang chủ render banner collage từ ba ảnh trong `public/`.
3. Trang danh sách nhóm xe theo 7 loại dịch vụ, mỗi loại có 3 xe mẫu.
4. `generateStaticParams` tạo trước các trang chi tiết theo slug.
5. Metadata tĩnh/động cung cấp title, description và canonical.
6. Sitemap liệt kê route tĩnh và toàn bộ route sản phẩm.

## 5. File chính

- `src/app/layout.tsx`
- `src/app/san-pham/page.tsx`
- `src/app/san-pham/[slug]/page.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/data/cars.ts`
- `src/data/service-types.ts`
- `src/components/promo-banner.tsx`

## 6. Business rules

- [FACT] Chưa có backend và chưa có chức năng đặt xe thật.
- [INFERRED] Mỗi xe cần một slug duy nhất và URL riêng để hỗ trợ SEO.
- [FACT] Mỗi loại dịch vụ hiện có đúng 3 xe mẫu.
- [TODO VERIFY] Giá, tình trạng xe và quy trình thuê thực tế.

## 7. Rủi ro

- Domain placeholder làm canonical sai nếu không cấu hình `NEXT_PUBLIC_SITE_URL` khi deploy.
- Nội dung/giá mẫu không được dùng như thông tin thương mại thật.
- SEO nội dung chưa hoàn chỉnh cho tới khi có keyword, địa bàn và brand chính thức.

## 8. Phần chưa xác minh

- Hai trang còn lại trong tổng số 7 trang.
- Có cần route chi tiết bài viết hay không.
- Có cần modal chi tiết sản phẩm bên cạnh route độc lập hay không.
