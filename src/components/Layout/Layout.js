import React from 'react'
import Auxi from '../../hoc/Auxi'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'




const layout = (props) => (
    <Auxi>
        <Toolbar />
        <main  className='margin-layout'>
            {props.children}
        </main>
    </Auxi>
)

export default layout