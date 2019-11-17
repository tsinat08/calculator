import React, {Component} from 'react';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Numbers from './components/Numbers/Numbers'
import Clear from './components/Clear/Clear'
import Operations from './components/Operations/Operations'


class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            term: ''
        }
        this.getTerm=this.getTerm.bind(this);
    }
    getTerm(A) {
        if(this.state.term.length<=0){
            this.setState({term: A})
        }else {
            let D = this.state.term.concat(A)
            this.setState({term: D})

        }
    }


    render() {
        return (
            <div className='intro'>
                <SearchBar Rediet={this.state.term}/>
                <Numbers Lewhat={this.getTerm}/>
                <Clear/>
                <Operations/>
            </div>
        );
    }

}

export default App;
