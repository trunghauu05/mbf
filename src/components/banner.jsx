import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// 1. SỬA LỖI NÚT MŨI TÊN
const CustomLeftArrow = ({ currentSlide, slideCount, onClick }) => (
  <LeftOutlined
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "black",
      fontSize: "30px",
      left: 10,
      zIndex: 2,
      cursor: "pointer",
    }}
  />
);

const CustomRightArrow = ({ currentSlide, slideCount, onClick }) => (
  <RightOutlined
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "black",
      fontSize: "30px",
      right: 10,
      zIndex: 2,
      cursor: "pointer",
    }}
  />
);

export function BannerSlider() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Carousel
        arrows={true}
        prevArrow={<CustomLeftArrow />}
        nextArrow={<CustomRightArrow />}
        slidesToShow={2}
        dots={false}
        autoplay={true}
      >
        <div>
          <div style={{ padding: "0 10px" }}>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src="/stock-market-5120x2880-25578.jpg"
              alt="Banner 1"
            />
          </div>
        </div>

        <div>
          <div style={{ padding: "0 10px" }}>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src="/3.jpg"
              alt="Banner 2"
            />
          </div>
        </div>

        <div>
          <div style={{ padding: "0 10px" }}>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src="/3.jpg"
              alt="Banner 3"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
