export function Header() {
  return (
    <div
      style={{
        padding: 20,
        position: "absolute",
        width: "100%",
        // backgroundColor: "#0068ff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 50,
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img
              src="./sonic.png"
              alt="Logo"
              width="100px"
              style={{ borderRadius: "100%" }}
            ></img>
            <div style={{ fontWeight: "bold", color: "#fff" }}>
              <strong>TECHSHOP</strong>
            </div>
          </div>
          <div
            style={{
              fontWeight: "bold",
              display: "flex",
              gap: 15,
              color: "#fff",
            }}
          >
            <div>TRANG CHU</div>
            <div>THE LOAI</div>
          </div>
        </div>
        <button
          style={{
            padding: 15,
            background:
              "linear-gradient(45deg, #e74e4e, #ec7d51, #e9e63d, #8ce669, #6ddbc3, #502ada, #c702ee)",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          <strong>DANG NHAP</strong>
        </button>
      </div>
    </div>
  );
}
