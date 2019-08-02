import React from 'react';
import { FormattedMessage } from 'react-intl';
import config from '../configuration/config.json';

class SelectField extends React.Component {
    constructor() {
        super()
        this.handleFieldSizeChange = this.handleFieldSizeChange.bind(this);
        this.handleWinCombinationChange = this.handleWinCombinationChange.bind(this);
    }

    handleFieldSizeChange(e) {
        let field = parseInt(e.target.value);
        this.props.changeFieldSizeAC(field);
    }

    handleWinCombinationChange(e) {
        let quantity = parseInt(e.target.value);
        this.props.changeWinQuantityAC(quantity)
    }

    render() {
        let options = []
        for (let i = config.minCellNumber; i <= config.maxCellNumber; i++) {
            options.push(<option key={i} value={i}>{i}x{i}</option>)
        }
        let quantityOptions = []
        for (let i = config.minCellQuantity; i <= config.maxCellQuantity; i++) {
            quantityOptions.push(<option key={i} value={i}>{i}</option>)
        }

        return (
            <div className='select-field'>
                <div className='select-text'><FormattedMessage id='selectFieldText' /></div>
                <select value={this.props.state.fieldSize} onChange={this.handleFieldSizeChange} className='select-options'>
                    {options}
                </select>
                <div className='select-text'><FormattedMessage id='selectCombinationText' /></div>
                <select value={this.props.state.winningCombination} onChange={this.handleWinCombinationChange} className='select-options'>
                    {quantityOptions}
                </select>
                {this.props.state.showFieldSizeWarning? <div className='warning'><FormattedMessage id='sizeWarning'/></div> : null}
            </div>
        )
    }
}

export default SelectField;