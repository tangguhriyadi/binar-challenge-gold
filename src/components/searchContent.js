import axios from "axios";
import React, { Component } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import { BASE_URL } from "../utils/constant";

export default class SearchContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "",
      price: "",
      result: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleCategory = (e) => {
    if (e.target.value === "Masukan Nama Mobil") {
        this.setState({
            category: null,
          });
    } else {
      this.setState({
        category: e.target.value,
      });
    }
  };
  handlePrice = (e) => {
    if (e.target.value === "Masukan Harga Sewa Mobil per Hari") {
        this.setState({
            price: null,
          });
    } else {
      this.setState({
        price: e.target.value,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  handleSubmit = async () => {
    if (
      this.state.name.length !== 0 ||
      this.state.category.length !== 0 ||
      this.state.price.length !== 0
    ) {
      await axios
        .get(BASE_URL)
        .then((res) => {
          const { name } = this.state;
          const result = res.data;
          const newResultName = result.filter(function (e) {
            return (e.name.toLowerCase() === name.toLowerCase()) 
          });
          return newResultName;
        })
        /* .then((res) => {
            const { category } = this.state;
            const result = res
            const newResultCategory = result.filter(function(e){
                return Object.keys(e).some(i => {
                    return e[i].toString().toLowerCase().includes(category)
                })
            })
            return newResultCategory
        }) */
        .then((res) => {
          const result = res;
          this.setState({
            result,
          });
          console.log(res);
        });
    } else {
      alert("please enter the empty field");
    }
    /* console.log(this.state) */
  };

  render() {
    const styleP = {
      fontSize: "12px",
      width: "220px",
      fontWeight: "300",
    };
    const { name, category, price } = this.state;
    return (
      <Container className="mb-4" style={{ marginTop: "-50px" }}>
        <Card className="ps-4 pe-0 pt-3 pb-4">
          <Form onSubmit={this.onSubmit}>
            <Row /* className="d-flex justify-content-center" */>
              <Col md>
                <Form.Label style={styleP}>Nama Mobil</Form.Label>
                <Form.Control
                  onChange={this.handleName}
                  value={name}
                  type="text"
                  style={styleP}
                  placeholder="Ketik nama/tipe mobil"
                />
              </Col>
              <Col md>
                <Form.Label style={styleP}>Kategori</Form.Label>
                <Form.Select
                  onChange={this.handleCategory}
                  value={category}
                  style={styleP}
                >
                  <option className="placeH">Masukan Nama Mobil</option>
                  <option className="placeH">2 - 4 orang</option>
                  <option className="placeH">4 - 6 orang</option>
                  <option className="placeH">6 - 8 orang</option>
                </Form.Select>
              </Col>
              <Col md>
                <Form.Label style={styleP}>Harga</Form.Label>

                <Form.Select
                  onChange={this.handlePrice}
                  value={price}
                  style={styleP}
                >
                  <option>Masukan Harga Sewa Mobil per Hari</option>
                  <option className="placeH" >
                   
                    &lt; Rp.400.000
                  </option>
                  <option className="placeH" >
                    Rp.400.000 - Rp.600.000
                  </option>
                  <option className="placeH" >
                 
                    &gt; Rp.400.000
                  </option>
                </Form.Select>
              </Col>
              <Col md>
                <Form.Label style={styleP}>Status</Form.Label>
                <Form.Select style={styleP}>
                  <option>Disewa</option>
                </Form.Select>
              </Col>
              <Col md>
                <Button className="btn-sewa1" onClick={this.handleSubmit}>
                  Cari Mobil
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    );
  }
}
