# Kế hoạch & Phân tích chi tiết Dự án: LUMINA TASKS

Tài liệu này đóng vai trò là "Bản thiết kế" (Blueprint) cho dự án. Mỗi chức năng được đính kèm link tài liệu trực tiếp.

---

## 1. Cấu trúc trang (Pages & Layout)
Ứng dụng được chia thành các Component lồng nhau theo hệ thống phân cấp:

```text
<App> (Component gốc)
 ├── <Header>
 └── <TaskBoard>
      ├── <TaskInput>
      ├── <FilterBar>
      └── <TaskList>
           ├── <TaskItem>
           └── ...
```
📌 **Lý thuyết đối chiếu:** 
- [Thinking in React (Bước 1: Chia nhỏ UI)](https://vi.react.dev/learn/thinking-in-react)

---

## 2. Chi tiết từng Component và Chức năng

### A. `<App />` (Component gốc)
*   **Nhiệm vụ:** Lưu trữ toàn bộ danh sách các công việc và trạng thái giao diện (Dark/Light).
*   **Logic nâng cao:** Mỗi khi mảng thay đổi, lưu tự động vào LocalStorage.
*   📌 **Lý thuyết đối chiếu:**
    *   Khai báo State: [State: A Component's Memory](https://vi.react.dev/learn/state-a-components-memory)
    *   Lưu vào LocalStorage tự động: [Synchronizing with Effects](https://vi.react.dev/learn/synchronizing-with-effects)

### B. `<Header />` (Thanh tiêu đề)
*   **Nhiệm vụ:** Hiển thị Logo, đếm tổng số task, nút chuyển Theme.
*   **Chức năng:** Nút bấm có gắn sự kiện `onClick`.
*   📌 **Lý thuyết đối chiếu:**
    *   Sự kiện bấm nút: [Responding to Events](https://vi.react.dev/learn/responding-to-events)
    *   Truyền tổng số task từ `<App />` xuống: [Passing Props to a Component](https://vi.react.dev/learn/passing-props-to-a-component)

### C. `<TaskInput />` (Thanh nhập công việc mới)
*   **Chức năng:** Khi gõ phím (`onChange`), lưu chữ đang gõ. Bấm Enter (`onSubmit`), đẩy vào mảng `tasks`.
*   📌 **Lý thuyết đối chiếu:**
    *   Quản lý ô nhập chữ: [Reacting to Input with State](https://vi.react.dev/learn/reacting-to-input-with-state)
    *   Cập nhật mảng State: [Updating Arrays in State](https://vi.react.dev/learn/updating-arrays-in-state)

### D. `<FilterBar />` (Thanh bộ lọc)
*   **Nhiệm vụ:** Gồm 3 nút: "All", "Active", "Completed". Nút nào chọn thì sáng lên.
*   📌 **Lý thuyết đối chiếu:**
    *   Đổi màu nút đang chọn (Thêm class có điều kiện): [Conditional Rendering](https://vi.react.dev/learn/conditional-rendering)
    *   Quản lý State dùng chung: [Sharing State Between Components](https://vi.react.dev/learn/sharing-state-between-components)

### E. `<TaskList />` (Danh sách công việc)
*   **Chức năng:** Dùng vòng lặp `.map()` in ra các `<TaskItem />`.
*   📌 **Lý thuyết đối chiếu:**
    *   Vòng lặp in danh sách: [Rendering Lists](https://vi.react.dev/learn/rendering-lists)

### F. `<TaskItem />` (Từng công việc cụ thể)
*   **Chức năng:** Đảo ngược trạng thái `completed` của 1 task.
*   📌 **Lý thuyết đối chiếu:**
    *   Thay đổi trạng thái true/false của 1 object trong mảng: [Updating Objects in State](https://vi.react.dev/learn/updating-objects-in-state)
