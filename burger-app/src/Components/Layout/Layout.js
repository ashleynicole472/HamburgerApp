import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
        state = {
            showSideDrawer: true
        }

    showSideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render(){
        return(
            // Aux is created to allow this file to have a wrapping root element
            <Aux>
              <Toolbar />
              <SideDrawer closed={this.showSideDrawerClosedHandler}/>
              <main className={classes.content}>
                {this.props.children}
              </main>
            </Aux>
        );
    }
}

export default Layout;
