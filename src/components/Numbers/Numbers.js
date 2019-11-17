import React, {Component} from 'react';
import './Numbers.css';

class Numbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        console.log(this);
        this.setState({term: event.target.value});
    }
    render() {
        return (
            <div className="Numbers">
                <div className='Numbers-field' >
                    <input className='numbers' placeholder='7' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='8' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='9' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='4' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='5' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='6' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='1' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='2' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='3' onClick={this.handleChange} readOnly />
                    <input className='numbers' placeholder='0' onClick={this.handleChange} readOnly />

                </div>
            </div>

        )
    }

}
export default Numbers;