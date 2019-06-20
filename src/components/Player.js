import React from 'react';

class Player extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            'backgroundColor': "#ffffff",
            'borderRadius': '10%'
        }
    }

    render() {
        return(
        <div style={this.props.active? this.style : null} className='player'>
            <p className='player-title'>Player 1</p>
            <div className='player-name'></div>
            <div>
            <input type="text" className='input-player-name' placeholder="Enter your name"/>
            <button className='button' type='submit'>Ok</button>
            </div>
        </div>
        )
    }
}

export default Player;