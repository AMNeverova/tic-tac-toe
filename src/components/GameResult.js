import React from 'react';

class GameResult extends React.Component {
    render () {
        return(
            <div className='winner-message'>
                {this.props.state? <div className='winner-text'>{this.props.state}</div> : null}
            </div>
        )
    }
}

export default GameResult;