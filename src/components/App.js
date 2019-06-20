import React from 'react';
import Player from './Player.js';
import GameField from './Gamefield';
import BestPlayers from './BestPlayers';
import Start from './Start'

class App extends React.Component {
    constructor () {
        super()
    }

    render() {
        return (
        <div className='container'>
            <Start />
            <Player />
            <GameField />
            <Player />
            <BestPlayers />
        </div>
        )
    }
}

export default App