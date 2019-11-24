import React, {Component} from 'react';
import './Equals.css';

class Equals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){
        this.props.Lilu(event.target.value)
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