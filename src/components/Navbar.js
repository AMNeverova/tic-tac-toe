import React from 'react';
import {Link} from 'react-router-dom';
import {clickTabAC} from '../redux/actionCreators';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

class Navbar extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.clickTabAC(id);
    }

    render() {
        return (
            <div className='navbar'>
                    {this.props.state.map((item) => {
                        return (
                            <div key={item.id} onClick={() => {this.handleClick(item.id)}} className={item.className}>
                                <Link to={item.linkTo}>
                                    {item.id === 1? <FormattedMessage id='tab.game' /> : <FormattedMessage id='tab.scoreTable' /> }
                                </Link>
                            </div>
                        )
                    })}
                    <div className="lang-tab">
                        <div className="lang"><a onClick={()=>{this.props.changeToRuAC()}}>Ru</a></div>
                        <div className="lang"><a onClick={()=>{this.props.changeToEnAC()}}>En</a></div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state: state.tabs})

export default connect(mapStateToProps, {clickTabAC})(Navbar);
