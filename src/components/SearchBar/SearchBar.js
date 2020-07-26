import React, {Component} from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.getNumbers= this.getNumbers.bind(this)
    }
    getNumbers(){

        let A = this.props.Rediet;
            if (A === 'C'){
                console.clear()
            }else{
               A= this.props.Rediet;
            }
            return A

        }

    render() {
        return (
            <div className="SearchBar">
                <div className='SearchBar-field' >
                    <input  id='equal-btn' className='SearchBar-input' value={this.getNumbers()} readOnly/>
                </div>
            </div>

        )
    }

}
export default SearchBar;