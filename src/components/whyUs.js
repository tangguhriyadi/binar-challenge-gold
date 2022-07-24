import React, { Component } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import complete from "../icon/complete.svg";
import icon_price from "../icon/icon_price.svg";
import icon_24hrs from "../icon/icon_24hrs.svg";
import icon_professional from "../icon/icon_professional.svg";
export default class WhyUs extends Component {
  render() {
    return (
      <div className="whyContainer" id="whyUs">
        <h2 className="whyHead">Why Us ?</h2>
        <p className="whyKet">Mengapa Harus Memilih Binar Car</p>
        <Container fluid style={{ padding: "0", marginTop: "40px" }}>
          <Row className="whyItem">
            <Col xl={3} className="whyCol">
              <Card
                className="responsiveCard"
                style={{ width: "16rem", padding: "0" }}
              >
                <Card.Body>
                  <Card.Title className="mb-0">
                    <img src={complete} alt="complete" loading="lazy"></img>
                  </Card.Title>
                  <Card.Subtitle className="mb-2" style={{ marginTop: "16px" }}>
                    <strong style={{ fontSize: "16px" }}>Mobil Lengkap</strong>
                  </Card.Subtitle>
                  <Card.Text className="whyText">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} className="whyCol">
              <Card
                className="responsiveCard"
                style={{ width: "16rem", padding: "0" }}
              >
                <Card.Body>
                  <Card.Title className="mb-0">
                    <img src={icon_price} alt="price" loading="lazy"></img>
                  </Card.Title>
                  <Card.Subtitle className="mb-2" style={{ marginTop: "16px" }}>
                    <strong style={{ fontSize: "16px" }}>Harga Murah</strong>
                  </Card.Subtitle>
                  <Card.Text className="whyText">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} className="whyCol">
              <Card
                className="responsiveCard"
                style={{ width: "16rem", padding: "0" }}
              >
                <Card.Body>
                  <Card.Title className="mb-0">
                    <img src={icon_24hrs} alt="icon_24hrs" loading="lazy"></img>
                  </Card.Title>
                  <Card.Subtitle className="mb-2" style={{ marginTop: "16px" }}>
                    <strong style={{ fontSize: "16px" }}>Layanan 24 Jam</strong>
                  </Card.Subtitle>
                  <Card.Text className="whyText">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} className="whyCol">
              <Card
                className="responsiveCard"
                style={{ width: "16rem", padding: "0" }}
              >
                <Card.Body>
                  <Card.Title className="mb-0">
                    <img
                      src={icon_professional}
                      alt="icon_professional"
                      loading="lazy"
                    ></img>
                  </Card.Title>
                  <Card.Subtitle className="mb-2" style={{ marginTop: "16px" }}>
                    <strong style={{ fontSize: "16px" }}>
                      Sopir profesional
                    </strong>
                  </Card.Subtitle>
                  <Card.Text className="whyText">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
