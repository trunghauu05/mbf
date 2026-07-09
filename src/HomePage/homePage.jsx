import { Banner } from "../components/banner";

export function HomePage() {
  const product = [
    { id: 1, name: "Phim BatMan", gia: 3000, image: "./batman.png" },
    { id: 2, name: "Phim Sonic", gia: 3000, image: "./sonic.png" },
    { id: 3, name: "Phim Iron Man", gia: 3000, image: "./batman.png" },
    { id: 4, name: "Phim Spider Man", gia: 3000, image: "./sonic.png" },
    { id: 5, name: "Phim Thor", gia: 3000, image: "./batman.png" },
    { id: 6, name: "Phim Loki", gia: 3000, image: "./sonic.png" },
  ];
  const style1 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0",
    width: "100%",
  };
  return (
    <div className="background">
      <Banner></Banner>
      <div
        style={{
          padding: "20px 40px",
          margin: "5px 20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 20,
          }}
        >
          {product.map((item) => (
            <div key={item.id} style={style1}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                ></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontWeight: "bold",
                    padding: "10px",
                    gap: 7,
                  }}
                >
                  <div>Tên Phim: {item.name}</div>
                  <div style={{ color: "#f10707" }}>Giá: {item.gia}$</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
