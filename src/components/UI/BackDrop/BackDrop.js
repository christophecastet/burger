import React from 'react'
import './BackDrop.css'


const backDrop = (props) => (
     props.display ? <div className='Backdrop' onClick={props.clicked}></div> : null
)

export default backDrop