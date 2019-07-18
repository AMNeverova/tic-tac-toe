import React from 'react';
import Navbar from './Navbar';
import Game from './Game';
import ScoreTable from './ScoreTable';
import {Switch, Route} from 'react-router-dom';
import {IntlProvider} from "react-intl";
import ru from '../../i18n/ru.json';
import en from '../../i18n/en.json';
import {connect} from 'react-redux';
import {changeToEnAC, changeToRuAC} from '../redux/actionCreators';

const translations = {
    ru,
    en
}

class App extends React.Component {
    constructor () {
        super()
    }

    render() {
        return (
            <IntlProvider locale={this.props.state.lang} messages={translations[this.props.state.lang]}>
                <div className='container'>
                    <Navbar state={this.props.state} changeToEnAC={this.props.changeToEnAC} changeToRuAC={this.props.changeToRuAC} />
                    <Switch>
                        <Route path='/' exact component={Game} />
                        <Route path='/scoreTable/' component={ScoreTable} />
                    </Switch>
                </div>
            </IntlProvider>
        )
    }
}

const mapStateToProps = (state) => ({state: state.lang})

export default connect(mapStateToProps,{changeToEnAC, changeToRuAC})(App);