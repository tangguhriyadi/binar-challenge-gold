import React, { Component } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

export default class SearchContent extends Component {
  render() {
    const styleP = {
        fontSize:'12px',
        width:'220px',
        fontWeight:'300'
    }
    return (
        
      <Container className="mb-4" style={{marginTop:"-50px"}}>
        <Card className="ps-4 pe-0 pt-3 pb-4">
        <Form >
          <Row /* className="d-flex justify-content-center" */ >
            <Col md >
            <Form.Label style={styleP}>Nama Mobil</Form.Label>
              <Form.Control type="text" style={styleP} placeholder="Ketik nama/tipe mobil" />
            </Col>
            <Col md >
            <Form.Label style={styleP}>Kategori</Form.Label>
            <Form.Select style={styleP}>
            <option >Masukan Kapasitas Mobil</option>
                <option class="placeH">2 - 4 orang</option>
                <option class="placeH">4 - 6 orang</option>
                <option class="placeH">6 - 8 orang</option>
                
              </Form.Select>
            </Col>
            <Col md >
            <Form.Label style={styleP}>Harga</Form.Label>
              
              <Form.Select style={styleP}  >
              <option  >Masukan harga Sewa Mobil per Hari</option>
                <option class="placeH"> &lt; Rp.400.000</option>
                <option class="placeH">Rp.400.000 - Rp.600.000</option>
                <option class="placeH"> &gt; Rp.400.000</option>
                
              </Form.Select>
            </Col>
            <Col md >
            <Form.Label style={styleP}>Status</Form.Label>
            <Form.Select style={styleP} >
                <option>Disewa</option>
              </Form.Select>
            </Col>
            <Col md >
            <Button
            className="btn-sewa1"
            >Cari Mobil</Button>
            </Col>
          </Row>
        </Form>
        </Card>
       
      </Container>
    );
  }
}
