import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchasedCanceled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchasedContinued}>Continue</Button>
    </Aux>
  );
};


export default orderSummary
