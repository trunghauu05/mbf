# Phụ lục 1: TÍNH NĂNG WEBSITE BÁN THIẾT BỊ ĐIỆN TỬ (E-COMMERCE)

Tài liệu đặc tả yêu cầu tính năng cho dự án thực hành React.

---

## A. NỀN TẢNG WEBSITE E-COMMERCE (Dành cho Khách hàng)

| STT | Module nghiệp vụ | Chi tiết tính năng |
| :--- | :--- | :--- |
| 1 | **Trang chủ & Giao diện tập trung** | - Hiển thị Banner quảng cáo, chương trình khuyến mãi lớn.<br>- Trưng bày các sản phẩm nổi bật, sản phẩm bán chạy, sản phẩm mới ra mắt.<br>- Hiển thị danh mục sản phẩm (Điện thoại, Laptop, Phụ kiện...).<br>- Giao diện thân thiện, tương thích với cả máy tính và điện thoại (Responsive). |
| 2 | **Quản lý Tài khoản (User Profile)** | - Đăng ký, đăng nhập (bằng Email/SĐT hoặc Google/Facebook).<br>- Quản lý thông tin cá nhân, thay đổi mật khẩu.<br>- Sổ địa chỉ (Lưu nhiều địa chỉ nhận hàng để chọn nhanh khi thanh toán).<br>- Quên mật khẩu & Khôi phục mật khẩu. |
| 3 | **Danh mục & Lọc sản phẩm** | - Hiển thị sản phẩm theo từng danh mục cụ thể.<br>- Bộ lọc thông minh (Lọc theo mức giá, thương hiệu, hệ điều hành, RAM, chip xử lý...).<br>- Sắp xếp sản phẩm (Giá từ thấp-cao, đánh giá cao, bán chạy nhất). |
| 4 | **Chi tiết sản phẩm** | - Hiển thị bộ sưu tập hình ảnh, video sản phẩm.<br>- Bảng thông số kỹ thuật chi tiết của thiết bị điện tử.<br>- Hiển thị giá bán, giá khuyến mãi, trạng thái tồn kho (Còn hàng/Hết hàng).<br>- Gợi ý các sản phẩm tương tự hoặc phụ kiện mua kèm. |
| 5 | **Giỏ hàng (Shopping Cart)** | - Thêm sản phẩm vào giỏ hàng.<br>- Thay đổi số lượng, xóa sản phẩm khỏi giỏ.<br>- Tự động tính toán tổng tiền, hiển thị số tiền tiết kiệm được.<br>- Áp dụng mã giảm giá/Voucher. |
| 6 | **Thanh toán & Đặt hàng (Checkout)** | - Xác nhận địa chỉ giao hàng và thông tin người nhận.<br>- Chọn phương thức giao hàng (Tiêu chuẩn, Hỏa tốc).<br>- Chọn phương thức thanh toán (COD, Chuyển khoản ngân hàng, Ví điện tử, Thẻ tín dụng).<br>- Xác nhận và xuất biên lai đặt hàng thành công. |
| 7 | **Quản lý Đơn hàng** | - Tra cứu danh sách lịch sử đơn hàng đã đặt.<br>- Theo dõi trạng thái đơn hàng (Chờ xác nhận -> Đang giao -> Hoàn thành).<br>- Hỗ trợ yêu cầu hủy đơn hàng (khi chưa đóng gói) hoặc yêu cầu trả hàng/hoàn tiền. |
| 8 | **Đánh giá & Bình luận (Review)** | - Cho phép khách hàng đánh giá sao (1-5 sao) sau khi nhận hàng.<br>- Viết nhận xét, đính kèm hình ảnh/video thực tế về sản phẩm.<br>- Thảo luận, đặt câu hỏi (Q&A) trực tiếp trên trang sản phẩm. |
| 9 | **Sản phẩm Yêu thích (Wishlist)** | - Lưu lại các sản phẩm ưng ý để theo dõi giá hoặc mua sau.<br>- Quản lý, xóa sản phẩm khỏi danh sách yêu thích. |
| 10 | **Tìm kiếm thông minh** | - Thanh tìm kiếm hỗ trợ tự động gợi ý (Auto-suggest) khi gõ tên sản phẩm.<br>- Tìm kiếm theo mã sản phẩm (SKU) hoặc tên thương hiệu. |
| 11 | **Hỗ trợ & Chính sách** | - Tích hợp Live Chat (Zalo/Messenger/Chatbot) để tư vấn trực tuyến.<br>- Hiển thị các trang thông tin: Chính sách bảo hành, chính sách đổi trả, hướng dẫn mua trả góp. |

---

## B. NỀN TẢNG WEB ADMIN CMS (Dành cho Quản trị viên & Nhân viên)

| STT | Module nghiệp vụ | Chi tiết tính năng |
| :--- | :--- | :--- |
| 1 | **Trang điều hành (Dashboard)** | - Thống kê doanh thu theo ngày, tuần, tháng (Biểu đồ trực quan).<br>- Thống kê tổng số đơn hàng, tỷ lệ chuyển đổi.<br>- Cảnh báo các sản phẩm sắp hết hàng.<br>- Theo dõi lượng khách hàng truy cập và đăng ký mới. |
| 2 | **Quản lý Sản phẩm** | - Thêm mới, chỉnh sửa, xóa (hoặc ẩn) sản phẩm.<br>- Cập nhật giá bán, giá gốc, hình ảnh đại diện và thư viện ảnh.<br>- Cập nhật thông số kỹ thuật chi tiết cho đồ điện tử.<br>- Quản lý trạng thái tồn kho thực tế. |
| 3 | **Quản lý Danh mục (Categories)** | - Tạo cây danh mục đa cấp (Ví dụ: Laptop -> Laptop Gaming / Laptop Văn phòng).<br>- Cập nhật hình ảnh/icon cho từng danh mục. |
| 4 | **Quản lý Đơn hàng** | - Tiếp nhận đơn hàng mới từ hệ thống.<br>- Duyệt đơn, thay đổi trạng thái (Đã xác nhận, Đang đóng gói, Đã giao cho ĐVVC).<br>- In hóa đơn, in phiếu giao hàng.<br>- Xử lý các yêu cầu hủy đơn hoặc hoàn trả từ khách hàng. |
| 5 | **Quản lý Khách hàng** | - Quản lý danh sách tài khoản người dùng đăng ký.<br>- Xem chi tiết thông tin và lịch sử mua hàng của từng khách.<br>- Khóa/Mở khóa tài khoản đối với các tài khoản vi phạm. |
| 6 | **Quản lý Đánh giá & Bình luận** | - Tiếp nhận bình luận, câu hỏi của khách hàng trên sản phẩm.<br>- Nhân viên vào trả lời/tư vấn trực tiếp cho các câu hỏi.<br>- Ẩn/Xóa các bình luận spam hoặc sử dụng từ ngữ không phù hợp. |
| 7 | **Quản lý Khuyến mãi (Marketing)** | - Tạo mã giảm giá (Voucher) theo % hoặc số tiền cố định.<br>- Cài đặt điều kiện sử dụng mã (Đơn tối thiểu, Số lượt dùng, Thời hạn).<br>- Thiết lập các chương trình Flash Sale cho một số sản phẩm nhất định. |
| 8 | **Quản lý Nội dung (Banner/Blog)** | - Đăng tải và thay đổi Banner quảng cáo trên Trang chủ.<br>- Viết bài đánh giá công nghệ, tin tức ra mắt sản phẩm mới (Blog/News). |
| 9 | **Quản lý Kho hàng & Nhà cung cấp** | - Theo dõi phiếu nhập/xuất kho.<br>- Cập nhật thông tin các hãng sản xuất, nhà phân phối. |
| 10 | **Quản trị hệ thống (Phân quyền)** | - Quản lý tài khoản nhân viên vào hệ thống CMS.<br>- Phân quyền chi tiết (Ví dụ: Nhân viên kho chỉ xem Kho; Nhân viên Sale chỉ xử lý Đơn hàng).<br>- Cài đặt thông tin chung (Logo website, phí ship mặc định, v.v.). |
