import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '0'
        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        console.log(this);
        this.setState({term: event.target.value});
    }
    render() {
        return (
            <div className="SearchBar">


                <div className='SearchBar-field' >
                    <input placeholder='' onChange={this.handleChange} readonly/>
                </div>
            </div>

        )
    }

}
export default SearchBar;