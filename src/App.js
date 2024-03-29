import React, {Component} from 'react';
import './app.css'
import SearchBar from './components/SearchBar/SearchBar'
import Numbers from './components/Numbers/Numbers'
import Clear from './components/Clear/Clear'
import Operations from './components/Operations/Operations'
import Sign from "./components/Sign/Sign";
import Percent from "./components/Percent/Percent";

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
            let D = this.state.term.toString().concat(A)
            this.setState({term: D})
        }
    }

    getClear() {
           this.setState({term: ''})
    }

     getResult=(A)=>{
        this.setState({term: A})
     }

     getSign=(A)=>{
         this.setState({term: A})
     }

     getPercent=(A)=>{
         this.setState({term: A})
     }



    render() {
        return (
            <div className='intro'>
                <SearchBar Rediet={this.state.term} />
                <div className='container'>
                    <div className='clear-sign'>
                         <Clear  Yotam={this.getClear}/>
                         <Sign  Sign={this.getSign}/>
                         <Percent Percent={this.getPercent}/>
                    </div>
                    <Numbers Lewhat={this.getTerm}/>
                    <div className='ops-equals'>
                        <Operations Yotam={this.getClear} Lilu={this.getResult}  Matan={this.getTerm}/>
                        {/*<Equals />*/}
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
