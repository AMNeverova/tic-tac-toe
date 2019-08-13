import React from 'react';
import {FormattedMessage} from 'react-intl';

class Start extends React.Component {
    constructor (){
        super();
        this.handleClick = this.handleClick.bind(this);
      }
      
    handleClick () {
        this.props.buttonStartAC()
    }

    render () {
        return (
            <div className='start'>
                {this.props.state? 
                    <button className='button-start' onClick={this.handleClick}><FormattedMessage id='startAgainButton' /></button> : 
                    <div><button className='button-start' onClick={this.handleClick}><FormattedMessage id='button-start' /></button>
                    <div className='warning'><FormattedMessage id='warning' /></div></div> }
            </div>
        )
    }
}
export default Start; 
