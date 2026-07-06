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


Giải thích chi tiết: PHẦN 2 - LEARN REACT (Học React Cốt Lõi)
Đây là phần xương sống của React. Nếu Phần 1 chỉ giúp bạn biết React là gì, thì Phần 2 sẽ dạy bạn cách thực sự làm chủ nó. Phần này được chia làm 4 "Chương" lớn, đi từ giao diện tĩnh đến xử lý logic phức tạp.

1. Describing the UI (Mô tả giao diện UI)
Trong chương này, bạn sẽ học cách "vẽ" ra trang web, nhưng không phải bằng HTML truyền thống, mà bằng tư duy Component.

Your First Component (Component đầu tiên của bạn): Học cách đóng gói một đoạn HTML và vài dòng CSS vào một hàm JavaScript, biến nó thành một "viên gạch" (ví dụ: Button, Avatar).
Importing and Exporting Components: Học cách tách các component ra từng file riêng biệt (như Button.js, Header.js) để code gọn gàng, rồi ghép (import) chúng lại với nhau ở file chính.
Writing Markup with JSX & JavaScript in JSX: Bạn sẽ thấy JSX thú vị thế nào. Bạn có thể chèn các biến như {userName}, các phép toán {1 + 1}, hoặc gọi hàm {formatDate(date)} thẳng vào giữa mã HTML.
Passing Props to a Component (Truyền dữ liệu Props): Nếu bạn có 10 cái nút bấm giống hệt nhau về màu sắc nhưng khác nhau về chữ hiển thị (Nút "Lưu", Nút "Xóa"). Props giúp bạn truyền chữ "Lưu" hoặc "Xóa" vào trong component Button.
Conditional Rendering (Render có điều kiện): Dùng câu lệnh if hoặc toán tử ba ngôi ? : để ẩn/hiện giao diện. Ví dụ: Nếu giỏ hàng trống thì hiện "Không có sản phẩm", nếu có thì hiện danh sách.
Rendering Lists (Render danh sách): Hàm .map() thần thánh! Bạn sẽ dùng nó để biến một mảng dữ liệu (Array) lấy từ database thành hàng loạt các thẻ <li> hoặc <Card> trên màn hình.
Keeping Components Pure (Giữ component thuần khiết): Quy tắc vàng: Một component không được làm thay đổi các biến nằm ngoài nó trước khi nó hiển thị xong. Học cách tránh các lỗi logic ngớ ngẩn do "side-effects".
Your UI as a Tree (UI là một cái cây): Hình dung toàn bộ trang web của bạn như một cái cây gia phả. Có Component ông nội (App), Component cha (Header, Body) và các Component con cháu.
2. Adding Interactivity (Thêm sự tương tác)
Giao diện đã đẹp rồi, giờ làm sao để bấm vào nó chạy?

Responding to Events (Phản hồi sự kiện): Cách gắn các sự kiện như onClick, onChange, onSubmit vào các thẻ HTML để kích hoạt các hàm JavaScript khi người dùng thao tác.
State: A Component's Memory (State: Bộ nhớ của Component): Nếu bạn dùng biến bình thường let count = 0, khi bạn tăng count, màn hình sẽ KHÔNG thay đổi. Bạn phải học cách dùng useState để nói với React: "Này, dữ liệu thay đổi rồi, vẽ lại màn hình cho tôi!".
Render and Commit (Render và Commit): Quá trình vẽ lại màn hình diễn ra như thế nào? Giống như một người bồi bàn (React) nhận order (State thay đổi), vào bếp (Render), và mang món ăn ra bàn (Commit lên trình duyệt).
State as a Snapshot (State như một bức ảnh chụp): Một khái niệm hơi hack não nhưng cực hay. Khi bạn bấm nút cập nhật State, giá trị của State trong hàm hiện tại không đổi ngay lập tức, mà nó chụp lại một "bức ảnh" cho lần render tiếp theo.
Updating Objects & Arrays in State: Khi state của bạn không phải là một con số đơn giản, mà là một Object (Thông tin user) hoặc một Array (Danh sách giỏ hàng), bạn KHÔNG ĐƯỢC sửa trực tiếp chúng. Bạn phải copy chúng ra một bản mới, sửa trên bản mới, rồi cập nhật lại (gọi là Immutability).
3. Managing State (Quản lý Trạng thái dữ liệu)
Khi trang web to lên (như Facebook, Shopee), State sẽ nằm ngổn ngang. Chương này dạy bạn cách dọn dẹp và tổ chức lại chúng.

Reacting to Input with State: Chuyển đổi tư duy từ "Thao tác trực tiếp với UI" (kiểu jQuery cũ) sang "Mô tả các trạng thái của UI". Ví dụ: Nút bấm có các trạng thái typing, submitting, success, error.
Choosing the State Structure: Dạy bạn cách đừng tạo ra những State thừa thãi. Nếu State fullName có thể tự suy ra từ firstName + lastName, thì đừng tạo State fullName.
Sharing State Between Components (Lifting State Up): Khi hai component con muốn nói chuyện với nhau, chúng không thể tự nói. Chúng phải đưa dữ liệu (State) lên cho component cha chung của cả hai quản lý.
Preserving and Resetting State: Khi nào thì React giữ nguyên dữ liệu trên màn hình, khi nào thì nó xóa trắng? Học cách sử dụng thuộc tính key để ép React xóa và vẽ lại một component từ đầu.
Extracting State Logic into a Reducer (useReducer): Khi một State có quá nhiều hành động phức tạp (như: Thêm việc, Xóa việc, Đánh dấu hoàn thành), thay vì viết nhiều hàm set..., bạn sẽ gom tất cả logic vào một nơi gọi là Reducer.
Passing Data Deeply with Context (useContext): Nếu Component ông nội muốn truyền dữ liệu cho Component chắt, việc truyền qua từng đời (Prop drilling) rất cực. Context tạo ra một "đường hầm" để truyền thẳng dữ liệu xuống dưới.
4. Escape Hatches (Cửa Thoát Hiểm)
React có luật lệ rất nghiêm (như việc cấm thao tác trực tiếp với DOM). Tuy nhiên, thi thoảng bạn vẫn phải "phá luật" để làm những việc đặc biệt. Đây là các cửa thoát hiểm an toàn.

Referencing Values with Refs (useRef): Đôi khi bạn cần lưu một giá trị nào đó (như ID của một bộ đếm giờ setTimeout) nhưng không muốn màn hình bị vẽ lại (render) khi giá trị đó thay đổi. Đó là lúc dùng Ref.
Manipulating the DOM with Refs: Cách duy nhất an toàn để "thò tay" trực tiếp vào HTML (ví dụ: tự động lăn chuột xuống cuối trang, hoặc tự động focus con trỏ vào ô nhập liệu mật khẩu).
Synchronizing with Effects (useEffect): Cực kỳ quan trọng! Dùng để đồng bộ React với các hệ thống không phải React. Ví dụ điển hình nhất: Gọi API để lấy dữ liệu từ Server mỗi khi tải trang.
You Might Not Need an Effect: Dạy bạn cách KHÔNG dùng useEffect bừa bãi. Lập trình viên mới thường dùng useEffect sai cách, làm web chạy chậm đi.
Lifecycle of Reactive Effects: Vòng đời của một Effect: Khi nào nó bắt đầu chạy? Khi nào nó dọn dẹp tàn dư (cleanup) trước khi chạy lại?
Reusing Logic with Custom Hooks: Khi bạn thấy mình viết đi viết lại một đoạn logic có dùng useState và useEffect ở nhiều nơi (ví dụ: logic theo dõi xem người dùng đang online hay offline). Bạn sẽ học cách gom chúng lại thành một hàm riêng do bạn tự đặt tên (ví dụ: useOnlineStatus).
TIP

Tóm tắt Phần 2: Bạn bắt đầu bằng việc xếp gạch (UI), sau đó gắn dây điện (Interactivity), tiếp theo tổ chức bảng điện (Managing State), và cuối cùng là nối đường ống ra bên ngoài (Escape Hatches). Khởi đầu với Components và kết thúc với Custom Hooks!