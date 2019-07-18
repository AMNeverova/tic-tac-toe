import React from 'react';
import Player from './Player.js';
import GameField from './Gamefield';
import Start from './Start';
import {connect} from 'react-redux';
import {enterNameAC, buttonStartAC, submitNameAC, cellClickAC} from '../redux/actionCreators';
import GameCounter from './GameCounter';
import GameResult from './GameResult';

class Game extends React.Component {

    render() {
        return (
            <div className='game'>
                <GameCounter state={this.props.state} />
                <Start state={this.props.state.pressed} buttonStartAC={this.props.buttonStartAC} />
                <GameResult state={this.props.state.winnerMessage} />
                <Player state={this.props.state.players[0]} submitNameAC={this.props.submitNameAC} enterNameAC={this.props.enterNameAC} />
                <GameField state={this.props.state} cellClickAC={this.props.cellClickAC} />
                <Player state={this.props.state.players[1]} submitNameAC={this.props.submitNameAC} enterNameAC={this.props.enterNameAC} />
            </div>
        )
    }
}

const mapStateToProps = state => ({state: state.game})

export default connect(mapStateToProps, {enterNameAC, buttonStartAC, submitNameAC, cellClickAC})(Game);

