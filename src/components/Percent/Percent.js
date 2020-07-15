import React, {Component} from 'react';
import './Percent.css';

class Percent extends Component {

    render() {
        return (
                <input className='percent' value='%' readOnly />
        )
    }

}
export default Percent;