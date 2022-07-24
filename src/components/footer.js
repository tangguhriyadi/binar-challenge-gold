import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import list_item from '../icon/list_item.svg'
import Rec74 from '../icon/Rec74.svg'

export default class Footer extends Component {
  render() {
    const styleP = {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "20px",
    };
    const styleA = {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      marginBottom: "16px",
    };
    const styleB = {
      textDecoration: "none",
      color: "black",
    };
    return (
      <footer>
        <Container className="mt-5">
          <Row>
            <Col md={2}>
              <p style={styleP}>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p style={styleP}>binarcarrental@gmail.com</p>
              <p style={styleP}>081-233-334-808</p>
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
              <h5 style={styleA}>
                <a style={styleB} href="#ourServices">
                  Our Services
                </a>
              </h5>
              <h5 style={styleA}>
                <a style={styleB} href="#whyUs">
                  Why Us
                </a>
              </h5>
              <h5 style={styleA}>
                <a style={styleB} href="#testimonial">
                  Testimonial
                </a>
              </h5>
              <h5 style={styleA}>
                <a style={styleB} href="#faq">
                  FAQ
                </a>
              </h5>
            </Col>
            <Col md={3}>
              <p style={styleP}>Connect with us</p>
              <img
                style={{ marginBottom: "14px" }}
                src={list_item}
                alt="list"
                loading='lazy'
              ></img>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <p style={styleP}>Copyright Binar 2022</p>
              <img
                style={{ marginBottom: "14px" }}
                src={Rec74}
                alt="logo"
                loading='lazy'
              ></img>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
