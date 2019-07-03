import React from 'react';
import {Link} from 'react-router-dom';
import {clickTabAC} from '../redux/tabReducer';
import {connect} from 'react-redux';

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
                                <Link to={item.linkTo}>{item.text}</Link>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state: state.tabs})

export default connect(mapStateToProps, {clickTabAC})(Navbar);