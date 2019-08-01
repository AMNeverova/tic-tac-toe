import React from 'react';
import { FormattedMessage } from 'react-intl';

class SelectField extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let field = parseInt(e.target.value);
        this.props.changeFieldSizeAC(field);
    }

    render() {
        let options = []
        for (let i = 3; i <= 100; i++) {
            options.push(<option key={i} value={i}>{i}x{i}</option>)
        }
        return (
            <div className='select-field'>
                <div className='select-text'><FormattedMessage id='selectText' /></div>
                <select value={this.props.state.fieldSize} onChange={this.handleChange} className='select-options'>
                    {options}
                </select>
            </div>
        )
    }
}

export default SelectField;