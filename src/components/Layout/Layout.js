import React from 'react'
import Auxi from '../../hoc/Auxi'
import './Layout.css'




const layout = (props) => (
    <Auxi>
        <div>sidebar, backdrop, drewbar</div>
        <main  className='margin-layout'>
            {props.children}
        </main>
    </Auxi>
)

export default layout