import React from 'react'
import './BurgerControls.css'
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Salad', type:'salad'},
    {label: 'Cheese', type:'cheese'},
]

const burgerControls = (props) => {
    console.log(props)
   return  <div className='BurgerControls'>
            <p><strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl => {
               return <BurgerControl
                key={ctrl.label} 
                type={ctrl.type} 
                label={ctrl.label} 
                add={() => props.addIngredient(ctrl.type)}
                less={() => props.lessIngredient(ctrl.type)}
                dislabled={props.disabled[ctrl.type]}
                />
            })
        }

            <button disabled={!props.purchasable} className='OrderButton'>ORDER NOW</button>
    </div>
}

export default burgerControls
