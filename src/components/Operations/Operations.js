import React, {Component} from 'react';
import './Operations.css';

class Operations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }


        handleChange(event){
            this.props.Matan(event.target.value)
    }

    render() {
        return (
            <div className="Operations">
                <input className='ops' value='/' onClick={this.handleChange} readOnly/>
                <input className='ops' value='*' onClick={this.handleChange} readOnly/>
                <input className='ops' value='-' onClick={this.handleChange} readOnly/>
                <input className='ops' value='+' onClick={this.handleChange} readOnly/>

            </div>


        )
    }
}
export default Operations;

