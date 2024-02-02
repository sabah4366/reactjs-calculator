import {  useState } from "react";
import './style.css'


function Main() { 
    const [inputValue,setInputvalue] = useState('')

    function display(value){
        setInputvalue(inputValue + value)
    }
    function calculate(){
        let answers = eval(inputValue)
        setInputvalue(answers)
    }
    function clear(){
        setInputvalue('')
    }

   return (<>
    <form name='calc' className="calculator" >
        <input type="text" defaultValue={inputValue} className="value"/>
        <span className="num clear" onClick={() => clear()}>c</span>
        <span onClick={() => display('/')}>/</span>
        <span onClick={() => display('*')}>*</span>
        <span onClick={() => display('7')}>7</span>
        <span onClick={() => display('8')}>8</span>
        <span onClick={() => display('9')}>9</span>
        <span onClick={() => display('-')}>-</span>
        <span onClick={() => display('4')}>4</span>
        <span onClick={() => display('5')}>5</span>
        <span onClick={() => display('6')}>6</span>
        <span className="plus" onClick={() => display('+')}>+</span>
        <span onClick={() => display('1')}>1</span>
        <span onClick={() => display('2')}>2</span>
        <span onClick={() => display('3')}>3</span>
        <span onClick={() => display('0')}>0</span>
        <span onClick={() => display('00')}>00</span>
        <span onClick={() => display('.')}>.</span>
        <span className="equal" onClick={() => calculate()}>=</span>
    </form>
   
   </>)
}

export default Main;