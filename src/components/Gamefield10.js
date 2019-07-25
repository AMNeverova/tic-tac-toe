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
        for (let i = 1; i <= this.props.state.gamefield10.length - 2; i++) {
            for (let j = 0; j <= this.props.state.gamefield10[i].length - 1; j++) {
                CellComponents.push(
                    <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield10[i][j]} className={`cell cell${CellComponents.length+1}`} />
                )
            }
        }
        return  (
            <div className='gamefield10'>
                {CellComponents}
            </div>
        )
    }
}

export default GameField5;