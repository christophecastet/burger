import React from 'react'

import './Modale.css'
import Auxi from '../../../hoc/Auxi'
import BackDrop from '../BackDrop/BackDrop'

const modale = (props) => (
    <Auxi>
        <BackDrop display={props.display} clicked={props.modalCloded}/>
        <div 
            className='Modal'
            style={{
                transform:props.display ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.display ? '1' : '0'
            }}>
                {props.children}
        </div>
    </Auxi>

)

export default modale