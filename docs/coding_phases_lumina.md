# Lộ trình Thực hành Code: LUMINA TASKS

Tài liệu này chia nhỏ quá trình code dự án Lumina Tasks thành 4 giai đoạn cụ thể. Tối nay về nhà, bạn hãy bật tài liệu này lên và làm theo từng bước (Step-by-step) để không bị ngợp nhé.

---

## 🎯 GIAI ĐOẠN 1: Dựng khung tĩnh và Giao diện (Static UI)
**Mục tiêu:** Ứng dụng chạy được trên trình duyệt, có đầy đủ các mảnh ghép Component đẹp mắt (chưa cần bấm được).
**Kiến thức áp dụng:** `Thinking in React` (Bước 1 & 2), `Describing the UI`.

1. **Khởi tạo dự án:**
   * Mở Terminal, gõ: `npm create vite@latest mbf-lumina -- --template react`
   * Cài đặt thư viện: `cd mbf-lumina`, rồi gõ `npm install`.
2. **Dọn dẹp & Setup CSS:**
   * Xóa nội dung trong `App.css` và thiết lập hệ thống CSS Glassmorphism (hiệu ứng kính mờ, background gradient) trong `index.css`.
3. **Tạo cấu trúc thư mục:** 
   * Trong thư mục `src`, tạo một folder tên là `components`.
4. **Code các Component "câm" (Dumb Components):**
   * Tạo các file tĩnh (chỉ return HTML/CSS): `Header.jsx`, `TaskInput.jsx`, `FilterBar.jsx`, `TaskItem.jsx`, `TaskList.jsx`.
   * Giao diện lúc này dùng **Dữ liệu giả (Mock Data)**. Ví dụ: Tự viết cứng 2 task hiển thị ra màn hình thay vì dùng biến.
5. **Lắp ráp:** Đưa tất cả vào `App.jsx` và chạy thử bằng `npm run dev`.

---

## 🎯 GIAI ĐOẠN 2: Thổi hồn vào UI (Thêm/Sửa/Xóa Task)
**Mục tiêu:** Chuyển đổi dữ liệu tĩnh thành State động. Làm cho nút "Thêm", "Xóa", "Hoàn thành" hoạt động.
**Kiến thức áp dụng:** `Adding Interactivity`, `Managing State`, `Updating Arrays/Objects in State`.

1. **Khai báo State chính:**
   * Vào `App.jsx`, xóa dữ liệu giả đi và thay bằng `const [tasks, setTasks] = useState([])`.
2. **Chức năng Thêm (Add):**
   * Ở `TaskInput.jsx`, tạo `useState` lưu trữ chữ người dùng đang gõ.
   * Khi `onSubmit`, đẩy chữ đó lên `App.jsx` để thêm vào mảng `tasks` (nhớ nguyên tắc Copy mảng `[...tasks, newTask]`, không dùng `.push()`).
3. **Chức năng Xóa (Delete):**
   * Ở `App.jsx`, viết hàm `deleteTask(id)`. Truyền hàm này xuống `TaskList` rồi xuống tận `TaskItem`.
   * Ở `TaskItem.jsx`, gắn sự kiện `onClick` vào nút Xóa để gọi hàm này.
4. **Chức năng Hoàn thành (Toggle Complete):**
   * Viết hàm `toggleTask(id)` ở `App.jsx`. Hàm này dùng `.map()` để duyệt qua mảng, tìm đúng `id` và đảo ngược giá trị `completed` từ `false` sang `true`.
   * Gắn hàm này vào ô Checkbox trong `TaskItem.jsx`.

---

## 🎯 GIAI ĐOẠN 3: Lọc dữ liệu và Lưu trữ (Filter & Storage)
**Mục tiêu:** Ứng dụng lọc được các task (Tất cả / Đã xong / Chưa xong) và dữ liệu không biến mất khi tải lại trang (F5).
**Kiến thức áp dụng:** `Sharing State Between Components`, `Escape Hatches (useEffect)`.

1. **Tính năng Lọc (Filter):**
   * Trong `App.jsx`, tạo thêm state: `const [filter, setFilter] = useState('All')`.
   * Dùng lệnh `if/else` hoặc `.filter()` để tạo ra mảng `filteredTasks` từ mảng `tasks` gốc.
   * Truyền mảng `filteredTasks` này vào `<TaskList />` thay vì truyền toàn bộ `tasks`.
2. **Cập nhật thanh FilterBar:**
   * Truyền state `filter` và hàm `setFilter` xuống `<FilterBar />` để khi người dùng bấm nút nào, ta đổi state filter thành chữ tương ứng ('All', 'Active', 'Completed').
   * Làm sáng (highlight) nút đang được bấm (Conditional Rendering).
3. **Đồng bộ ổ cứng (LocalStorage):**
   * Trong `App.jsx`, dùng `useEffect` để: *Mỗi khi mảng `tasks` thay đổi -> Gọi hàm `localStorage.setItem` để lưu mảng vào trình duyệt*.
   * Khởi tạo giá trị mặc định của mảng `tasks` bằng cách lấy dữ liệu từ `localStorage.getItem` thay vì để mảng rỗng `[]`.

---

## 🎯 GIAI ĐOẠN 4: Nâng cấp UX (Hoàn thiện)
**Mục tiêu:** Biến ứng dụng thành bản "Premium" thực sự với chế độ Sáng/Tối và hiệu ứng di chuyển.

1. **Chế độ Sáng/Tối (Dark Theme):**
   * Thêm State `theme` trong `App.jsx`. 
   * Truyền xuống `<Header />` để nút bấm có thể chuyển đổi giữa 'light' và 'dark'.
   * Dùng CSS biến (`--bg-color`, `--text-color`) để thay đổi giao diện theo theme.
2. **Phụ kiện & Hiệu ứng:**
   * Cập nhật `<Header />` để đếm số lượng: *"Bạn đã hoàn thành X / Y công việc"*. (Biến `X` được tính từ số phần tử có `completed: true`).
   * Viết thêm các dòng CSS `.task-item { transition: all 0.3s ease; }` để khi hover vào hoặc xóa task, giao diện mượt mà không bị giật lùi.

> 💡 **Tip:** Bạn hãy thực hiện **Tuần tự từng giai đoạn**. Hoàn thành 100% Giai đoạn 1 rồi mới sang Giai đoạn 2. Code đến đâu mở lại link Docs ở file `project_mapping_lumina.md` ra đối chiếu đến đó!
