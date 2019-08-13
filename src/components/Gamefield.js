import React from 'react';
import Cell from './Cell.js';

class Gamefield extends React.Component {
    render () {
        let CellComponents = []
        let winnerArray = this.props.state.winner.winnerDetected? this.props.state.winner.location.map((item) => [...item]) : null;
        for (let i = 0; i <= this.props.state.currentGamefield.length - 1; i++) {
            for (let j = 0; j <= this.props.state.currentGamefield[i].length - 1; j++) {
                if (this.props.state.winner.winnerDetected) {
                    if (winnerArray.length > 0) {
                        if (winnerArray[0][0] === i && winnerArray[0][1] === j ) {
                            CellComponents.push(
                                <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.currentGamefield[i][j]} className={`cell cell${CellComponents.length+1} winner`} />
                            )
                            winnerArray.splice(0, 1)
                        } else {
                            CellComponents.push(
                                <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.currentGamefield[i][j]} className={`cell cell${CellComponents.length+1}`} />
                            )
                        } 
                } else {
                    CellComponents.push(
                        <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.currentGamefield[i][j]} className={`cell cell${CellComponents.length+1}`} />
                    )
                }              
            } else {
                CellComponents.push(
                    <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.currentGamefield[i][j]} className={`cell cell${CellComponents.length+1}`} />
                )
            }
            }
        }

        return (
            <div className={`gamefield${this.props.state.fieldSize}`}>
                {CellComponents}
            </div>
        )
    }
}
export default Gamefield;
