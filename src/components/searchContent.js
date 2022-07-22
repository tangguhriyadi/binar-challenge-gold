import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import { BASE_URL } from "../utils/constant";
import Result from "./result";
import Swal from "sweetalert2";

const SearchContent = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState(null);
  const [show, setShow] = useState(false);
  
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCategory = (e) => {
    if (e.target.value === "Masukan Nama Mobil") {
      setCategory(null);
    } else {
      setCategory(e.target.value);
    }
  };
 
  const handlePrice1 = (e) => {
    setPrice(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const highlight = () => {
    
    setShow(true);
  };
  const offHighlight = () => {
    
    setShow(false);
  };

  const handleSubmit = async () => {
    const deactive = show
    setShow(!deactive)

    if (name.length !== 0 || category.length !== 0 || price.length !== 0) {
      await axios
        .get(BASE_URL)
        .then((res) => {
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
          setResult(result);
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter at least 1 field",
      });
    }
  };
  const styleP = {
    fontSize: "12px",
    width: "220px",
    fontWeight: "300",
    borderRadius: "2px",
  };
  const styleH = {
    fontSize: "14px",
    fontWeight: "700",
  };
  return (
    <Container className="mb-4" style={{ marginTop: "-50px" }}>
      <div
        id="highlight"
        className={show ? "highlight1" : null}
        
        
      >
        <Card className="ps-4 pe-0 pt-3 pb-4">
          {result && (
            <h5 className="mb-3 mt-2" style={styleH}>
              Pencarianmu
            </h5>
          )}
          <Form onBlur={offHighlight} onFocus={highlight} onSubmit={onSubmit}>
            <Row>
              <Col md>
                <Form.Label style={styleP}>Nama Mobil</Form.Label>
                <Form.Control
                  onChange={handleName}
                  className="selectDrop"
                  value={name}
                  type="text"
                  style={styleP}
                  placeholder="Ketik nama/tipe mobil"
                />
              </Col>
              <Col md>
                <Form.Label style={styleP}>Kategori</Form.Label>
                <Form.Select
                  className="selectDrop"
                  onChange={handleCategory}
                  value={category}
                  style={styleP}
                >
                  <option className="placeH form-select-sm">
                    Masukan Kapasitas Mobil
                  </option>
                  <option className="placeH form-select-sm">2 - 4 orang</option>
                  <option className="placeH form-select-sm">4 - 6 orang</option>
                  <option className="placeH form-select-sm">6 - 8 orang</option>
                </Form.Select>
              </Col>
              <Col md>
                <Form.Label style={styleP}>Harga</Form.Label>

                <Form.Select
                  onChange={handlePrice1}
                  value={price}
                  style={styleP}
                  className="selectDrop"
                >
                  <option className="placeH form-select-sm">
                    {" "}
                    Masukan Harga Sewa Mobil
                  </option>
                  <option value="<400000" className="placeH form-select-sm">
                    &lt; Rp.400000
                  </option>
                  <option
                    value="400000-600000"
                    className="placeH form-select-sm"
                  >
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
                    onClick={handleSubmit}
                  >
                    Edit
                  </button>
                </Col>
              ) : (
                <Col md>
                  <Button
                    type="submit"
                    variant="none"
                    className="btn-sewa1"
                    onClick={handleSubmit}
                  >
                    Cari Mobil
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        </Card>
      </div>

      <Row>
        {result && result.map((item) => <Result key={item.id} item={item} />)}
      </Row>
    </Container>
  );
};

export default SearchContent;
