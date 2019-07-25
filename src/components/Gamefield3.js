import React from 'react';
import Cell from './Cell.js';

class GameField3 extends React.Component {
    render() {
        let CellComponents = []
        for (let i = 1; i <= this.props.state.gamefield3.length - 2; i++) {
            for (let j = 0; j <= this.props.state.gamefield3[i].length - 1; j++) {
                CellComponents.push(
                    <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield3[i][j]} className={`cell cell${CellComponents.length+1}`} />
                )
            }
        }
        return  (
            <div className={this.props.state.gamefieldClassName}>
                <div className='row1'>
                    {CellComponents.splice(0, 3)}
                </div>
                <div className='row2'>
                    {CellComponents.splice(0, 3)}
                </div>
                <div className='row3'>
                    {CellComponents.splice(0, 3)}
                </div>
            </div>
        )
    }
}

export default GameField3;
