import React, { Component } from "react";
import "../App.css";
import { Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'


export default class Banner extends Component {
  render() {
    return (
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
            <Button
            className="btn-sewa"
            as={Link}
            to='/search'
            >Mulai Sewa Mobil</Button>
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
    );
  }
}