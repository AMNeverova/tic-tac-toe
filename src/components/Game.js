import React from 'react';
import Player from './Player.js';
import GameField from './Gamefield';
import Start from './Start';
import {connect} from 'react-redux';
import {enterNameAC, buttonStartAC, submitNameAC, cellClickAC, clickModalAC} from '../redux/actionCreators';
import GameCounter from './GameCounter';
import Modal from 'react-awesome-modal';
import { FormattedMessage } from 'react-intl';
import config from '../configuration/config.json';

class Game extends React.Component {

    closeModal() {
        this.props.clickModalAC()
    }

    render() {
        let name;
        switch (this.props.state.winnerName) {
            case config.player1:
                name = <FormattedMessage id='player1Title' />
                break;
            case config.player2:
                name = <FormattedMessage id='player2Title' />
                break;
            case config.drawGame:
                name = <FormattedMessage id='drawGameMessage' />
                break;
            default:
                name = this.props.state.winnerName
        }

        return (
            <div className='game'>
                <Modal onClickAway={()=>this.closeModal()} visible={this.props.state.modalVisible} width='300' height='200' effect="fadeInUp">
                    <div>
                        <div className='modal-title'><FormattedMessage id='modalTitle' /></div>
                        <div className='modal-content'>
                            <div className='modal-text'>
                                {name}
                                {this.props.state.winnerName == config.drawGame? null : <FormattedMessage id='wins' />}
                            </div>
                            <button className='button-modal' onClick={() => this.closeModal()}>Ok</button>
                        </div>
                    </div>
                </Modal>
                <GameCounter state={this.props.state} />
                <Start state={this.props.state.pressed} buttonStartAC={this.props.buttonStartAC} />
                <Player state={this.props.state.players[0]} submitNameAC={this.props.submitNameAC} enterNameAC={this.props.enterNameAC} />
                <GameField state={this.props.state} cellClickAC={this.props.cellClickAC} />
                <Player state={this.props.state.players[1]} submitNameAC={this.props.submitNameAC} enterNameAC={this.props.enterNameAC} />
            </div>
        )
    }
}

const mapStateToProps = state => ({state: state.game})

export default connect(mapStateToProps, {enterNameAC, buttonStartAC, submitNameAC, cellClickAC, clickModalAC})(Game);
