import React, {Component} from 'react';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Numbers from './components/Numbers/Numbers'
import Clear from './components/Clear/Clear'
import Operations from './components/Operations/Operations'


class App extends Component {
    render() {
        return (
            <div className='intro'>
                <SearchBar/>
                <Numbers/>
                <Clear/>
                <Operations/>
            </div>
        );
    }

}

export default App;
