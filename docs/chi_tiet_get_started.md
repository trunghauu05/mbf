# Giải thích chi tiết: PHẦN 1 - GET STARTED (Bắt Đầu)

Nếu phần giải thích trước còn hơi trừu tượng, ở tài liệu này, chúng ta sẽ đi sâu vào **từng bài học một** trong thư mục `GET STARTED`. Qua đây, bạn sẽ biết chính xác mình sẽ code cái gì và tư duy ra sao.

---

## 1. Quick Start (Bắt đầu nhanh)
🔗 **Tham khảo trực tiếp:** [Bắt đầu nhanh (Quick Start)](https://vi.react.dev/learn)

Đây là bài học tổng hợp kiểu "cưỡi ngựa xem hoa" để bạn lướt qua toàn bộ sức mạnh của React. Bạn sẽ được học các kỹ năng cốt lõi nhất:

*   **Tạo và lồng ghép Component (Creating and nesting components):**
    *   *Chi tiết:* Thay vì viết một file HTML dài 1000 dòng, bạn sẽ học cách tạo ra một hàm JavaScript đại diện cho một cái nút.
*   **Viết giao diện bằng JSX (Writing markup with JSX):**
    *   *Chi tiết:* Bạn sẽ học cách viết mã HTML **ngay bên trong** JavaScript. 
*   **Hiển thị dữ liệu (Displaying data):**
    *   *Chi tiết:* Làm sao để in một biến JavaScript ra màn hình? Dùng dấu ngoặc nhọn `{}`.
*   **Render có điều kiện & Render danh sách:** Dùng toán tử `if` và vòng lặp `.map()`.
*   **Cập nhật màn hình (Updating the screen - State):** Học hàm `useState` để React tự động hiển thị số lượng thay đổi lên màn hình.

---

## 2. Tutorial: Tic-Tac-Toe (Thực hành làm game Caro)
🔗 **Tham khảo trực tiếp:** [Tutorial: Tic-Tac-Toe](https://vi.react.dev/learn/tutorial-tic-tac-toe)

Sau khi đọc lý thuyết ở bài *Quick Start*, bạn sẽ ngay lập tức được "thực chiến".
*   **Xây dựng bàn cờ:** Dùng vòng lặp để vẽ ra một bàn cờ 3x3 chứa 9 ô vuông.
*   **Lưu trạng thái trò chơi & Xác định người thắng.**
*   **Chức năng "Cỗ máy thời gian":** Lưu lại lịch sử của từng bước đi và tạo ra các nút bấm để "quay ngược thời gian". 

---

## 3. Thinking in React (Tư duy trong React)
🔗 **Tham khảo trực tiếp:** [Tư duy trong React](https://vi.react.dev/learn/thinking-in-react)

Đây được xem là bài học **có giá trị nhất**. Nó dạy bạn cách suy nghĩ như một kỹ sư React chuyên nghiệp thông qua 5 bước:
1.  **Chia nhỏ UI thành Hệ thống phân cấp (Component Hierarchy)**
2.  **Xây dựng phiên bản tĩnh (Static version)**
3.  **Xác định trạng thái tối giản nhất (Minimal complete State)**
4.  **Quyết định nơi đặt State**
5.  **Thêm luồng dữ liệu ngược (Inverse data flow)**

---

## 4. Installation & Setup (Cài đặt & Thiết lập)
🔗 **Tham khảo trực tiếp:** [Installation](https://vi.react.dev/learn/installation)

*   **Không dùng Create React App nữa:** Tài liệu giải thích vì sao bạn nên dùng các công cụ hiện đại (framework) như **Next.js**, **Remix** hoặc **Vite**.
*   **Cài đặt Editor & React DevTools:** Hướng dẫn công cụ kiểm tra lỗi (ESLint, Prettier).

---

## 5. React Compiler
🔗 **Tham khảo trực tiếp:** [React Compiler](https://vi.react.dev/learn/react-compiler)

Phần nâng cao mới bổ sung: Giới thiệu **React Compiler**, công cụ tự động ngầm phân tích code và tối ưu hóa (memoization) giúp ứng dụng mượt mà không cần dùng hàm `useMemo` hay `useCallback` thủ công.


Giải thích chi tiết: PHẦN 1 - GET STARTED (Bắt Đầu)
Nếu phần giải thích trước còn hơi trừu tượng, ở tài liệu này, chúng ta sẽ đi sâu vào từng bài học một trong thư mục GET STARTED. Qua đây, bạn sẽ biết chính xác mình sẽ code cái gì và tư duy ra sao.

1. Quick Start (Bắt đầu nhanh)
Đây là bài học tổng hợp kiểu "cưỡi ngựa xem hoa" để bạn lướt qua toàn bộ sức mạnh của React. Bạn sẽ được học các kỹ năng cốt lõi nhất:

Tạo và lồng ghép Component (Creating and nesting components):
Chi tiết: Thay vì viết một file HTML dài 1000 dòng, bạn sẽ học cách tạo ra một hàm JavaScript (ví dụ: function NutBam()) đại diện cho một cái nút. Sau đó, bạn đem cái nút đó đặt vào một thanh điều hướng NavBar.
Viết giao diện bằng JSX (Writing markup with JSX):
Chi tiết: Bạn sẽ học cách viết mã HTML ngay bên trong JavaScript. Trông nó giống HTML nhưng chặt chẽ hơn (ví dụ: tất cả các thẻ đều phải được đóng <img />).
Hiển thị dữ liệu (Displaying data):
Chi tiết: Làm sao để in một biến JavaScript ra màn hình? Bạn sẽ học cách dùng dấu ngoặc nhọn {}. Ví dụ: <h1>Xin chào {tenCuaBan}</h1>.
Render có điều kiện (Conditional rendering):
Chi tiết: Học cách hiển thị giao diện tùy theo tình huống. Ví dụ: Nếu người dùng đã đăng nhập, hiển thị nút "Đăng xuất", nếu chưa thì hiển thị "Đăng nhập".
Render danh sách (Rendering lists):
Chi tiết: Học cách biến một mảng dữ liệu (ví dụ: danh sách 100 sản phẩm) thành 100 thẻ HTML trên màn hình bằng hàm .map().
Cập nhật màn hình (Updating the screen - State):
Chi tiết: Học hàm useState. Ví dụ: Khi bạn bấm nút "Tăng", biến đếm tăng từ 0 lên 1, và React tự động hiển thị số 1 lên màn hình mà bạn không cần phải tự sửa HTML (như cách dùng document.getElementById ngày xưa).
Chia sẻ dữ liệu (Sharing data between components):
Chi tiết: Nếu bạn có 2 nút bấm riêng biệt nhưng muốn chúng cùng hiển thị chung một số đếm, bạn sẽ học cách đẩy dữ liệu lên component cha và truyền xuống lại cho 2 nút (gọi là truyền Props).
2. Tutorial: Tic-Tac-Toe (Thực hành làm game Caro)
Sau khi đọc lý thuyết ở bài Quick Start, bạn sẽ ngay lập tức được "thực chiến".

Xây dựng bàn cờ: Bạn sẽ dùng vòng lặp để vẽ ra một bàn cờ 3x3 chứa 9 ô vuông (mỗi ô là một component Square).
Lưu trạng thái trò chơi: Bạn sẽ học cách lưu trữ xem ô nào đang đánh dấu 'X', ô nào đánh dấu 'O'.
Xác định người thắng: Viết logic để kiểm tra 3 ô thẳng hàng.
Chức năng "Cỗ máy thời gian": Đây là phần thú vị nhất! Bạn sẽ lưu lại lịch sử của từng bước đi và tạo ra các nút bấm để "quay ngược thời gian" về các nước cờ trước đó.
Lợi ích: Bài này giúp bạn hiểu sâu sắc về việc Dữ liệu nên được đặt ở đâu (đặt ở ô cờ hay đặt ở bàn cờ?).
3. Thinking in React (Tư duy trong React)
Đây được xem là bài học có giá trị nhất của toàn bộ tài liệu React. Nó dạy bạn cách suy nghĩ như một kỹ sư React chuyên nghiệp thông qua 5 bước kinh điển:

Bước 1: Chia nhỏ UI thành Hệ thống phân cấp (Component Hierarchy):
Cho bạn một bản thiết kế (Mockup) bằng hình ảnh. Bước đầu tiên là vẽ các hộp vuông bao quanh từng phần (Thanh tìm kiếm, Bảng dữ liệu, Từng dòng dữ liệu) và đặt tên cho chúng.
Bước 2: Xây dựng phiên bản tĩnh (Static version):
Viết code ra giao diện HTML/CSS y hệt bản thiết kế, nhưng chưa có dữ liệu động (bấm vào nút không có tác dụng gì).
Bước 3: Xác định trạng thái tối giản nhất (Minimal complete State):
Tìm ra những dữ liệu nào bắt buộc phải thay đổi theo thời gian (ví dụ: chữ mà người dùng đang gõ vào ô tìm kiếm). Nếu dữ liệu có thể tự tính toán được từ dữ liệu khác, thì nó không phải là State.
Bước 4: Quyết định nơi đặt State:
Giữa một rừng các component, State nên thuộc về component nào? Quy tắc là: Tìm component cha chung gần nhất của tất cả các component cần dùng State đó.
Bước 5: Thêm luồng dữ liệu ngược (Inverse data flow):
Component con (ô nhập liệu) làm thế nào để báo cho Component cha biết rằng người dùng vừa gõ phím? Bạn sẽ học cách truyền một hàm (function) từ cha xuống con.
4. Installation & Setup (Cài đặt & Thiết lập)
Phần này thiên về kỹ thuật máy tính:

Không dùng Create React App nữa: Tài liệu sẽ giải thích vì sao bạn nên dùng các công cụ hiện đại (framework) như Next.js, Remix hoặc Vite để tạo dự án thay vì cách cũ.
Cài đặt Editor: Khuyên dùng VS Code cùng các công cụ kiểm tra lỗi (ESLint, Prettier).
Cài React DevTools: Hướng dẫn bạn cài tiện ích mở rộng trên Chrome/Edge để có thể nhìn thấu "bộ xương" của trang web React, giúp bạn biết chính xác component nào đang nhận dữ liệu gì.
5. React Compiler
Đây là phần kiến thức nâng cao mới được bổ sung.

Trước đây, khi giao diện phức tạp, lập trình viên phải đau đầu dùng các hàm useMemo, useCallback để ngăn React vẽ lại màn hình một cách vô ích.
Phần này giới thiệu React Compiler, một công cụ tự động ngầm phân tích code và tự động tối ưu hóa mọi thứ cho bạn. Bạn chỉ cần code một cách tự nhiên nhất, còn lại để trình biên dịch lo.
TIP

Tóm lại, nếu chỉ có thể học 1 thứ trong phần GET STARTED này, hãy đọc kỹ bài "Thinking in React". Nó sẽ định hình toàn bộ cách bạn viết code sau này.