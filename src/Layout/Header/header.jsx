export function Header() {
  return (
    <div
      style={{
        padding: 20,
        position: "absolute",
        width: "100%",
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 50,
          fontWeight: "bold",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src="./batman.png" alt="LOGO" width="100px"></img>
          <div>
            <strong>TECHSHOP</strong>
          </div>
        </div>
        <div style={{ display: "flex", gap: 15 }}>
          <div>
            <strong>TRANG CHU</strong>
          </div>
          <div>
            <strong>THE LOAI</strong>
          </div>
        </div>
      </div>
      <div>
      <button style={{padding:'15px', borderRadius:'15px', background:'linear-gradient(45deg, #c55757, #261870, #692352', color:'white', fontWeight:'bold'}}>DANG NHAP</button>
      </div>
    </div>
  );
}
