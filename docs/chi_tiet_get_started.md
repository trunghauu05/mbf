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
