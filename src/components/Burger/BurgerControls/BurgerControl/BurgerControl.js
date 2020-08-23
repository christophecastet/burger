import React from 'react'
import './BurgerControl.css'

const burgerControl = (props) => (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='Less' onClick={props.less} disabled={props.dislabled}>Moins</button>
            <button className='More' onClick={props.add}>Plus</button>
        </div>
)

export default burgerControl