import {useState} from 'react';

function About(){

    var initialVal = 0 
    var [num,setNum] = useState(initialVal)

    function minus()
    {
        setNum(num-1);
    }
    function plus()
    {
        setNum(num+1);
    }
    function reset()
    {
        setNum(initialVal);
    }
    return(
        <div>
            <h1 >This is About</h1>
            <h2>State initial Value is {initialVal}</h2>
            <button onClick={minus}>-</button>
            <h3>Updating State : {num}</h3>
            <button onClick={plus}>+</button>
            <br />
            <button onDoubleClick={reset}>RESET</button>
        </div>
    )
}

export default About