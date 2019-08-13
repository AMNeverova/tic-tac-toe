import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {clickTabAC} from '../redux/actionCreators';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import config from '../configuration/config.json';

class Navbar extends React.Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id) {
        this.props.clickTabAC(id);
    }

    render () {
        let TabComponents = []
        this.props.state.map((item) => {
            TabComponents.push(
                <div key={item.id} onClick={() => this.handleClick(item.id)} className={this.props.location.pathname === item.linkTo? item.className + ' active' : item.className}>
                <NavLink to={item.linkTo}>
                    {item.name === config.tab1name? <FormattedMessage id='tab.game' /> : <FormattedMessage id='tab.scoreTable' /> }
                </NavLink>
            </div>
            )
        })

        return (
            <div className='navbar'>
                    {TabComponents}
                    <div className="lang-tab">
                        <div className="lang"><a onClick={()=> this.props.changeToRuAC()}>Ru</a></div>
                        <div className="lang"><a onClick={()=> this.props.changeToEnAC()}>En</a></div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state: state.tabs});
let NavbarContainer = withRouter(Navbar);
export default connect(mapStateToProps, {clickTabAC})(NavbarContainer);
