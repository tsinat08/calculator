import React, {Component} from 'react';
import './Clear.css';

class Clear extends Component {
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
            <div className="Clear">
                <input className='clear' placeholder='Clear' onClick={this.handleChange} readOnly />
            </div>

        )
    }

}
export default Clear;