import React from 'react';
import cross from '../img/cross.png'

class Cell extends React.Component {
    render() {
        return(
        <div className="cell"><img className='picture' src={cross} /></div>
        )
    }
}

export default Cell