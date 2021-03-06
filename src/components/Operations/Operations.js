import React, {Component} from 'react';
import './Operations.css';

const addition =(a, b) => {
    return a + b;
}

const subtraction =(a, b ) => {
    return a- b;
}

const  multiplication = (a, b) =>{
    return a*b;
}
const division = (a, b) => {
    return a/b;
}

class Operations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
        handleEvent(event){
            this.props.Matan(event.target.value)
    }

    handleChange(){
        let inputValue = document.getElementById("equal-btn").value, sptNumbers=[], operand, result ;
        document.getElementById("equal-btn").value = '';
        if (inputValue.includes('+')){
            operand= '+';
        }else if (inputValue.includes('-')) {
            operand ='-';
        }else if (inputValue.includes('*')){
            operand = '*';
        }else if (inputValue.includes('/')){
            operand = '/';
        }
        inputValue.split(operand).forEach(number => {
            sptNumbers.push( parseInt(number))
        })
        if(operand){
            if (operand === '+'){
                result= addition(sptNumbers[0], sptNumbers[1])
            }else if (operand === '-'){
                result= subtraction(sptNumbers[0], sptNumbers[1])
            }else if (operand === '*'){
                result= multiplication(sptNumbers[0], sptNumbers[1])
            }else if (operand === '/'){
                result= division(sptNumbers[0], sptNumbers[1])
            }
            this.props.Lilu(result);
        }else{
            result=null;
            this.props.Yotam(result);
        }
    }

    render() {
        return (
            <div className="Operations">
                <input className='ops' value='/' onClick={this.handleEvent} readOnly/>
                <input className='ops' value='&times;' onClick={this.handleEvent} readOnly/>
                <input className='ops' value='-' onClick={this.handleEvent} readOnly/>
                <input className='ops' value='+' onClick={this.handleEvent} readOnly/>
                <input className='ops' value='=' onClick={this.handleChange} readOnly />
            </div>
        )
    }
}
export default Operations;

