import React, {Component} from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.getNumbers= this.getNumbers.bind(this)
    }
    getNumbers(){

        let A = this.props.Rediet;
        console.log(A)
            if (A === 'C'){
                console.clear()
            }
            return A
        }

    render() {
        return (
            <div className="SearchBar">
                <div className='SearchBar-field' >
                    <input  id='equal-btn' className='searchBar' value={this.getNumbers()} readOnly/>
                </div>
            </div>

        )
    }

}
export default SearchBar;