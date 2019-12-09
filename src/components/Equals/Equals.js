import React, {Component} from 'react';
import evaluate from './evaluate';
import './Equals.css';


class Equals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        let inputValue = document.getElementById("equal-btn").value.replace(/[^-()\d/*+.]/g, ''),
            result ;
        document.getElementById("equal-btn").value = '';
        result = evaluate(inputValue);
        this.props.Lilu(result);
    }

    render() {
        return (
            <div className="Equals">
                <div className='Equals-field' >
                    <input className='equals' value='=' onClick={this.handleChange} readOnly />
                </div>
            </div>

        )
    }

}
export default Equals;