/* eslint no-unused-vars: 0 */
import React from 'react';
import cross from '../img/cross.png'
import zero from '../img/zero.png'

class Cell extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.cellClickAC(this.props.state.id)
    }

    render() {
        return(
        <div onClick={this.handleClick} className={this.props.state.className}>
            {this.props.state.content? <img className='picture' src={this.props.state.content == 'cross'? cross : zero} /> : null} 
        </div>
        )
    }
}

export default Cell