import { MobileOutlined, LaptopOutlined } from "@ant-design/icons";
import { BannerSlider } from "../components/banner";

export function HomePage() {
  return (
    <div
      style={{
        /* --- Phần Hình Ảnh Nền --- */
        backgroundImage: "url('/stock-market-5120x2880-25578.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

        /* --- Phần Khung Bố Cục --- */
        width: "100%",
        maxWidth: "2000px",
        margin: "0 auto",
        minHeight: "100vh",

        /* --- Phần Ép Chữ Vào Giữa Màn Hình --- */
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: 20,
          background: "linear-gradient(to right, #66647a, #5906ff)",
          marginTop: 5,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <MobileOutlined style={{ fontSize: "100px" }} />
            <div style={{ marginTop: "10px" }}>Điện thoại di động</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <LaptopOutlined style={{ fontSize: "100px" }}></LaptopOutlined>
            <div>Laptop</div>
          </div>
        </div>
        <div>
          <BannerSlider></BannerSlider>
        </div>
      </div>
    </div>
  );
}
