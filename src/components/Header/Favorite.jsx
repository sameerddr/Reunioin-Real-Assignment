import React from "react";

import Rent from "./Rent";

import "./Favourite.css";

const Favorite = ({ favorites }) => {
  return (
    <>
      <div className="fav">
        {favorites?.map(
          ({ id, name, location, beds, bathrooms, price, size, img, date }) => (
            <div className="cardbox" key={id}>
              <Rent
                name={name}
                location={location}
                beds={beds}
                bathrooms={bathrooms}
                price={price}
                size={size}
                img={img}
                date={date}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Favorite;
