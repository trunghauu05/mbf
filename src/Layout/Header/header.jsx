export function Header() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          padding: 15,
          // background: "linear-gradient( #e4bcbc, #663a3a)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="./favicon.svg" alt="logo" width={24}></img>
            <div style={{ fontWeight: "bold", color: "#cfcece" }}>
              <strong>TECHSHOP</strong>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#cfcece",
            }}
          >
            <div>
              <strong>Trang Chu</strong>
            </div>
            <strong>The Loai</strong>
          </div>
          <div style={{ display: "flex" }}>
            <button
              style={{
                padding: 10,
                background: "linear-gradient(45deg, #484750, #883d3d, #4c2a57)",
                borderRadius: "15px",
                color: "#cfcece",
              }}
            >
              Dang nhap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
