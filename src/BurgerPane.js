import React, { Component } from 'react'
import Ingredient from './Ingredient';
import Clear from './Clear'

class BurgerPane extends Component {
  render() {
    return (
        <section className="burger-pane">
            <h1>Burger Pane</h1>
            <Clear />
        </section>
    )
  }
}

export default BurgerPane;