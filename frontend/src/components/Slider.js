import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel className="slider">
      <Carousel.Item>
        <img
          className="d-block w-100 mt-5"
          src="assets/images/slider/slider-32.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="slider-txt">
          <h1 className="slider-title">Hope</h1>
          <p>Empowering lives, transforming communities with compassion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mt-5"
          src="assets/images/slider/slider-5.webp"
          alt="Second slide"
        />
        <Carousel.Caption className="slider-txt">
          <h1 className="slider-title">Medical Care</h1>
          <p>
            Providing accessible, dignified healthcare to nurture wellness and
            healing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mt-5"
          src="assets/images/slider/slider-2.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption className="slider-txt">
          <h1 className="slider-title">Spiritual Development</h1>
          <p>
            Guiding spiritual journeys, fostering inner peace and purposeful
            growth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
