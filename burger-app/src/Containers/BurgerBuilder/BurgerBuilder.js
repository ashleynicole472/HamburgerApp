import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredient: {
        salad: 1,
        meat: 1,
        bacon: 2,
        cheese:2,
      }
    }
  }
  render(){
    return(
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder
