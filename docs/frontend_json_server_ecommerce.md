# TÀI LIỆU THIẾT KẾ FRONTEND & MOCK BACKEND (JSON SERVER)
**Dự án:** Website Bán Thiết Bị Điện Tử (E-Commerce)
**Hướng tiếp cận:** Lập trình 100% Frontend React, dùng thư viện `json-server` làm Backend giả lập.

---

## 1. Mục tiêu kiến trúc
Vì bạn đang tập trung học Frontend và chưa học Backend (NodeJS/Java/PHP...), chúng ta sẽ sử dụng thư viện **`json-server`**. Thư viện này cho phép tạo ra một API Backend hoàn chỉnh (hỗ trợ đủ các lệnh GET, POST, PUT, DELETE) chỉ trong 30 giây dựa trên một file văn bản tên là `db.json`.

Điều này giúp bạn có thể code chức năng gọi API, lấy dữ liệu, và đẩy dữ liệu lên server y hệt như đi làm công ty, nhưng không tốn thời gian xây dựng Backend.

---

## 2. Thiết kế Cấu trúc Dữ liệu Giả lập (File `db.json`)
Bạn sẽ tạo một file `db.json` trong thư mục gốc của dự án. Nội dung file này sẽ đóng vai trò là "Cơ sở dữ liệu" của toàn bộ trang web:

```json
{
  "categories": [
    { "id": "1", "name": "Laptop", "slug": "laptop" },
    { "id": "2", "name": "Điện thoại", "slug": "dien-thoai" }
  ],
  "products": [
    {
      "id": "101",
      "category_id": "1",
      "name": "MacBook Air M2",
      "price": 25000000,
      "discount_price": 23500000,
      "image": "https://url-hinh-anh.com/macm2.jpg",
      "stock": 10,
      "specs": {
        "ram": "8GB",
        "cpu": "Apple M2",
        "storage": "256GB SSD"
      }
    },
    {
      "id": "102",
      "category_id": "2",
      "name": "iPhone 15 Pro Max",
      "price": 30000000,
      "discount_price": null,
      "image": "https://url-hinh-anh.com/ip15.jpg",
      "stock": 5,
      "specs": {
        "ram": "8GB",
        "cpu": "A17 Pro",
        "storage": "256GB"
      }
    }
  ],
  "orders": []
}
```

---

## 3. Bản đồ Chức năng Frontend & API tương ứng

Thay vì Backend thật, React Frontend của bạn sẽ "nói chuyện" với JSON Server ở địa chỉ `http://localhost:3000`. Dưới đây là cách Frontend hoạt động:

### A. Trang Chủ (Home Page)
*   **Hiển thị menu danh mục:** React gọi API `GET http://localhost:3000/categories` để lấy mảng danh mục và in ra Header.
*   **Hiển thị sản phẩm mới/nổi bật:** React gọi API `GET http://localhost:3000/products?_limit=8` để lấy 8 sản phẩm đầu tiên và dùng hàm `.map()` vẽ ra giao diện.

### B. Trang Danh sách Sản phẩm (Product List)
*   **Khi bấm vào danh mục "Laptop":** React gọi API `GET http://localhost:3000/products?category_id=1`. JSON server sẽ tự động lọc và chỉ trả về Laptop.
*   **Lọc theo giá (Dưới 20 triệu):** Dùng tính năng lọc mặc định của JSON Server: `GET http://localhost:3000/products?price_lte=20000000`.

### C. Trang Chi tiết Sản phẩm (Product Detail)
*   Khách hàng bấm vào iPhone 15, URL web đổi thành `/product/102`.
*   React lấy số `102` từ URL, sau đó gọi `GET http://localhost:3000/products/102` để lấy đúng cấu hình của iPhone 15 và hiển thị ra màn hình.

### D. Giỏ hàng (Cart)
*Do JSON Server không quản lý đăng nhập (Authentication) tốt, Giỏ hàng nên được xử lý 100% bằng LocalStorage của trình duyệt.*
*   **Thêm vào giỏ:** Khi bấm "Thêm", React lưu một mảng `cart: [{ productId: "102", quantity: 1 }]` vào `localStorage`.
*   Việc này giúp khi người dùng F5 tải lại trang, giỏ hàng vẫn còn nguyên mà không cần Backend.

### E. Thanh toán (Checkout & Đặt hàng)
*   Khách hàng điền form tên, địa chỉ.
*   Khi bấm **"Xác nhận đặt hàng"**: React gói thông tin khách hàng và thông tin giỏ hàng thành một object lớn, gọi lệnh `POST http://localhost:3000/orders`.
*   JSON Server sẽ tự động gán một `id` mới cho đơn hàng và lưu vĩnh viễn vào file `db.json`. 
*   Sau khi POST thành công, React xóa rỗng `localStorage` giỏ hàng và chuyển hướng sang trang "Cảm ơn".

---

## 4. Các bước khởi chạy dự án thực tế

Để hệ thống này hoạt động, bạn sẽ cần mở **2 cửa sổ Terminal** chạy song song:

**Terminal 1 (Chạy Backend giả lập):**
1. Mở thư mục dự án.
2. Gõ `npm install -g json-server` (Chỉ cần cài 1 lần vào máy).
3. Gõ lệnh: `json-server --watch db.json --port 3000`
👉 Kết quả: Backend chạy ở `http://localhost:3000`.

**Terminal 2 (Chạy Frontend React):**
1. Mở thư mục dự án.
2. Gõ lệnh: `npm run dev` (Vì bạn đang dùng Vite).
👉 Kết quả: Giao diện web chạy ở `http://localhost:5173`. Web này sẽ fetch dữ liệu từ cổng 3000.

---
*Ghi chú: Lựa chọn JSON Server là một chiến lược vô cùng thông minh khi học Frontend. Bạn không bị phân tâm bởi các lỗi kết nối CSDL phức tạp, mà vẫn học được 100% cách Frontend giao tiếp với API chuẩn RESTful bằng các Hook như `useEffect` hoặc thư viện `React Query/Axios`.*
