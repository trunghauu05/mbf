import { Carousel } from "antd";
export function Banner() {
  const product = [
    { id: 1, name: "Phim BatMan", image: "./batman.png" },
    { id: 2, name: "Phim Sonic", image: "./sonic.png" },
    { id: 3, name: "Phim Iron Man", image: "./batman.png" },
    { id: 4, name: "Phim Spider Man", image: "./sonic.png" },
    { id: 5, name: "Phim Thor", image: "./batman.png" },
    { id: 6, name: "Phim Loki", image: "./sonic.png" },
  ];
  return (
    <div style={{ paddingTop: "95px" }}>
      <Carousel
        arrows={true}
        infinite={true}
        autoplay={true}
        autoplaySpeed={3000}
        speed={1000}
        slidesToShow={2}
        dots={false}
      >
        {product.map((banner) => (
          <div key={banner.id}>
            <div style={{ padding: "0 20px" }}>
              <img
                src={banner.image}
                alt={banner.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
              ></img>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
