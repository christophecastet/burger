import React, {Component} from 'react'
import './Button.css'

class Button extends Component
{
    render() {
        const type = this.props.type
        return <button className={['Button', type].join(' ')} onClick={this.props.clicked}>{this.props.children}</button>
    }
} 
export default Button