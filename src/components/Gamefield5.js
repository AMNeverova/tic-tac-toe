import React from 'react';
import Cell from './Cell';

class GameField5 extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.cellClickAC(this.props.state.id)
    }

    render() {
        let CellComponents = []
        for (let i = 1; i <= this.props.state.gamefield5.length - 2; i++) {
            for (let j = 0; j <= this.props.state.gamefield5[i].length - 1; j++) {
                CellComponents.push(
                    <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield5[i][j]} className={`cell cell${CellComponents.length+1}`} />
                )
            }
        }
        return  (
            <div className='gamefield5'>
                <div className='row row1'>{CellComponents.splice(0, 5)}</div>
                <div className='row row2'>{CellComponents.splice(0, 5)}</div>
                <div className='row row3'>{CellComponents.splice(0, 5)}</div>
                <div className='row row4'>{CellComponents.splice(0, 5)}</div>
                <div className='row row5'>{CellComponents.splice(0, 5)}</div>
            </div>
        )
    }
}

export default GameField5;