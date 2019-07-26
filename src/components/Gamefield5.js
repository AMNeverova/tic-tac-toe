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
        let winnerArray = this.props.state.winner? this.props.state.winner.winnerLocation.map((item) => [...item]) : null;
        for (let i = 1; i <= this.props.state.gamefield5.length - 2; i++) {
            for (let j = 0; j <= this.props.state.gamefield5[i].length - 1; j++) {
                if (this.props.state.winner) {
                        if (winnerArray.length > 0) {
                            if (winnerArray[0][0] == i && winnerArray[0][1] == j ) {
                                console.log('i was here')
                                CellComponents.push(
                                    <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield5[i][j]} className={`cell cell${CellComponents.length+1} winner`} />
                                )
                                winnerArray.splice(0, 1)
                            } else {
                                CellComponents.push(
                                    <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield5[i][j]} className={`cell cell${CellComponents.length+1}`} />
                                )
                            } 
                    } else {
                        CellComponents.push(
                            <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield5[i][j]} className={`cell cell${CellComponents.length+1}`} />
                        )
                    }              
                } else {
                    CellComponents.push(
                        <Cell key={CellComponents.length+1} cellClickAC={this.props.cellClickAC} row={i} id={j} content={this.props.state.gamefield5[i][j]} className={`cell cell${CellComponents.length+1}`} />
                    )
                }
            }
        }
        return  (
            <div className='gamefield5'>
                {CellComponents}
            </div>
        )
    }
}

export default GameField5;