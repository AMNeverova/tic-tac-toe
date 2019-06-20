import React from 'react';
import Cell from './Cell.js'

class GameField extends React.Component {
    render() {
        return(
        <div className='gamefield'>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
        )
    }
}

export default GameField;