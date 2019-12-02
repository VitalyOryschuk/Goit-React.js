import React from 'react';

import Product from './Product';
import Panel from './Panel';
import Profile from './Profile';

const App = () => (
  <>
    <Panel title="Person">
      <Profile name="Vitaly" email="ups@gmail.com" />
    </Panel>
    <Product
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos"
      name="Tacos With Lime"
      price={10.15}
    />
    <Product
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      alt="Fries and Burger"
      name="Fries and Burger"
      price={14.29}
    />
  </>
);

export default App;
