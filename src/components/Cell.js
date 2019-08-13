import React from 'react';
import crossImg from '../img/cross.png';
import zeroImg from '../img/zero.png';
import config from '../configuration/config.json';

class Cell extends React.Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.cellClickAC(this.props.row, this.props.id);
    }

    render () {
        return (
            <div onClick={this.handleClick} className={this.props.className}>
                {this.props.content? <img className='picture' src={this.props.content === config.cross? crossImg : zeroImg} /> : null} 
            </div>
        )
    }
}
export default Cell;
