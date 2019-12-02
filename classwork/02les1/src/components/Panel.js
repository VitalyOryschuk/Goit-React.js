import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default Panel;
