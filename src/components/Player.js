import React from 'react';
import {injectIntl, FormattedMessage} from 'react-intl';

class Player extends React.Component {
    
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt) {
        let newText = evt.target.value;
        this.props.enterNameAC(newText, this.props.state.id);
    }

    handleClick() {
        this.props.submitNameAC(this.props.state.value, this.props.state.id);
    }

    render() {
        let classNameString = '';
        this.props.state.classNames.map((item) => {
            classNameString += ` ${item}`
        })

        return(
            <div className={classNameString}>
                <p className='player-title'>{this.props.state.id == 1? <FormattedMessage id="player1Title" /> : <FormattedMessage id="player2Title" />}</p>
                <div className='player-name'>{this.props.state.name}</div>
                <div>
                    <input type="text" value={this.props.state.value} onChange={this.handleChange} className='input-player-name' placeholder={this.props.intl.messages.placeholder} />
                    <button className='button' onClick={this.handleClick} type='submit'>Ok</button>
                </div>
            </div>
        )
    }
}

export default injectIntl(Player);
