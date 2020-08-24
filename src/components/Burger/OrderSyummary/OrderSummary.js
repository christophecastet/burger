import React from 'react'
import Auxi from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const summaryIngredients = Object.keys(props.ingredients).map((igKey, key) => {
    return <li key={key}><span style={{textTransform:'capitalize'}}>{igKey} : </span>{props.ingredients[igKey]}</li>
    })
    return (
        <Auxi>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {summaryIngredients}
        </ul>
        <p>Continue to check-out</p>
        <Button type={'Danger'} clicked={props.cancelPurchasse}>CANCEL</Button>
        <Button type={'Success'} clicked={props.continuePurchasse}>CONTINUE</Button>
    </Auxi>
    )
  
}

export default orderSummary