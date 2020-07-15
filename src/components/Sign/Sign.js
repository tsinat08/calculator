import React, {Component} from 'react';
import './Sign.css';

class Sign extends Component {

    render() {
        return (
            <div>
                <input className='clear' value='C' onClick={this.handleClear} readOnly />
            </div>
        )
    }

}
export default Sign;