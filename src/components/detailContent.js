import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

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

  return (
    <Container>
      <Row>
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title>Tentang Paket</Card.Title>

              <h3>Include</h3>
              <ul>
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <h3>Exclude</h3>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>

              <Accordion defaultActiveKey={['0']} flush alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header id="accor">
                    <h2>Refund, Reschedule, Overtime</h2>{" "}
                  </Accordion.Header>
                  <Accordion.Body
                    style={{ paddingLeft: "0", paddingRight: "0" }}
                  >
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
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
            <Card.Img variant="top"  src={state.image ? state.image : "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1655268790869-Innova.png?alt=media"} alt={state.name} />
            <Card.Body>
              <Card.Title>{state.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {state.category === 'small' ? ('4 - 6 orang') : (state.category) }
              </Card.Subtitle>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Total</div>
                <div>Rp. {num.format(state.price)}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
