export function Header() {
  return (
    <div
      style={{
        padding: 15,
        backgroundColor: "#115eec",
        display: "flex",
        gap: 12,
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        <img src="/favicon.svg" alt="Logo" width="30px"></img>
        <div style={{ fontWeight: "bold", color: "white" }}>TECH SHOP</div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
          margin: "0 15px 0 15px ",
        }}
      >
        <div style={{ fontWeight: "bold" }}>TRANG CHỦ</div>
        <div style={{ fontWeight: "bold" }}>PHÂN LOẠI</div>
      </div>
      <div>
        <button
          style={{
            padding: "10px 10px",
            background: "linear-gradient(45deg,#3d2ec0,#2f66b9,#9e4681)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 1px 3px 0 rgb(185, 143, 143)",
          }}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
