# car-rental-fe

Frontend Next.js cho website thuê xe ô tô.

## Mục tiêu

- [FACT] Dựng khung frontend trước, chưa triển khai backend.
- [FACT] Dùng Next.js App Router, TypeScript và Tailwind CSS.
- [FACT] Ưu tiên nền tảng SEO để có thể thay UI sau.
- [FACT] Hiện user mới xác nhận 5 trong tổng số 7 trang dự kiến.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Biến môi trường

```bash
NEXT_PUBLIC_SITE_URL=https://ten-mien-that.example
```

Phải cấu hình URL thật trước khi deploy để canonical, sitemap, robots và JSON-LD chính xác.

## Route đã có

- `/`: Trang chủ
- `/san-pham`: Danh sách sản phẩm
- `/san-pham/[slug]`: Chi tiết sản phẩm
- `/ve-chung-toi`: Về chúng tôi
- `/tin-tuc`: Tin tức
- `/robots.txt` và `/sitemap.xml`: endpoint hỗ trợ crawler

## Đọc theo thứ tự

1. `context.md`
2. `glossary.md`
3. `features/website-foundation/overview.md`
4. `decisions/001-seo-first-nextjs-foundation.md`

## Phần chưa xác minh

- [TODO VERIFY] Tên thương hiệu và domain chính thức; `DriveGo` chỉ là placeholder.
- [TODO VERIFY] Hai trang còn lại trong tổng số 7 trang.
- [TODO VERIFY] Backend, quy trình đặt xe, thanh toán, tài khoản và dữ liệu thật.
