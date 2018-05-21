import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  // Aux is created to allow this file to have a wrapping root element
  <Aux>
    <div> sideDrawer, backDrop</div>
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
