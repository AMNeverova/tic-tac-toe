import React from 'react';
import Navbar from './Navbar';
import Game from './Game';
import ScoreTable from './ScoreTable'
import {Switch, Route} from 'react-router-dom' 


class App extends React.Component {
    constructor () {
        super()
    }

    render() {
        return (
            <div className='container'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Game} />
                    <Route path='/scoreTable/' exact component={ScoreTable} />
                </Switch>
            </div>
        )
    }
}

export default App