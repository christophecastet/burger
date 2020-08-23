import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import'./Burger.css'


const burger = (props) => {

    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
            .map((_, i) => {
                return <BurgerIngredients types={igKey} key={igKey + i} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
        console.log(transformIngredients)

        if(transformIngredients.length === 0) {
            transformIngredients = <p>Commencer à ajouter vos ingrédients</p>
        }
        
    return(
        <div className='Burger'>
        <BurgerIngredients types={'bread-top'} />
            {transformIngredients}
        <BurgerIngredients types={'bread-bottom'} />
    </div>
    )
}

export default burger