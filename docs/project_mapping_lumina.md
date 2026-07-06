# Kế hoạch & Phân tích chi tiết Dự án: LUMINA TASKS

Tài liệu này đóng vai trò là "Bản thiết kế" (Blueprint) cho dự án. Chúng ta sẽ "mổ xẻ" dự án Lumina Tasks ra thành từng Component nhỏ. Với mỗi chức năng, tôi sẽ chỉ rõ cho bạn cần áp dụng kiến thức ở **thư mục/bài học nào** trong tài liệu React để bạn có thể mở ra đối chiếu ngay lập tức.

---

## 1. Cấu trúc trang (Pages & Layout)
Ứng dụng của chúng ta là một **Single Page Application (SPA)**, nghĩa là chỉ có 1 trang duy nhất, nhưng nội dung bên trong sẽ thay đổi.
Giao diện sẽ được chia thành các Component lồng nhau theo hệ thống phân cấp:

```text
<App> (Component gốc)
 ├── <Header>
 └── <TaskBoard>
      ├── <TaskInput>
      ├── <FilterBar>
      └── <TaskList>
           ├── <TaskItem>
           ├── <TaskItem>
           └── ...
```
📌 **Lý thuyết đối chiếu:** Cấu trúc này áp dụng bài học **`GET STARTED / Quick Start`** (Nesting components) và **`GET STARTED / Thinking in React`** (Bước 1: Chia nhỏ UI thành hệ thống phân cấp).
🔗 **Link bài:** [Tư duy trong React](https://vi.react.dev/learn/thinking-in-react)

---

## 2. Chi tiết từng Component và Chức năng

### A. `<App />` (Component gốc)
*   **Nhiệm vụ:** Là "bộ não" của ứng dụng. Nó lưu trữ toàn bộ danh sách các công việc (State) và trạng thái giao diện (Dark/Light Mode).
*   **State cần dùng:** 
    *   `tasks`: Một mảng (Array) chứa các object công việc.
    *   `theme`: Chữ 'light' hoặc 'dark'.
*   **Logic nâng cao:** Mỗi khi mảng `tasks` thay đổi, nó phải lưu tự động vào ổ cứng của trình duyệt (LocalStorage) để không bị mất khi F5.
*   📌 **Lý thuyết đối chiếu:**
    *   Khai báo State: **`LEARN REACT / Adding Interactivity / State: A Component's Memory`** 👉 [Xem chi tiết](https://vi.react.dev/learn/state-a-components-memory)
    *   Lưu vào LocalStorage tự động: **`LEARN REACT / Escape Hatches / Synchronizing with Effects`** (Cách dùng `useEffect` để chạy một đoạn code tự động mỗi khi dữ liệu thay đổi). 👉 [Xem chi tiết](https://vi.react.dev/learn/synchronizing-with-effects)

### B. `<Header />` (Thanh tiêu đề)
*   **Nhiệm vụ:** Hiển thị Logo, đếm tổng số task đã hoàn thành (ví dụ: "Đã xong 3/5"), và chứa một nút bấm để chuyển đổi Dark Mode / Light Mode.
*   **Chức năng chuyển Theme:** Nút bấm có gắn sự kiện `onClick`.
*   📌 **Lý thuyết đối chiếu:**
    *   Sự kiện bấm nút: **`LEARN REACT / Adding Interactivity / Responding to Events`** 👉 [Xem chi tiết](https://vi.react.dev/learn/responding-to-events)
    *   Truyền tổng số task từ `<App />` xuống `<Header />`: **`LEARN REACT / Describing the UI / Passing Props to a Component`** 👉 [Xem chi tiết](https://vi.react.dev/learn/passing-props-to-a-component)

### C. `<TaskInput />` (Thanh nhập công việc mới)
*   **Nhiệm vụ:** Có một ô nhập chữ (input) và nút "Thêm".
*   **Chức năng:**
    1. Khi người dùng gõ phím (`onChange`), phải lưu ngay chữ đang gõ vào State.
    2. Khi người dùng bấm phím Enter hoặc bấm nút "Thêm" (`onSubmit`), phải đẩy công việc mới vào mảng `tasks` ở trên `<App />`.
*   📌 **Lý thuyết đối chiếu:**
    *   Quản lý ô nhập chữ: **`LEARN REACT / Managing State / Reacting to Input with State`** 👉 [Xem chi tiết](https://vi.react.dev/learn/reacting-to-input-with-state)
    *   Cập nhật mảng (Thêm phần tử mới mà không làm hỏng mảng cũ): **`LEARN REACT / Adding Interactivity / Updating Arrays in State`** 👉 [Xem chi tiết](https://vi.react.dev/learn/updating-arrays-in-state)

### D. `<FilterBar />` (Thanh bộ lọc)
*   **Nhiệm vụ:** Gồm 3 nút bấm: "Tất cả" (All), "Chưa xong" (Active), "Đã xong" (Completed).
*   **Chức năng:** Nút nào đang được chọn thì nút đó sẽ đổi màu sáng lên. Các nút khác mờ đi.
*   📌 **Lý thuyết đối chiếu:**
    *   Đổi màu nút đang chọn (Thêm class CSS tùy điều kiện): **`LEARN REACT / Describing the UI / Conditional Rendering`** (Toán tử 3 ngôi `? :`). 👉 [Xem chi tiết](https://vi.react.dev/learn/conditional-rendering)
    *   Quản lý State `currentFilter` giữa các component: **`LEARN REACT / Managing State / Sharing State Between Components`**. 👉 [Xem chi tiết](https://vi.react.dev/learn/sharing-state-between-components)

### E. `<TaskList />` (Danh sách công việc)
*   **Nhiệm vụ:** Nhận một mảng các công việc (đã được lọc qua FilterBar) và hiển thị chúng ra màn hình.
*   **Chức năng:** Dùng vòng lặp để in ra nhiều Component `<TaskItem />`.
*   📌 **Lý thuyết đối chiếu:**
    *   Vòng lặp in danh sách: **`LEARN REACT / Describing the UI / Rendering Lists`** (Sử dụng hàm `.map()` và thuộc tính `key` quan trọng). 👉 [Xem chi tiết](https://vi.react.dev/learn/rendering-lists)

### F. `<TaskItem />` (Từng công việc cụ thể)
*   **Nhiệm vụ:** Hiển thị nội dung 1 công việc, 1 hộp kiểm (Checkbox) để đánh dấu hoàn thành, và 1 nút (Icon thùng rác) để Xóa.
*   **Chức năng:**
    1. Checkbox (`onChange`): Đảo ngược trạng thái `completed` (từ false sang true và ngược lại).
    2. Nút Xóa (`onClick`): Gọi hàm xóa phần tử khỏi mảng.
    3. Giao diện: Nếu `completed` là true, chữ sẽ bị gạch ngang.
*   📌 **Lý thuyết đối chiếu:**
    *   Thay đổi trạng thái true/false của 1 công việc trong mảng: **`LEARN REACT / Adding Interactivity / Updating Objects in State`** (Sử dụng cú pháp copy object `...`). 👉 [Xem chi tiết](https://vi.react.dev/learn/updating-objects-in-state)
    *   Truyền hàm xóa từ `<App />` xuống tận `<TaskItem />` qua Props: **`LEARN REACT / Describing the UI / Passing Props`**. 👉 [Xem chi tiết](https://vi.react.dev/learn/passing-props-to-a-component)

---

## 3. Lộ trình thực hiện mã hóa (Coding Plan)
Khi chúng ta thực sự viết code, các bước tiến hành sẽ như sau:

1.  **Cài đặt Vite:** (Xem `GET STARTED / Installation`)
2.  **Viết HTML tĩnh (Static UI):** Dựng khung HTML và ghép CSS Glassmorphism cho ra hình hài trang web. (Xem `GET STARTED / Thinking in React - Bước 2`)
3.  **Chia tách Component:** Tách khung HTML lớn thành các file `Header.js`, `TaskInput.js`, v.v. (Xem `LEARN REACT / Importing and Exporting`)
4.  **Khai báo State & Props:** Gắn linh hồn (dữ liệu động) vào các mảnh ghép. (Xem `LEARN REACT / State: A Component's Memory`)
5.  **Gắn sự kiện:** Viết hàm cho các nút bấm `onClick`, `onChange`. (Xem `LEARN REACT / Responding to Events`)
6.  **Tối ưu LocalStorage:** Sử dụng `useEffect` để lưu dữ liệu. (Xem `LEARN REACT / Escape Hatches`)