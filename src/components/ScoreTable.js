import React from 'react';
import store from 'store';
import {connect} from 'react-redux';

class ScoreTable extends React.Component {
    render() {
        console.log(this.props.state)
        let winnersArray = store.get('scoreTable')
        let RowComponents = []
        if (winnersArray) {
            for (let i = 0; i < winnersArray.length; i++ ) {
                RowComponents.push(
                    <tr key={i}><td>{winnersArray[i][0]}</td><td>{winnersArray[i][1]}</td></tr>
                )
            }
        }
        return (
            <div className='score-table'>
                <table col='2'>
                    <tbody>
                        <tr><th>Номер игры</th><th>Победитель</th></tr>
                        {RowComponents}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({state: state.game.gameNumber})

export default connect(mapStateToProps)(ScoreTable);
