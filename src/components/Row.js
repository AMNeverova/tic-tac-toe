import React from 'react';
import { FormattedMessage } from 'react-intl';

class Row extends React.Component {
    render() {
        let name;
        switch (this.props.name) {
            case 'Player1':
                name = <FormattedMessage id='player1Title' />;
                break;
            case 'Player2':
                name = <FormattedMessage id='player2Title' />;
                break;
            case 'Draw game':
                name = <FormattedMessage id='drawGame' />;
                break;
            default: 
                name = this.props.name;
        }

        return (
                {name}
        )
    }
}

export default Row;
