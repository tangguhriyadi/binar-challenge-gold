import axios from "axios";
import React, { Component } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { BASE_URL } from "../utils/constant";
import Result from "./result";
import Swal from 'sweetalert2'


export default class SearchContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "",
      price: "",
      result: null,
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
  handlePrice1 = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  /* changeImage = (val) => {
    if(val.image === null){
      val.image = 'https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1655268790869-Innova.png?alt=media'
    }
  } */

  handleSubmit = async () => {
    if (
      this.state.name.length !== 0 ||
      this.state.category.length !== 0 ||
      this.state.price.length !== 0
    ) {
      await axios
        .get(BASE_URL)
        .then((res) => {
          const { name, category, price } = this.state;
          const result = res.data;

          if (price === ">600000") {
            const newResultName = result.filter(function (e) {
              return (
                e.name.toLowerCase().includes(name.toLowerCase()) &&
                e.category.includes(category) &&
                /* (e.price) >= (parseInt(price.slice(-6))) && */
                e.price > 600000
              );
            });
            return newResultName;
          } else if (price === "<400000") {
            const newResultName = result.filter(function (e) {
              return (
                e.name.toLowerCase().includes(name.toLowerCase()) &&
                e.category.includes(category) &&
                /* (e.price) >= (parseInt(price.slice(-6))) && */
                e.price < 400000
              );
            });
            return newResultName;
          } else if (price === "400000-600000") {
            const newResultName = result.filter(function (e) {
              return (
                e.name.toLowerCase().includes(name.toLowerCase()) &&
                e.category.includes(category) &&
                /* (e.price) >= (parseInt(price.slice(-6))) && */
                e.price < 600000 &&
                e.price >= 400000
              );
            });
            return newResultName;
          } else {
            const newResultName = result.filter(function (e) {
              return (
                e.name.toLowerCase().includes(name.toLowerCase()) &&
                e.category.includes(category)
              );
            });
            return newResultName;
          }
        })
        .then((res) => {
          const result = res;
          this.setState({
            result,
          });
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter at least 1 field',
      })
    }
  };

  render() {
    const styleP = {
      fontSize: "12px",
      width: "220px",
      fontWeight: "300",
    };
    const styleH = {
      fontSize: "14px",
      fontWeight: "700",
    };
    const { name, category, price, result } = this.state;

    return (
      <Container className="mb-4" style={{ marginTop: "-50px" }}>
        <Card className="ps-4 pe-0 pt-3 pb-4" >
          {result && (
            <h5 className="mb-3 mt-2" style={styleH}>
              Pencarianmu
            </h5>
          )}
          <Form onSubmit={this.onSubmit}>
            <Row >
              <Col md>
                <Form.Label style={styleP}>Nama Mobil</Form.Label>
                <Form.Control className="selectDrop"
                  onChange={this.handleName}
                  value={name}
                  type="text"
                  style={styleP}
                  placeholder="Ketik nama/tipe mobil"
                />
              </Col>
              <Col md>
                <Form.Label style={styleP}>Kategori</Form.Label>
                <Form.Select className="selectDrop "
                  onChange={this.handleCategory}
                  value={category}
                  style={styleP}
                >
                  <option className="placeH form-select-sm">Masukan Kapasitas Mobil</option>
                  <option className="placeH form-select-sm">2 - 4 orang</option>
                  <option className="placeH form-select-sm">4 - 6 orang</option>
                  <option className="placeH form-select-sm">6 - 8 orang</option>
                </Form.Select>
               
                
              </Col>
              <Col md>
                <Form.Label style={styleP}>Harga</Form.Label>

                <Form.Select
                  onChange={this.handlePrice1}
                  value={price}
                  style={styleP}
                  className="selectDrop"
                >
                  <option className="placeH form-select-sm"> Masukan Harga Sewa Mobil per Hari</option>
                  <option value="<400000" className="placeH form-select-sm">
                    &lt; Rp.400000
                  </option>
                  <option value="400000-600000" className="placeH form-select-sm">
                    Rp.400.000 - Rp.600.000
                  </option>
                  <option value=">600000" className="placeH form-select-sm">
                    &gt; Rp.600.000
                  </option>
                </Form.Select>
              </Col>
              <Col md>
                <Form.Label style={styleP}>Status</Form.Label>
                <Form.Select className="selectDrop" style={styleP}>
                  <option className="placeH form-select-sm">Disewa</option>
                </Form.Select>
              </Col>
              {result ? (
                <Col md>
                  <button
                  variant="outline-primary"
                  className="btn-sewa2 outline-primary"
                  onClick={this.handleSubmit}
                >
                  Edit
                </button>
                </Col>
                
              ) : 
              <Col md>
                <Button
                  variant="none"
                  className="btn-sewa1"
                  onClick={this.handleSubmit}
                >
                  Cari Mobil
                </Button>
              </Col>
              }
              
            </Row>
          </Form>
        </Card>
        <Row>
          {result &&
            result.map((item) => (
              <Result key={item.id} item={item} />
            ))}
        </Row>
      </Container>
    );
  }
}
