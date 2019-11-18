import React, {Component} from 'react';
import './Clear.css';

class Clear extends Component {
    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event) {
        this.props.Yotam(event.target.value)
    }
    render() {
        return (
            <div className="Clear">
                <input className='clear' placeholder='Clear' value='' onClick={this.handleChange} readOnly />
            </div>

        )
    }

}
export default Clear;