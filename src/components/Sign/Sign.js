import React, {Component} from 'react';
import './Sign.css';

class Sign extends Component {

    render() {
        return (
                <input className='sign' value='+/-' readOnly />
        )
    }

}
export default Sign;