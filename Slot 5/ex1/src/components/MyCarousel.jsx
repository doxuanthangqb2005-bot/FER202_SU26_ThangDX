import Carousel from "react-bootstrap/Carousel";
import { banners } from "../data/bannerData";

function MyCarousel() {
  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.imageURL}
            alt={banner.title}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;