import React from 'react';
import Cell from './Cell.js'

class GameField extends React.Component {
    render() {
        return(
        <div className={this.props.state.gamefieldClassName}>
            {this.props.state.cells.map((item) => {
                return (
                    <Cell key={item.id} state={item} cellClickAC={this.props.cellClickAC} />)
            })}
        </div>
        )
    }
}

export default GameField;