import { Carousel } from "antd";
import { Banner } from "../components/banner";
export function HomePage() {
  return (
    <div
      style={{
        backgroundImage: "url('/stock-market-5120x2880-25578.jpg')",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        maxWidth: "2000px",
        margin: "0 auto",
        paddingTop: "70px",
      }}
    >
      <div style={{ padding: "0 150px 0 150px" }}>
        <Banner></Banner>
      </div>
    </div>
  );
}
