import React, {Component} from 'react';
import './Clear.css';

class Clear extends Component {
    constructor(props) {
        super(props);
         this.handleClear= this.handleClear.bind(this)
    }
     handleClear(event) {
     this.props.Yotam(event.target.value)
    }
    render() {
        return (
                     <input className='sign' value='C' onClick={this.handleClear} readOnly />

        )
    }

}
export default Clear;