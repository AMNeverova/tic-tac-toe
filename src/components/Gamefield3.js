import React from 'react';
import Cell from './Cell.js';

class GameField3 extends React.Component {
    render() {
        let CellComponents = []
        let winnerArray = this.props.state.winner? this.props.state.winner.winnerLocation.map((item) => [...item]) : null;

        for (let i = 1; i <= this.props.state.gamefield3.length - 2; i++) {
            for (let j = 0; j <= this.props.state.gamefield3[i].length - 1; j++) {
                if (this.props.state.winner) {
                    if (winnerArray.length > 0) {
                        if (winnerArray[0][0] == i && winnerArray[0][1] == j ) {
                            console.log('i was here')
                            CellComponents.push(
                                <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield3[i][j]} className={`cell cell${CellComponents.length+1} winner`} />
                            )
                            winnerArray.splice(0, 1)
                        } else {
                            CellComponents.push(
                                <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield3[i][j]} className={`cell cell${CellComponents.length+1}`} />
                            )
                        } 
                } else {
                    CellComponents.push(
                        <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield3[i][j]} className={`cell cell${CellComponents.length+1}`} />
                    )
                }              
            } else {
                CellComponents.push(
                    <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield3[i][j]} className={`cell cell${CellComponents.length+1}`} />
                )
            }
        }
        }
        return  (
            <div className={this.props.state.gamefieldClassName}>
                {CellComponents}
            </div>
        )
    }
}

export default GameField3;
