import React, {Component} from 'react';
import './Operations.css';

class Operations extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(this);
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="Operations">

                <input className='ops' placeholder='/' onClick={this.handleChange} readOnly/>
                <input className='ops' placeholder='*' onClick={this.handleChange} readOnly/>
                <input className='ops' placeholder='-' onClick={this.handleChange} readOnly/>
                <input className='ops' placeholder='+' onClick={this.handleChange} readOnly/>

            </div>


        )
    }
}
export default Operations;

