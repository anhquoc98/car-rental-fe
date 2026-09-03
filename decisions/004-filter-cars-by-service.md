# Quyết định

Thay danh sách 7 section dịch vụ bằng một danh sách xe có bộ lọc dạng tab.

## Bối cảnh

- Vấn đề đang gặp: các nhãn “Dịch vụ 01, 02…” và nhiều section liên tiếp làm trang dài, khó hiểu.
- Lựa chọn đang cân nhắc: giữ danh sách chia section, hoặc mặc định hiển thị tất cả và lọc khi người dùng chọn loại.

## Lý do chọn

- Trạng thái mặc định cho người dùng thấy toàn bộ đội xe.
- Mỗi lần chọn loại chỉ hiển thị 3 xe liên quan, giảm nhiễu nội dung.
- Hash URL từ banner vẫn có thể kích hoạt đúng loại dịch vụ.

## Hệ quả

- Lợi ích: thao tác gọn hơn và bỏ được thứ tự dịch vụ không có ý nghĩa nghiệp vụ.
- Đánh đổi: bộ lọc chạy phía client; HTML ban đầu vẫn chứa danh sách “Tất cả”.
- Việc phải theo dõi thêm: đồng bộ bộ lọc với query parameter nếu backend hỗ trợ tìm kiếm.

## Liên kết

- Component: `src/components/car-service-filter.tsx`.
- Trang: `src/app/san-pham/page.tsx`.
- Decision trước: `decisions/002-group-cars-by-rental-service.md`.
