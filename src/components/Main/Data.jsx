import React, { useState, useEffect } from "react";
import axios from "axios";
import Rent from "../Header/Rent";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Data.css";

const Data = ({ favorites, setFavorites }) => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState({
    price: "",
    locname: "",
    date: "",
    type: "",
    search: "",
  });

  const [Originaldata, setOriginaldata] = useState([]);

  // const api = "https://frozen-harbor-02472.herokuapp.com/data";

  const getapi = async () => {
    try {
      const response = await axios.get("db.json");
      setData(response.data);
      setOriginaldata(response.data);
    } catch (error) {
      toast("Error!");
    }
  };
  getapi();

  useEffect(() => {
    getapi();
  }, []);

  const handleSearch = () => {
    let splitPrice = search.price.split("-");

    const filterData = Originaldata.filter((searchvalue) => {
      let date1 = new Date(search.date).getTime();
      let date2 = new Date(searchvalue.date).getTime();

      // Below if conditions i have worked on conditions of filters & if any condition in true then Filterration process will take place

      if (
        // Below i have filtered the house name

        searchvalue.name.toLowerCase().includes(search.search.toLowerCase()) &&
        // Below i have have filtered the location

        searchvalue.location
          .toLowerCase()
          .includes(search.locname.toLowerCase()) &&
        // Filtered the price

        ((parseInt(splitPrice[0]) <= searchvalue.price &&
          parseInt(splitPrice[1]) >= searchvalue.price) ||
          search.price == "") &&
        // Filter House Type

        (searchvalue.type === search.type || search.type === "") &&
        (date1 >= date2 || search.date == "")
      ) {
        return search;
      }
    });
    setData(filterData);
  };

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="data">
        <Container>
          <Row>
            <Col>
              <div>
                <h2>Search Property to Rent</h2>
              </div>
            </Col>
            <Col>
              <input
                type="text"
                placeholder="Enter House Name"
                id="search-input"
                name="search"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="row2">
            <Col>
              <div className="location">
                <h6>Location</h6>
                <input
                  type="text"
                  className="address"
                  placeholder="Enter Address"
                  name="locname"
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col>
              <div className="date">
                <h6>Enter Date </h6>
                <input
                  type="date"
                  id="dateinput"
                  name="date"
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col>
              <div>
                <h6>Price</h6>
                <select id="dropdown" name="price" onChange={handleChange}>
                  <option value="N/A">Price</option>
                  <option value="1000-10000" name="price">
                    $1000-$10000
                  </option>
                  <option value="10001-20000" name="price">
                    $10001-$20000
                  </option>
                  <option value="20001- 40000" name="price">
                    $20001- $40000
                  </option>
                </select>
              </div>
            </Col>
            <Col>
              <div className="property">
                <h6>Property Type</h6>
                <select id="dropdown" name="type" onChange={handleChange}>
                  <option value="House" name="type">
                    House
                  </option>
                  <option value="Cottage" name="type">
                    Cottage
                  </option>
                  <option value="Bangalow" name="type">
                    Bangalow
                  </option>
                  <option value="Building" name="type">
                    Building
                  </option>
                </select>
              </div>
            </Col>
            <Col>
              <Button
                variant="danger"
                className="searchbtn"
                size="sm"
                onClick={handleSearch}>
                Search
              </Button>
            </Col>
          </Row>
        </Container>

        {data.length
          ? data.map(
              ({
                id,
                name,
                location,
                beds,
                bathrooms,
                price,
                img,
                date,
                size,
              }) => (
                <div className="cardbox" key={id}>
                  <Rent
                    id={id}
                    name={name}
                    location={location}
                    beds={beds}
                    bathrooms={bathrooms}
                    price={price}
                    img={img}
                    date={date}
                    size={size}
                    setFavorites={setFavorites}
                    favorites={favorites}
                    isButton
                  />
                </div>
              )
            )
          : "No API Data Found"}
      </div>
      <ToastContainer />
    </>
  );
};

export default Data;
