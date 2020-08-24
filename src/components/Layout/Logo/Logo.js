import React from 'react'
import BurgerLogo from '../../../assets/img/burger-logo.png'
import './Logo.css'

const logo = (props) => (
    <div className='Logo'>
        <img src={BurgerLogo} alt='monBurger' />
    </div>
)

export default logo