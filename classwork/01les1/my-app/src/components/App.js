import React from "react";
import Product1 from "./Product1/Product1";
import Product2 from "./Product2/Product2";
import Mailbox from "./Mailbox/Mailbox";
import Techlist from "./Techlist/Techlist";
import Button from "./Button/Button";

const url =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

const price = 10.99;

const technologies = [
  {
    id: "id-1",
    name: "JavaScript"
  },
  {
    id: "id-2",
    name: "Rcvcvcvcvt"
  },
  {
    id: "id-3",
    name: "React Router"
  },
  {
    id: "id-4",
    name: "1111111"
  }
];

const App = () => {
  return (
    <>
      {" "}
      <Button />{" "}
      {/* <
          Techlist items = {
            technologies
          }
          />

          <
          Mailbox name = "Vitalii"
          unreadMessages = {
            []
          }
          />

          <
          Product1 productUrl = {
            url
          }
          productPrice = {
            400
          } >
          Hello world <
          /Product1>

          <
          Product2 product2Alt = "Fries and Burger" / >
          <
          /> */}
    </>
  );
};

export default App;
