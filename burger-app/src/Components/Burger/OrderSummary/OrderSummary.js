import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients).map(igKey => {
      return (<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                {props.ingredients[igKey]}
              </li>)
    });
  return(
    <Aux>
      <h3>Order Summary:</h3>
      <p>Your scrumptious burger incudes:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};


export default orderSummary
