import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ imgUrl, alt, name, price }) => (
  <>
    <img src={imgUrl} alt={alt} width="480" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </>
);

Product.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;
