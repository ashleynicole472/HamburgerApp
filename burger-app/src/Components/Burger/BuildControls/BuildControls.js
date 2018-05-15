import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},

];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Total Price: $ {props.price.toFixed()}</p>
    <p>Total Calories: {props.calories}</p>
      {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={()=> props.ingredientRemoved(ctrl.type)} />
      ))}
    </div>
);

export default buildControls
