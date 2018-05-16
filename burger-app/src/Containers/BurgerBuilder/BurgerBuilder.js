import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES =  {
  lettuce: 0.5,
  meat: 1.5,
  bacon: 1.4,
  cheese: 0.5
}

const INGREDIENT_CALORIES = {
  lettuce: 5.0,
  meat: 420.0,
  bacon: 43.0,
  cheese: 113.0
}

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        lettuce: 0,
        meat: 0,
        bacon: 0,
        cheese:0,
      },
      totalPrice: 3,
      totalCal: 120,
      // puchasable: true
    }
  }

  // updatePurchaseStae = () => {
  //   const ingredients = {
  //     ...this.state.ingredients
  //   };
  //   const sum = Object.key(ingredients)
  //     .map(igKey =>{
  //       return ingredients[igKey];
  //     }).reduce((sum, el) => {
  //       return sum + el;
  //     },0);
  //     this.setState({puchasable: sum < 0})
  // }

  addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount+1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      let oldPrice = this.state.totalPrice;
      const newPrice = this.state.totalPrice + priceAddition;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

      const oldCalories = this.state.ingredients[type];
      let updatedCals= oldCalories + 1;
      const updatedCalories = {
        ...this.state.ingredients
      };
      updatedCalories[type] = updatedCals;
      const caloriesAddition = INGREDIENT_CALORIES[type];
      let oldCals = this.state.totalCal;
      const newCals = this.state.totalCal + caloriesAddition;
      this.setState({totalCal: newCals, ingredients: updatedCalories});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
      return;
    }
    const updatedCount = oldCount-1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    let oldPrice = this.state.totalPrice;
    const newPrice = this.state.totalPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    console.log(this.state.totalPrice);

    const oldCalories = this.state.ingredients[type];
    let updatedCals= oldCalories - 1;
    const updatedCalories = {
      ...this.state.ingredients
    };
    updatedCalories[type] = updatedCals;
    const caloriesAddition = INGREDIENT_CALORIES[type];
    let oldCals = this.state.totalCal;
    const newCals = this.state.totalCal - caloriesAddition;
    this.setState({totalCal: newCals, ingredients: updatedCalories});
  }

  render(){
    return(
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          caloriesAdded={this.addCaloriesHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          calories={this.state.totalCal}
          puchasable={this.state.puchasable}
          />
      </Aux>
    );
  }
}
// calories={() => props.caloriesAdded(ctrl.type)}
export default BurgerBuilder
