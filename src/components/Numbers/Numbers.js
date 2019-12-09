import React, {Component} from 'react';
import './Numbers.css';

class Numbers extends Component {
    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        this.props.Lewhat(event.target.value)
    }
    render() {
        return (
            <div className="Numbers">
                <div className='Numbers-field' >
                    <input className='numbers' value='7' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='8' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='9' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='4' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='5' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='6' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='1' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='2' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='3' onClick={this.handleChange} readOnly />
                    <input className='numbers0' value='0' onClick={this.handleChange} readOnly />
                    <input className='numbers' value='.' onClick={this.handleChange} readOnly />

                </div>
            </div>

        )
    }

}
export default Numbers;