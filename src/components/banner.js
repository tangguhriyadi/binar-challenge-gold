import React, { Component } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

export default class Banner extends Component {
  render() {
    return (
      <div className="containerBanner">
        <Row>
          <Col  md={6} className="serviceContent">
            <h2 className="serviceHead">
              <strong>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</strong>
            </h2>
            <p className="serviceText">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <div className="btn-sewa">Mulai Sewa Mobil</div>
          </Col>
          <Col  md={6}>
            <img
              className="carBanner"
              src="assets/images/BannerCar.png"
              alt="mobil"
            ></img>
          </Col>
        </Row>
      </div>
    );
  }
}
