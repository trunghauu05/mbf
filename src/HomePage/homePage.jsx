import { Banner } from "../components/banner";
export function HomePage() {
  return (
    <div
      style={{
        backgroundImage: "url('/stock.jpg')",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        maxWidth: "2000px",
        margin: "0 auto",
        paddingTop: "95px",
      }}
    >
      <Banner></Banner>
    </div>
  );
}
