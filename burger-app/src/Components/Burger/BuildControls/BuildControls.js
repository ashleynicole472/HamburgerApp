import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Bacon_', type: 'bacon'},
  {label: 'Meat__', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},

];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
);

export default buildControls
