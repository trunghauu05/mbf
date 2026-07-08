import { Carousel } from "antd";

export function Banner() {
  return (
    
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
        <div
          style={{
            height: "200px",
            // backgroundColor: "#364d79",
            color: "#fff",
            textAlign: "center",
            justifyItems: "center",
          }}
        >
          <img src="/3.jpg"></img>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "200px",
            // backgroundColor: "#364d79",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Slide 2
        </div>
      </div>
      <div>
        <div
          style={{
            height: "200px",
            // backgroundColor: "#364d79",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Slide 3
        </div>
      </div>
    </Carousel>
  );
}
