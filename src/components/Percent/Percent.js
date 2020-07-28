import React, {Component} from 'react';
import './Percent.css';

class Percent extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        let inputValue = document.getElementById("equal-btn").value, result;
        document.getElementById("equal-btn").value = '';
        result = inputValue/100;
        this.props.Percent(result);
    }
    render() {
        return (
                <input className='sign' value='%' onClick={this.handleChange}  readOnly />
        )
    }

}
export default Percent;