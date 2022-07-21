import React, { Component } from "react";
import "../App.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import merc from '../icon/merc.svg'


export default class Banner extends Component {
  render() {
    return (
      <Container md={12} className="containerBanner" fluid>
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
            variant="none"
            className="btn-sewa"
            as={Link}
            to='/search'
            >Mulai Sewa Mobil</Button>
          </Col>
          <Col md={6}>
            <img
              className="carBanner"
              src={merc}
              alt="mobil"
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}