import React from 'react';
import Player from './Player.js';
import Gamefield from './Gamefield';
import Start from './Start';
import {connect} from 'react-redux';
import {changeWinQuantityAC, enterNameAC, buttonStartAC, submitNameAC, cellClickAC, clickModalAC, changeFieldSizeAC} from '../redux/actionCreators';
import GameCounter from './GameCounter';
import Modal from 'react-awesome-modal';
import { FormattedMessage } from 'react-intl';
import config from '../configuration/config.json';
import SelectField from './SelectField.js';

class Game extends React.Component {
    closeModal () {
        this.props.clickModalAC();
    }

    render () {
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
                name = this.props.state.winnerName;
        }

        return (
            <div className='game'>
                <div className='player-line'>
                    <Player state={this.props.state.players[0]} submitNameAC={this.props.submitNameAC} enterNameAC={this.props.enterNameAC} />
                    <GameCounter state={this.props.state} />
                    <Start state={this.props.state.pressed} buttonStartAC={this.props.buttonStartAC} />
                    <SelectField changeWinQuantityAC={this.props.changeWinQuantityAC} changeFieldSizeAC={this.props.changeFieldSizeAC} state={this.props.state} />
                    <Player state={this.props.state.players[1]} submitNameAC={this.props.submitNameAC} enterNameAC={this.props.enterNameAC} />
                    <Modal onClickAway={()=>this.closeModal()} visible={this.props.state.modalVisible} width='300' height='200' effect="fadeInUp">
                    <div>
                        <div className='modal-title'><FormattedMessage id='modalTitle' /></div>
                        <div className='modal-content'>
                            <div className='modal-text'>
                                {name}
                                {this.props.state.winnerName === config.drawGame? null : <FormattedMessage id='wins' />}
                            </div>
                            <button className='button-modal' onClick={() => this.closeModal()}>Ok</button>
                        </div>
                    </div>
                </Modal>
            </div>
                <Gamefield state={this.props.state} cellClickAC={this.props.cellClickAC} />
            </div>
        )
    }
}

const mapStateToProps = state => ({state: state.game});
export default connect(mapStateToProps, {changeWinQuantityAC, enterNameAC, buttonStartAC, submitNameAC, cellClickAC, clickModalAC, changeFieldSizeAC})(Game);
