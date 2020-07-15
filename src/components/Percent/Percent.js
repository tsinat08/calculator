import React, {Component} from 'react';
import './Percent.css';

class Percent extends Component {

    render() {
        return (
            <div>
                <input className='clear' value='C' onClick={this.handleClear} readOnly />
            </div>
        )
    }

}
export default Percent;