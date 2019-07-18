import React from 'react';

class GameCounter extends React.Component {
    render() {
        return(
        <div className='game-counter'>
            {this.props.state.gameNumber !== 0?<div className='counter-text'>{`Игра ${this.props.state.gameNumber} `}</div> : null}
        </div>
        )
    }
}

export default GameCounter;