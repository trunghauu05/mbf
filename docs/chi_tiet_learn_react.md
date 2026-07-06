# Giải thích chi tiết: PHẦN 2 - LEARN REACT (Học React Cốt Lõi)

Đây là phần xương sống của React. 

---

## 1. Describing the UI (Mô tả giao diện UI)
🔗 **Tham khảo trực tiếp:** [Describing the UI](https://vi.react.dev/learn/describing-the-ui)

*   **Your First Component:** Học cách đóng gói một đoạn HTML vào hàm JS. 👉 [Xem chi tiết](https://vi.react.dev/learn/your-first-component)
*   **Passing Props to a Component:** Truyền dữ liệu xuống component con. 👉 [Xem chi tiết](https://vi.react.dev/learn/passing-props-to-a-component)
*   **Conditional Rendering:** Dùng câu lệnh `if` hoặc toán tử ba ngôi `? :` để ẩn/hiện giao diện. 👉 [Xem chi tiết](https://vi.react.dev/learn/conditional-rendering)
*   **Rendering Lists:** Dùng hàm `.map()` để in mảng dữ liệu thành hàng loạt các thẻ HTML. 👉 [Xem chi tiết](https://vi.react.dev/learn/rendering-lists)

---

## 2. Adding Interactivity (Thêm sự tương tác)
🔗 **Tham khảo trực tiếp:** [Adding Interactivity](https://vi.react.dev/learn/adding-interactivity)

*   **Responding to Events:** Cách gắn các sự kiện như `onClick`, `onChange` vào các thẻ HTML. 👉 [Xem chi tiết](https://vi.react.dev/learn/responding-to-events)
*   **State: A Component's Memory:** Dùng `useState` để nói với React: "Này, dữ liệu thay đổi rồi, vẽ lại màn hình!". 👉 [Xem chi tiết](https://vi.react.dev/learn/state-a-components-memory)
*   **Updating Objects & Arrays in State:** Học cách xử lý State khi nó là mảng hoặc Object bằng Immutability. 👉 [Xem chi tiết](https://vi.react.dev/learn/updating-objects-in-state)

---

## 3. Managing State (Quản lý Trạng thái dữ liệu)
🔗 **Tham khảo trực tiếp:** [Managing State](https://vi.react.dev/learn/managing-state)

*   **Reacting to Input with State:** Chuyển đổi tư duy sang "Mô tả trạng thái của UI" (ví dụ: typing, submitting, success). 👉 [Xem chi tiết](https://vi.react.dev/learn/reacting-to-input-with-state)
*   **Sharing State Between Components:** Đẩy State lên component cha chung để chia sẻ dữ liệu. 👉 [Xem chi tiết](https://vi.react.dev/learn/sharing-state-between-components)
*   **Extracting State Logic into a Reducer:** Dùng `useReducer` thay vì nhiều hàm `useState` khi quản lý danh sách phức tạp. 👉 [Xem chi tiết](https://vi.react.dev/learn/extracting-state-logic-into-a-reducer)
*   **Passing Data Deeply with Context:** Tạo "đường hầm" bằng `useContext` để truyền thẳng dữ liệu xuống component chắt mà không cần Prop drilling. 👉 [Xem chi tiết](https://vi.react.dev/learn/passing-data-deeply-with-context)

---

## 4. Escape Hatches (Cửa Thoát Hiểm)
🔗 **Tham khảo trực tiếp:** [Escape Hatches](https://vi.react.dev/learn/escape-hatches)

*   **Referencing Values with Refs:** Dùng `useRef` lưu một giá trị nhưng không muốn màn hình bị render lại khi thay đổi. 👉 [Xem chi tiết](https://vi.react.dev/learn/referencing-values-with-refs)
*   **Synchronizing with Effects:** Dùng `useEffect` để đồng bộ React với các hệ thống ngoài (Gọi API, LocalStorage). 👉 [Xem chi tiết](https://vi.react.dev/learn/synchronizing-with-effects)
*   **Reusing Logic with Custom Hooks:** Gom các đoạn logic `useState` và `useEffect` lặp lại thành một hàm riêng do bạn tự đặt tên. 👉 [Xem chi tiết](https://vi.react.dev/learn/reusing-logic-with-custom-hooks)
