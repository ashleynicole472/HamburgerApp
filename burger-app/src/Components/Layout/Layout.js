import React from 'react';
import Aux from '../../hoc/Aux'

const layout = (props) => (
  // Aux is created to allow this file to have a wrapping root element
  <Aux>
    <div>Toolbar, sideDrawer, backDrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
