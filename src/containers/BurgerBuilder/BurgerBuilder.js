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
        purchasable:false
    }

    updatePurchasableState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            })
            this.setState({
                purchasable: sum > 0
            })
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
        this.updatePurchasableState(updateIngredientState)
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
        this.updatePurchasableState(updateIngredientState)
        this.setState({ingredients:updateIngredientState, totalprice:newPrice})

        if(this.state.totalprice < 4 || newPrice < 4  ) {
            this.setState({
                totalprice:4
            })
        }
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Auxi>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addIngredient={this.addIngredientHandler} 
                    lessIngredient={this.lessIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalprice}
                    purchasable={this.state.purchasable} />
            </Auxi>
        )
    }
}

export default BurgerBuilder