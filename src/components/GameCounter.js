import React from 'react';
import { FormattedMessage } from 'react-intl';

class GameCounter extends React.Component {
    render () {
        return (
        <div className='game-counter'>
            {this.props.state.gameNumber !== 0?
                <div className='counter-text'>
                    <FormattedMessage id='game' />{` ${this.props.state.gameNumber}`}
                </div> : null}
        </div>
        )
    }
}

export default GameCounter;
