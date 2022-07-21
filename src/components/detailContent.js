import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Accordion, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import fi_users from "../icon/fi_users.svg";


export const DetailContent = () => {
  const num = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    currency: "IDR",
  });
  const { id } = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + id)
      .then((res) => {
        const result = res.data;
        setState(result);
      })
      .catch((err) => console.log(err));
  });

  const styleP1 = {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "175%",
  };
  const styleP2 = {
    fontSize: "12px",
    fontWeight: "300",
    lineHeight: "18px",
  };
  const styleH = {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "20px",
  };

  return (
    <>
      <Container className="mb-4" style={{ marginTop: "-50px" }}>
        <Card className="ps-4 pt-3 pe-4 pb-4">
          <h5 className="mb-3 mt-2" style={styleH}>
            Pencarianmu
          </h5>

          <Form>
            <Row>
              <Col md={3}>
                <Form.Label className="text-muted" style={styleP2}>Nama Mobil</Form.Label>
                
                <Form.Control className="cobs" style={{borderRadius:"2px", backgroundColor:'#D0D0D0'}} type="text" disabled />
              </Col>
              <Col md={3}>
                <Form.Label className="text-muted" style={styleP2}>Kategori</Form.Label>
                <Form.Select className="select1" style={{borderRadius:"2px", backgroundColor:'#D0D0D0'}} type="text" disabled></Form.Select>
              </Col>
              <Col md={3}>
                <Form.Label className="text-muted" style={styleP2}>Harga Sewa Per Hari</Form.Label>
                <Form.Select className="select2" style={{borderRadius:"2px", backgroundColor:'#D0D0D0'}} type="text" disabled></Form.Select>
              </Col>
              <Col md={3}>
                <Form.Label className="text-muted" style={styleP2}>Status</Form.Label>
                <Form.Select className="select3" style={{borderRadius:"2px", backgroundColor:'#D0D0D0'}} type="text" disabled></Form.Select>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
      <Container>
        <Row>
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-3" style={styleH}>
                  Tentang Paket
                </Card.Title>

                <h3 style={styleH}>Include</h3>
                <ul className="text-muted" style={styleP1}>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h3 style={styleH}>Exclude</h3>
                <ul className="text-muted" style={styleP1}>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>

                <Accordion defaultActiveKey={["0"]} flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header id="accor">
                      <h2 style={styleH}>Refund, Reschedule, Overtime</h2>{" "}
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ paddingLeft: "0", paddingRight: "0" }}
                    >
                      <ul className="text-muted" style={styleP1}>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  state.image
                    ? state.image
                    : "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1655268790869-Innova.png?alt=media"
                }
                alt={state.name}
              />
              <Card.Body>
                <Card.Title style={styleH}>{state.name}</Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: "10px", fontWeight: "700" }}
                >
                  <img src={fi_users} alt="users"></img>{" "}
                  {state.category === "small" ? "4 - 6 orang" : state.category}
                </Card.Subtitle>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={styleH}>Total</div>
                  <div style={styleH}>Rp. {num.format(state.price)}</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       
      </Container>
    </>
  );
};
