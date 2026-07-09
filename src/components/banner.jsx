import { Carousel } from "antd";

export function Banner() {
  return (
    <div style={{ padding: "0 100px 0 100px" }}>
      <Carousel
        arrows={true}
        infinite={true}
        autoplay={true}
        autoplaySpeed={4000}
        speed={1000}
        slidesToShow={2}
        slidesToScroll={1}
      >
        <div>
          <div style={{ height: "300px", padding: "0 10px" }}>
            <img
              src="/mine.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ height: "300px", padding: "0 10px" }}>
            <img
              src="/batman.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ height: "300px", padding: "0 10px" }}>
            <img
              src="/sonic.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
