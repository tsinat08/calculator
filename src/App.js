import React, {Component} from 'react';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'


class App extends Component {
    render() {
        return (
            <div className='intro'>
                <SearchBar/>
            </div>
        );
    }

}

export default App;
