import React, { Component } from "react";
import { Col, Button, Card } from "react-bootstrap";

export default class Result extends Component {
  render() {
    const { item } = this.props;
    const styleP1 = {
      fontSize: "14px",
      fontWeight: "400",
    };
    const styleP2 = {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight:"20px"
    };
    const styleP3 = {
      fontSize: "12px",
      fontWeight: "400",
      backgroundColor:"#5CB85F",
      borderRadius:"2px",
      color:'white',
      height:'48px'
    };
    const styleH = {
      fontSize: "14px",
      fontWeight: "700",
    };
    const num = new Intl.NumberFormat("de-DE", {
      style: "decimal",
      currency: "IDR",
    });
    if (item.length !== 0) {
      return (
        <Col md={4}>
          <Card className="mt-4" style={{ height:"478px" }}>
            <Card.Img
              style={{height:"160px", width:"270px"}}
              variant="top"
              className="mt-2 m-auto"
              src={
                this.props.item.image !== null
                  ? this.props.item.image
                  : "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1655268790869-Innova.png?alt=media"
              }
            />
            <Card.Body className="mt-5">
              <Card.Title className="mb-3 mt-3" style={styleP1}>{item.name}</Card.Title>
              <Card.Subtitle style={styleH} className="mb-3">
                Rp. {num.format(item.price)} / hari
              </Card.Subtitle>
              <Card.Text className="mb-4" style={styleP2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <div className="d-grid">
                <Button className="mt-2" style={styleP3} variant="none" size="md">
                  Pilih Mobil
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    } else if (this.props.length === 0) {
      alert("notfound");
    }
  }
}
