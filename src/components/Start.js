import React from 'react';
import { buttonStartAC } from '../redux/PlayersReducer';

class Start extends React.Component {
    constructor( props ){
        super( props );
        this.handleClick = this.handleClick.bind(this);
      }
      
    handleClick () {
        this.props.dispatch(buttonStartAC())
    }

    render() {
        return (
            <div className='start'>
                <button className='button-start' onClick={this.handleClick}>Start</button>
            </div>
        )
    }
}

export default Start; 