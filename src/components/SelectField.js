import React from 'react';
import { FormattedMessage } from 'react-intl';

class SelectField extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let field = e.target.value;
        this.props.changeFieldSizeAC(field);
    }

    render() {
        return (
            <div className='select-field'>
                <div className='select-text'><FormattedMessage id='selectText' /></div>
                <select onChange={this.handleChange} className='select-options'>
                    <option value='gamefield3'>3х3</option>
                    <option value='gamefield5'>5х5</option>
                    <option value='gamefield10'>10х10</option>
                </select>
            </div>
        )
    }
}

export default SelectField;