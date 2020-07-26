import React, {Component} from 'react';
import './Sign.css';

class Sign extends Component {
    constructor(props) {
        super(props);
        this.handleClear= this.handleClear.bind(this)
    }
    handleClear(event) {
        this.props.Sign(event.target.value)
    }
    render() {
        return (
                <input className='sign' value='+/-' onClick={this.handleClear} readOnly />
        )
    }

}
export default Sign;