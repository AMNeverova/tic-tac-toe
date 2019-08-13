import React from 'react';
import {injectIntl, FormattedMessage} from 'react-intl';

class Player extends React.Component {
    constructor () {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

    handleChange (evt) {
        let newText = evt.target.value;
        this.props.enterNameAC(newText, this.props.state.id);
    }

    handleClick () {
        this.props.submitNameAC(this.props.state.value, this.props.state.id);
    }

    handleEnterPress (e) {
        if (e.keyCode === 13) {
            this.props.submitNameAC(this.props.state.value, this.props.state.id); 
        }
    }

    render () {
        let classNameString = '';
        this.props.state.classNames.map((item) => {
            classNameString += ` ${item}`;
        })

        return(
            <div className='player-container'>
                <div className={classNameString}>
                    <p className='player-title'>{this.props.state.id === 1? <FormattedMessage id="player1Title" /> : <FormattedMessage id="player2Title" />}</p>
                    <div className='player-name'>{this.props.state.name}</div>
                    <div className='player-input-name'>
                        {this.props.state.name? 
                            <button className='button button-change-name' onClick={this.handleClick} type='submit'><FormattedMessage id='changeNameButton' /></button> : 
                            <input type="text" onKeyDown={this.handleEnterPress} value={this.props.state.value} onChange={this.handleChange} className='input-player-name' placeholder={this.props.intl.messages.placeholder} />}
                        {this.props.state.value? <button className='button' onClick={this.handleClick} type='submit'>Ok</button> : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default injectIntl(Player);
