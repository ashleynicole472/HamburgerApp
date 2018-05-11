import React from 'react';
import Aux from '../../hoc/Aux';
// import classes from './Layout.css';

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
