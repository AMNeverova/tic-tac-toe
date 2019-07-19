import React from 'react';
import {FormattedMessage} from 'react-intl';

class Start extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
      }
      
    handleClick () {
        this.props.buttonStartAC()
    }

    render() {
        return (
            <div className='start'>
                <button className='button-start' onClick={this.handleClick}><FormattedMessage id='button-start' defaultMessage='Start'/></button>
                {this.props.state? null : <div className='warning'><FormattedMessage id='warning' default='Please, press Start' /></div> }
            </div>
        )
    }
}

export default Start; 
