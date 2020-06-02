import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingrediented: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingrediented={this.state.ingrediented}/>
        <BuildControls />
      </Aux>
    )
  }
}

export default BurgerBuilder;