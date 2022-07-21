import React, { Component } from "react";
import { Footer, DetailContent } from "../components";
import {Col, Row} from 'react-bootstrap'
import merc from '../icon/merc.svg'

export default class Detail extends Component {
 
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
              src={merc}
              alt="mobil"
            ></img>
          </Col>
        </Row>
      </div>
        <DetailContent  />
        <Footer />
      </div>
    );
  }
}
