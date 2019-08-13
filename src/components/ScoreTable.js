import React from 'react';
import store from 'store';
import {connect} from 'react-redux';
import { FormattedMessage } from 'react-intl';
import config from '../configuration/config.json';

class ScoreTable extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    render () {
        let winnersArray = store.get('scoreTable');
        let RowComponents = []
        if (winnersArray) {
            for (let i = 0; i < winnersArray.length; i++ ) {
                let name
                switch (winnersArray[i][1]) {
                    case config.player1:
                        name = <FormattedMessage id='player1Title'/>;
                    break;
                    case config.player2:
                        name = <FormattedMessage id='player2Title'/>;
                    break;
                    case config.drawGame:
                        name = <FormattedMessage id='drawGame' />;
                    break;
                    default:
                        name = winnersArray[i][1];
                }
                RowComponents.push(
                    <tr key={i}><td className='column1'>{winnersArray[i][0]}</td><td>{name}</td></tr>
                )
            }
        }
        return (
            <div className='score-table'>
                <table col={config.columnsInScoreTable} border={config.borderInScoreTable} cellPadding={config.cellPaddingInScoreTable} className='table'>
                    <tbody>
                        <tr><th><FormattedMessage id='gameNumber'/></th><th><FormattedMessage id='table-winner'/></th></tr>
                        {RowComponents}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({state: state.game.gameNumber})
export default connect(mapStateToProps)(ScoreTable);
