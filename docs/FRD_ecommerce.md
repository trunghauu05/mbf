# TÀI LIỆU PHÂN TÍCH CHỨC NĂNG (FRD)
**Dự án:** Website Bán Thiết Bị Điện Tử (E-Commerce)

---

## PHÂN HỆ 1: QUẢN LÝ SẢN PHẨM VÀ DANH MỤC (PRODUCT & CATEGORY)

### 1. Mục tiêu chức năng
Xây dựng chức năng quản lý danh sách các thiết bị điện tử (Laptop, Điện thoại, Phụ kiện...) và phân loại chúng theo danh mục. 
Khách hàng có thể tra cứu nhanh thông tin, thông số kỹ thuật và hình ảnh của thiết bị để ra quyết định mua hàng.

### 2. Đối tượng sử dụng
*   **Web Admin:** Quản trị viên, Nhân viên Kho/Sản phẩm.
*   **Website (Frontend):** Khách hàng mua sắm, Khách truy cập ẩn danh.

### 3. Quy trình nghiệp vụ
**Web Admin**
Đăng nhập 
↓ 
Tạo Danh mục (Category)
↓ 
Thêm Sản phẩm mới (Nhập thông số, upload hình ảnh)
↓ 
Lưu dữ liệu, Đăng bán (Publish)
↓ 
Hiển thị trên Website

**Website Khách hàng**
Mở trang chủ Website
↓ 
Chọn Danh mục (VD: Laptop) hoặc Gõ Tìm kiếm
↓ 
Xem danh sách sản phẩm
↓ 
Lọc theo giá / Hãng sản xuất
↓ 
Xem chi tiết sản phẩm (Cấu hình, giá bán)

### 4. Chức năng Web Admin
**4.1 Quản lý Danh mục (Categories)**
*   Xem danh sách, Thêm mới, Sửa, Xóa (Soft delete).
*   Sắp xếp thứ tự hiển thị danh mục trên menu.

**4.2 Quản lý Sản phẩm (Products)**
*   Xem danh sách, Thêm mới, Chỉnh sửa, Xóa.
*   Thông tin quản lý:

| Trường | Bắt buộc | Ghi chú |
| :--- | :---: | :--- |
| Mã SP (SKU) | Có | Duy nhất |
| Tên sản phẩm | Có | VD: Macbook Pro M3 |
| Danh mục | Có | Dropdown chọn từ Category |
| Giá bán (Price) | Có | > 0 |
| Giá khuyến mãi | Không | Nhỏ hơn Giá bán |
| Hình ảnh (Images) | Có | Hình đại diện & Thư viện ảnh |
| Thông số kỹ thuật | Có | RAM, Chip, Màn hình... |
| Trạng thái | Có | Đang bán / Ngừng kinh doanh |

### 5. Chức năng trên Website (Khách hàng)
**Màn hình Danh sách Sản phẩm**
*   Bộ lọc (Filter): Lọc theo Khoảng giá, Hãng sản xuất.
*   Sắp xếp: Giá tăng/giảm, Mới nhất, Bán chạy.
*   Card Sản phẩm: Hiển thị Hình ảnh, Tên, Giá bán, Nút "Thêm vào giỏ".

**Màn hình Chi tiết Sản phẩm**
*   Slider hình ảnh sản phẩm.
*   Khối thông tin giá cả, khuyến mãi.
*   Bảng thông số kỹ thuật (Cấu hình máy).
*   Mô tả chi tiết bài viết.
*   Nút "Thêm vào giỏ hàng" / "Mua ngay".

### 6. Luồng xử lý
Quản trị tạo SP -> Khai báo thông số -> Cập nhật kho -> Khách hàng tìm kiếm -> Xem chi tiết.

### 7. Validation
*   **Danh mục:** Tên danh mục không được để trống.
*   **Sản phẩm:** 
    * Tên SP tối thiểu 10 ký tự.
    * Mã SKU không được trùng lặp.
    * Giá bán phải là số nguyên dương lớn hơn 0.
    * Phải có ít nhất 1 hình ảnh đại diện (Định dạng JPG/PNG/WEBP, < 5MB).

### 8. Thông báo lỗi
| Mã | Nội dung |
| :--- | :--- |
| ERR_PROD_001 | Chưa nhập tên sản phẩm |
| ERR_PROD_002 | Mã SKU đã tồn tại trong hệ thống |
| ERR_PROD_003 | Giá bán không hợp lệ |
| ERR_PROD_004 | Vui lòng tải lên ít nhất 1 hình ảnh đại diện |

### 9. Phân quyền
| Chức năng | Admin | NV Sản phẩm | Khách hàng |
| :--- | :---: | :---: | :---: |
| Thêm/Sửa/Xóa Sản phẩm | ✔ | ✔ | ✘ |
| Xem danh sách SP Admin | ✔ | ✔ | ✘ |
| Xem SP trên Website | ✔ | ✔ | ✔ |

### 10. API đề xuất
*   `GET /api/categories`
*   `GET /api/products` (Hỗ trợ query phân trang, filter)
*   `GET /api/products/{id}`
*   `POST /api/products`
*   `PUT /api/products/{id}`
*   `DELETE /api/products/{id}`

### 11. Thiết kế CSDL
**Bảng CATEGORY**
`id` (bigint), `name` (varchar), `slug` (varchar), `sort_order` (int), `status` (tinyint)

**Bảng PRODUCT**
`id` (bigint), `category_id` (bigint), `sku` (varchar 50), `name` (nvarchar 200), `price` (decimal), `discount_price` (decimal), `description` (text), `stock_quantity` (int), `status` (tinyint)

**Bảng PRODUCT_IMAGE**
`id`, `product_id`, `image_url`, `is_thumbnail`

*Quan hệ: CATEGORY (1) ------ (N) PRODUCT (1) ------ (N) PRODUCT_IMAGE*

### 12. Tiêu chí nghiệm thu (UAT)
*   [ ] Admin tạo sản phẩm mới thành công, tải lên được nhiều ảnh.
*   [ ] Không cho phép tạo trùng mã SKU.
*   [ ] Khách hàng tìm kiếm đúng tên sản phẩm.
*   [ ] Khách hàng lọc theo giá chính xác.

---

## PHÂN HỆ 2: GIỎ HÀNG VÀ ĐẶT HÀNG (CART & CHECKOUT)

### 1. Mục tiêu chức năng
Cho phép khách hàng lưu trữ các thiết bị muốn mua vào Giỏ hàng, điều chỉnh số lượng và tiến hành điền thông tin thanh toán để tạo Đơn hàng thành công.

### 2. Đối tượng sử dụng
*   **Website (Frontend):** Khách hàng (Đã đăng nhập hoặc Vãng lai).
*   **Web Admin:** Nhân viên Xử lý đơn hàng (Tiếp nhận sau khi khách đặt).

### 3. Quy trình nghiệp vụ
Khách hàng ở trang Chi tiết SP
↓ 
Nhấn "Thêm vào giỏ"
↓ 
Mở trang Giỏ hàng (Cập nhật số lượng / Áp dụng Voucher)
↓ 
Nhấn "Thanh toán"
↓ 
Nhập thông tin giao hàng (Tên, SĐT, Địa chỉ)
↓ 
Chọn phương thức thanh toán (COD / Chuyển khoản)
↓ 
Xác nhận đặt hàng -> Hệ thống tạo Đơn hàng (Order) -> Trừ tồn kho.

### 4. Chức năng Website
**4.1 Quản lý Giỏ hàng (Cart)**
*   Hiển thị danh sách SP đã thêm (Hình thu nhỏ, Tên, Giá, Tổng tiền SP).
*   Nút Tăng/Giảm số lượng. (Kiểm tra kho thực tế).
*   Nút Xóa sản phẩm khỏi giỏ.
*   Tổng tiền thanh toán tạm tính.

**4.2 Checkout (Thanh toán)**
| Trường | Bắt buộc | Ghi chú |
| :--- | :---: | :--- |
| Họ và tên | Có | |
| Số điện thoại | Có | Phải đúng định dạng VN |
| Địa chỉ nhận hàng | Có | Tỉnh/Thành, Quận/Huyện, Chi tiết |
| Ghi chú đơn hàng | Không | |
| Phương thức thanh toán | Có | Mặc định là COD (Thanh toán khi nhận) |

### 5. Chức năng Web Admin
**Quản lý Đơn hàng (Order Management)**
*   Hiển thị danh sách Đơn hàng mới.
*   Xem chi tiết Đơn hàng (Thông tin khách, Danh sách SP mua, Tổng tiền).
*   Cập nhật trạng thái: `Chờ xác nhận` -> `Đang giao` -> `Hoàn thành` -> `Hủy`.

### 6. Validation
*   **Giỏ hàng:** Số lượng SP thêm vào không được lớn hơn `stock_quantity` (Tồn kho).
*   **Checkout:** Số điện thoại phải gồm 10 chữ số. Địa chỉ giao hàng không được để trống.

### 7. Thông báo lỗi
| Mã | Nội dung |
| :--- | :--- |
| ERR_CART_001 | Số lượng vượt quá tồn kho hiện tại |
| ERR_CHK_001 | Vui lòng nhập số điện thoại hợp lệ |
| ERR_CHK_002 | Vui lòng điền đầy đủ địa chỉ nhận hàng |

### 8. API đề xuất
*   `POST /api/cart/add`
*   `PUT /api/cart/update`
*   `DELETE /api/cart/remove/{product_id}`
*   `POST /api/checkout` (Tạo đơn hàng mới)
*   `GET /api/orders/my-orders` (Khách xem lịch sử)
*   `GET /api/admin/orders` (Admin quản lý)

### 9. Thiết kế CSDL
**Bảng ORDER**
`id`, `customer_name`, `customer_phone`, `shipping_address`, `total_amount`, `payment_method`, `status` (Chờ duyệt, Đang giao, Đã hoàn thành), `created_at`

**Bảng ORDER_DETAIL**
`id`, `order_id`, `product_id`, `quantity`, `unit_price`, `sub_total`

*Quan hệ: ORDER (1) ------ (N) ORDER_DETAIL*

### 10. Tiêu chí nghiệm thu (UAT)
*   [ ] Khách hàng thêm SP vào giỏ hàng thành công.
*   [ ] Tính toán Tổng tiền giỏ hàng chính xác 100%.
*   [ ] Báo lỗi nếu khách tăng số lượng mua lớn hơn hàng tồn kho.
*   [ ] Khách hàng đặt hàng thành công, hiển thị trang "Cảm ơn".
*   [ ] Admin nhìn thấy đơn hàng mới ngay lập tức.
*   [ ] Tồn kho SP bị trừ tự động sau khi đặt hàng thành công.

---
*Ghi chú cho nhóm phát triển: Hệ thống E-commerce cần ưu tiên thiết kế Mobile First cho trang Giỏ hàng và Checkout vì 80% khách hàng mua sắm qua điện thoại di động.*
