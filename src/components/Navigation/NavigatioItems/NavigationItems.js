import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ol  className='NavigationItems'>
        <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
        <NavigationItem link={'/'}>Check out</NavigationItem>
    </ol>
)

export default navigationItems