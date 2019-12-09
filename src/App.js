import React, {Component} from 'react';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Numbers from './components/Numbers/Numbers'
import Clear from './components/Clear/Clear'
import Operations from './components/Operations/Operations'
import Equals from './components/Equals/Equals'

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            term: ''
        }
        this.getTerm=this.getTerm.bind(this);
        this.getClear=this.getClear.bind(this);

    }
    getTerm(A) {
        if(this.state.term.length<=0){
            this.setState({term: A})
        }else {
            let D = this.state.term.concat(A)
            this.setState({term: D})

        }
    }

    getClear() {
           this.setState({term: ''})
    }

     getResult=(A)=>{
        this.setState({term: A})
         console.log(`A is ${A}`)
     }
    getAfterResult = (A) => {

    }

    render() {
        return (
            <div className='intro'>
                <SearchBar Rediet={this.state.term} />
                <Numbers Lewhat={this.getTerm}/>
                <Clear  Yotam={this.getClear}/>
                <Operations Matan={this.getTerm}/>
                <Equals Yotam={this.getClear} Lilu={this.getResult} />
            </div>
        );
    }

}

export default App;
