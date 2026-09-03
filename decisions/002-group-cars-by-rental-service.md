# Quyết định

Tổ chức danh sách xe theo 7 loại dịch vụ thuê xe, mỗi loại có 3 xe mẫu và một anchor URL riêng trên trang Sản phẩm.

## Bối cảnh

- Vấn đề đang gặp: danh sách ban đầu chỉ có 3 xe chung, chưa thể hiện các nhu cầu thuê xe khác nhau.
- Lựa chọn đang cân nhắc: tiếp tục một danh sách phẳng, hoặc nhóm theo mục đích thuê xe.

## Lý do chọn

- Nhóm theo nhu cầu giúp người dùng tìm xe phù hợp nhanh hơn.
- Anchor cho từng loại cho phép banner và điều hướng liên kết trực tiếp đến đúng nội dung.
- Dữ liệu loại dịch vụ và dữ liệu xe được tách riêng để dễ thay bằng API sau này.

## Hệ quả

- Lợi ích: trang Sản phẩm có 7 section rõ ràng và 21 URL chi tiết xe được prerender.
- Đánh đổi: giá, dòng xe và phân loại hiện vẫn là dữ liệu mẫu.
- Việc phải theo dõi thêm: xác nhận catalog, hình xe, giá và quy tắc một xe có thể thuộc nhiều dịch vụ.

## Liên kết

- Note dự án liên quan: `features/website-foundation/overview.md`.
- File dữ liệu: `src/data/cars.ts`, `src/data/service-types.ts`.
