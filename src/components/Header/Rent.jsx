import React from "react";

import { Button, Card } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Rent.css";

const Rent = ({
  id,
  name,
  location,
  beds,
  bathrooms,
  price,
  img,
  date,
  size,
  setFavorites,
  favorites,
  isButton,
}) => {
  const cardData = {
    id,
    name,
    location,
    beds,
    bathrooms,
    price,
    size,
    img,
    date,
  };

  return (
    <>
      <div className="rent">
        <Card className="card-style">
          <div className="img">
            <Card.Img variant="top" src={img} className="img" />
          </div>

          <Card.Body>
            <Card.Text className="text">
              <b>${price}</b>/month
              {isButton ? (
                <Button
                  variant="outline-dark"
                  className="btnn"
                  size="sm"
                  onClick={() => {
                    setFavorites([...favorites, cardData]);
                    toast("Added To Favourite!");
                  }}>
                  <i className="fa-regular fa-heart" />
                </Button>
              ) : null}
            </Card.Text>

            <Card.Title className="name">{name}</Card.Title>

            <Card.Text className="loc">{location}</Card.Text>

            <div className="list">
              <Card.Text className="box">
                <i className="fa-solid fa-bed" />
                {beds} <span>beds</span>
              </Card.Text>
              <Card.Text className="box">
                <i className="fa-solid fa-toilet" /> {bathrooms} Toilet
              </Card.Text>
              <Card.Text className="box">
                <i className="fa-solid fa-layer-group" /> {size} sq. ft.
              </Card.Text>
            </div>
            <Card.Text className="date">Available - {date}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Rent;
