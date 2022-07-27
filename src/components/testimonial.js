import React, { useRef } from "react";
import Slider from "react-slick";
import { Card, Container, Col, Row } from "react-bootstrap";


const Testimonial = () => {
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "320px",
    slidesToShow: 1,
    slideToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const style = {
    width: "18rem",
  };
  const strongP = {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
  };
  const strongH = {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "36px",
    marginBottom: "20px",
  };
  return (
    <Container id="testimonial" className="mt-5" fluid>
      <h2 className="text-center" style={strongH}>
        Testimonial
      </h2>
      <p className="text-center" style={strongP}>
        {" "}
        Berbagai review positif dari para pelanggan kami
      </p>
      <Slider ref={sliderRef} {...settings} className="mt-5">
        <Card md={12} style={style} className="textcard">
          <Card.Body>
            <Row>
              <Col
                className="d-grid justify-content-center text-center mt-5"
                md={4}
              >
                <img
                  src="assets/images/john.png"
                  alt="rate"
                  loading="lazy"
                ></img>
              </Col>
              <Col className="mt-4" md={8}>
                <img
                  className="stars"
                  src="assets/images/Rate.png"
                  alt="rate"
                  loading="lazy"
                ></img>
                <p className="mt-2" style={strongP}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee 32, Bromo</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card md={12} style={style} className="textcard">
          <Card.Body>
            <Row>
              <Col
                className="d-grid justify-content-center text-center mt-5"
                md={4}
              >
                <img
                  src="assets/images/dee.png"
                  alt="rate"
                  loading="lazy"
                ></img>
              </Col>
              <Col className="mt-4" md={8}>
                <img
                  className="stars"
                  src="assets/images/Rate.png"
                  alt="rate"
                ></img>
                <p className="mt-2" style={strongP}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee 32, Bromo</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card md={12} style={style} className="textcard">
          <Card.Body>
            <Row>
              <Col
                className="d-grid justify-content-center text-center mt-5"
                md={4}
              >
                <img src="assets/images/john.png" alt="rate"></img>
              </Col>
              <Col className="mt-4" md={8}>
                <img
                  className="stars"
                  src="assets/images/Rate.png"
                  alt="rate"
                  loading="lazy"
                ></img>
                <p className="mt-2" style={strongP}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee 32, Bromo</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card md={12} style={style} className="textcard">
          <Card.Body>
            <Row>
              <Col
                className="d-grid justify-content-center text-center mt-5"
                md={4}
              >
                <img
                  src="assets/images/dee.png"
                  alt="rate"
                  loading="lazy"
                ></img>
              </Col>
              <Col className="mt-4" md={8}>
                <img
                  className="stars"
                  src="assets/images/Rate.png"
                  alt="rate"
                  loading="lazy"
                ></img>
                <p className="mt-2" style={strongP}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee 32, Bromo</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Slider>
      <div xs={4} className="text-center mt-4 testimonials">
        <img
          className="me-4 testimonialArrow1"
          src="assets/images/Leftbutton.png"
          alt="left"
          style={{ cursor: "pointer" }}
          onClick={() => sliderRef.current.slickPrev()}
        ></img>

        <img
          className=" testimonialArrow2"
          src="assets/images/Rightbutton.png"
          alt="right"
          style={{ cursor: "pointer" }}
          onClick={() => sliderRef.current.slickNext()}
        ></img>
      </div>
    </Container>
  );
};

export default Testimonial;
