import {useState,useEffect} from 'react'
const UseEffect = () => {
    var[text,setText]=useState("Hi");
    var[text1,setText1]=useState("Hello");
    useEffect(()=>{
        console.log(text);
    },[text]);
    useEffect(()=>{
        console.log(text1);
    },[text1]);
     return(
        <section>
            <h1>This is useEffect Example</h1>
            Type your Text:{" "}
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
            <h2>The text typed is {text}</h2>

            Type your Text1:{" "}
            <input type="text" value={text1} onChange={(event)=>setText1(event.target.value)}/>
            <h2>The text typed is {text1}</h2>
        </section>
     )
}
export default UseEffect;



