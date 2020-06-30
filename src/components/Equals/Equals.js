import React, {Component} from 'react';
import './Equals.css';

const addition =(a, b) => {
    console.log(`Add is ${a + b}`)
    return a + b;

}

const subtraction =(a, b ) => {
    console.log(`Sub is ${a - b}`)
    return a- b;

}

const  multiplication = (a, b) =>{
    console.log(`Multi is ${a * b}`)
    return a*b;
}
const division = (a, b) => {
    console.log(`Div is ${a / b}`)
    return a/b;
}

class Equals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }



    handleChange(event){
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
        if (operand === '+'){
            result= addition(sptNumbers[0], sptNumbers[1])
        }else if (operand === '-'){
            result= subtraction(sptNumbers[0], sptNumbers[1])
        }if (operand === '*'){
            result= multiplication(sptNumbers[0], sptNumbers[1])
        }if (operand === '/'){
            result= division(sptNumbers[0], sptNumbers[1])
        }
        this.props.Lilu(result);
    }
    render() {
        return (
                    <input className='equals' value='=' onClick={this.handleChange} readOnly />

        )
    }

}
export default Equals;