import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import { BASE_URL } from "../utils/constant";
import Result from "./result";
import Swal from "sweetalert2";
import Select from "react-select";

const SearchContent = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const categoryList = [
    {
      value: "2 - 4 orang",
      label: "2 - 4 orang",
    },
    {
      value: "4 - 6 orang",
      label: "4 - 6 orang",
    },
    {
      value: "6 - 8 orang",
      label: "6 - 8 orang",
    },
  ];
  const [price, setPrice] = useState("");
  const PriceList = [
    {
      value: "<400000",
      label: "<Rp.400.000",
    },
    {
      value: "400000-600000",
      label: "Rp.400.000 - Rp.600.000",
    },
    {
      value: ">600000",
      label: ">Rp.600.000",
    },
  ];
  const StatusList = [
    {
      value: null,
      label: "Disewa",
    },
  ];
  const [result, setResult] = useState(null);
  const [show, setShow] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.value);
  };

  const handlePrice = (e) => {
    setPrice(e.value);
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
    const deactive = show;
    setShow(!deactive);

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
        title: "Maaf",
        text: "Masukan minimal 1 kolom",
      });
    }
  };
  const styleP = {
    fontSize: "12px",
    width: "208px",
    fontWeight: "300",
    borderRadius: "2px",
    paddingTop: "9px",
    paddingBottom: "9px",
  };
  const styleP2 = {
    fontSize: "12px",
    width: "220px",
    fontWeight: "300",
    borderRadius: "2px",
  };
  const styleH = {
    fontSize: "14px",
    fontWeight: "700",
  };

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#C9E7CA",
        primary: "#5CB85F",
      },
    };
  };
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "208px",
      height: "32px",
      borderRadius: "2px",
    }),
    option: (styles) => {
      return { ...styles };
    },
    indicatorSeparator: (styles) => ({ ...styles, opacity: "0" }),
    menu: (styles) => ({ ...styles, width: "208px" }),
  };
  return (
    <Container className="mb-4" style={{ marginTop: "-50px" }}>
      <div id="highlight" className={show ? "highlight1" : null}>
        <Card className="ps-4 pe-0 pt-3 pb-4">
          {result && (
            <h5 className="mb-3 mt-2" style={styleH}>
              Pencarianmu
            </h5>
          )}
          <Form onBlur={offHighlight} onFocus={highlight} onSubmit={onSubmit}>
            <Row>
              <Col md>
                <Form.Label style={styleP2}>Nama Mobil</Form.Label>
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
                <Form.Label style={styleP2}>Kategori</Form.Label>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "300",
                    borderRadius: "2px",
                  }}
                >
                  <Select
                    styles={colorStyles}
                    theme={customTheme}
                    options={categoryList}
                    onChange={handleCategory}
                    placeholder="Masukan Kapasistas"
                    isSearchable
                    autoFocus
                  />
                </div>
              </Col>
              <Col md>
                <Form.Label style={styleP2}>Harga</Form.Label>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "300",
                    borderRadius: "2px",
                  }}
                >
                  <Select
                    styles={colorStyles}
                    theme={customTheme}
                    options={PriceList}
                    onChange={handlePrice}
                    placeholder="Masukan Harga Sewa"
                    isSearchable
                    autoFocus
                  />
                </div>
              </Col>
              <Col md>
                <Form.Label style={styleP2}>Status</Form.Label>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "300",
                    borderRadius: "2px",
                  }}
                >
                  <Select
                    styles={colorStyles}
                    theme={customTheme}
                    options={StatusList}
                    placeholder="Disewa"
                    isSearchable
                    autoFocus
                  />
                </div>
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
                    style={{ marginTop: "30px" }}
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
