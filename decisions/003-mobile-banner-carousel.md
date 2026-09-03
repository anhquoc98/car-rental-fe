# Quyết định

Giữ banner collage trên desktop và chuyển thành carousel tự động trên mobile/tablet.

## Bối cảnh

- Vấn đề đang gặp: ba banner xếp dọc làm trang chủ trên điện thoại quá dài.
- Lựa chọn đang cân nhắc: tiếp tục xếp dọc, ẩn bớt banner, hoặc dùng carousel.

## Lý do chọn

- Carousel giữ đủ ba nội dung nhưng chỉ chiếm chiều cao của một banner.
- Người dùng có thể vuốt hoặc chọn qua chấm chỉ báo.
- Autoplay 4 giây nằm trong khoảng 3–5 giây theo yêu cầu.

## Hệ quả

- Lợi ích: giao diện mobile gọn và gần với trải nghiệm banner thương mại.
- Đánh đổi: component banner cần chạy phía client để điều khiển autoplay.
- Việc phải theo dõi thêm: đo tỷ lệ tương tác để điều chỉnh tốc độ sau khi có analytics.

## Quy tắc hành vi

- Chỉ autoplay khi viewport nhỏ hơn `1024px`.
- Tự đổi banner sau mỗi `4 giây`.
- Dừng animation tự động nếu hệ điều hành bật `prefers-reduced-motion`.
- Desktop từ `1024px` giữ bố cục collage.

## Liên kết

- Component: `src/components/promo-banner.tsx`.
