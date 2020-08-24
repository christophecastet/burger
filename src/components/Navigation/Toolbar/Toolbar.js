import React from 'react'
import './Toolbar.css'
import Logo from '../../Layout/Logo/Logo'
import NavigationItems from '../NavigatioItems/NavigationItems'

const toolbar = (props) => (
   <header className='Toolbar'>
       <div>Menu</div>
       <Logo/>
       <NavigationItems />

   </header>
    
)

export default toolbar