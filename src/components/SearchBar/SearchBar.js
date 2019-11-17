import React, {Component} from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.getNumbers= this.getNumbers.bind(this)
    }
    getNumbers(){
        let A =this.props.Rediet;
        return A;
    }
    render() {
        return (
            <div className="SearchBar">
                <div className='SearchBar-field' >
                    <input className='searchBar' value={this.getNumbers()} readOnly/>
                </div>
            </div>

        )
    }

}
export default SearchBar;