import React from 'react';
import { FormattedMessage } from 'react-intl';

class Row extends React.Component {
    render() {
        let name;
        switch (this.props.name) {
            case 'Player1':
                name = <FormattedMessage id='player1Title' defaultMessage='Player1'/>;
                break;
            case 'Player2':
                name = <FormattedMessage id='player2Title' defaultMessage='Player2'/>;
                break;
            case 'Draw game':
                name = <FormattedMessage id='drawGame' defaultMessage='Draw Game'/>;
                break;
            default: 
                name = this.props.name;
        }

        return (
            <div className='row'>
                {`${this.props.index}. `}{name}
            </div>
        )
    }
}

export default Row;
