import React, { Component } from 'react'
import Auxi from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'


const INGREDIENT_PRICE = {
    salad:0.7,
    cheese:0.8,
    meat:1.7,
    bacon:1
}

class BurgerBuilder extends Component
{
    state = {
        ingredients : {
            'salad':1,
            'cheese':2,
            'meat':1,
            'bacon':1
        },
        totalprice:4,
    }


    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type]
        const newIngredientCount = oldIngredientCount + 1
        const updateIngredientState = {
            ...this.state.ingredients
        }
        updateIngredientState[type] = newIngredientCount
        const oldPrice = this.state.totalprice
        const additionalPrice = INGREDIENT_PRICE[type]
        const newPrice = oldPrice + additionalPrice
        this.setState({ingredients:updateIngredientState, totalprice:newPrice})
    }

    lessIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type]
        let newIngredientCount = oldIngredientCount - 1
        if(oldIngredientCount <=0) {
            return
        }
        const updateIngredientState = {
            ...this.state.ingredients
        }
        updateIngredientState[type] = newIngredientCount
        const oldPrice = this.state.totalprice
        const lessPrice = INGREDIENT_PRICE[type]
        const newPrice = oldPrice - lessPrice
        this.setState({ingredients:updateIngredientState, totalprice:newPrice})

        if(this.state.totalprice < 4 || newPrice < 4  ) {
            this.setState({
                totalprice:4
            })
        }
    }

    render(){
        return(
            <Auxi>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addIngredient={this.addIngredientHandler} 
                    lessIngredient={this.lessIngredientHandler}
                 
                    price={this.state.totalprice} />
            </Auxi>
        )
    }
}

export default BurgerBuilder