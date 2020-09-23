import React, {Component} from 'react';
import './Sign.css';

class Sign extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        let inputValue = document.getElementById("equal-btn").value, result;
        document.getElementById("equal-btn").value = '';
        result = inputValue*-1;
        this.props.Sign(result);
    }

    render() {
        return (
                <input className='sign' value='+/-' onClick={this.handleChange} readOnly />
        )
    }

}
export default Sign;