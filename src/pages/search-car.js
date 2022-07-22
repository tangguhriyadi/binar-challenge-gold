import React, { Component } from "react";
/* import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; */
import { Footer, /* SearchContent, */ SearchContent } from "../components";
import {Col, Row} from 'react-bootstrap'

export default class Search extends Component {

  render() {
    return (
      <div>
        <div className="containerBanner">
        <Row>
          <Col md={6} className="serviceContent">
            <h2 className="serviceHead">
              <strong>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</strong>
            </h2>
            <p className="serviceText">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
    
          </Col>
          <Col md={6}>
            <img
              className="carBanner"
              src="assets/images/BannerCar.png"
              alt="mobil"
            ></img>
          </Col>
        </Row>
      </div>
        <SearchContent  />
        <Footer />
      </div>
    );
  }
}
