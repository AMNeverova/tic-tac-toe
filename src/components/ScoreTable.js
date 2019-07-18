import React from 'react';
import Row from './Row';

class ScoreTable extends React.Component {
    render() {
        let winnersArray = JSON.parse(localStorage.getItem('scoreTable'));
        let RowComponents = []
        if (winnersArray) {
            for (let i = 0; i < winnersArray.length; i++ ) {
                RowComponents.push(
                    <Row name={winnersArray[i]} key={i} index={i + 1} />
                )
            }
        }
        return (
            <div className='score-table'>
                {RowComponents}
            </div>
        )
    }
}

export default ScoreTable;