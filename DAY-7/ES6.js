//1. variable
// var a = 10 

//-------------------------------------------

//2. ArrowFucntion

// var arrowFunction = () => {
//     console.log("Arrow Function");    
// }
// arrowFunction()

//-------------------------------------------

// 3. Scoping

// var a = 45 
// {
//      a = 20 
//     console.log(a);
//     let b = 100
//     console.log(b);
//     let c = 200
//     console.log(c);
//     a = 400
//     console.log(a);  
//     var e = 500 
//     f = 1000
//     console.log(a,b,c,e,f);
// }
// console.log(a);
// console.log(e);
// console.log(f);


// let a = 10 
// while(a < 12)
// {
//     console.log(a);
//     a++;
// }
// console.log(a);

//-------------------------------------------

//4. ternary operator

// a  = 11 ;
// console.log((a%2)?"ODD":"EVEN");

//-------------------------------------------

//5. spread operator 

// s1 = ["u1","u2","u3"];
// s2 = ["u4","u5","u6"];
// s3 = ["u7","u8","u9"];
// s4 = ["u10","u11","u12"];
// stdb = [...s1,...s2,...s3,...s4]
// // console.log(stdb);
// alumni = s4;
// // console.log(alumni);

// //-----------------------------------------------

// //6. Rest Operator(...)

// function studentDB(...st)
// {
//     console.log(st);
// }
// studentDB(stdb)
// //-----------------------------------------------

// //7. Destructing Opeartor ... 
// var array = [10,20,30,40]
// var [a,b,c,d,e,f,h] = array ;
// console.log(a,b,h);
//-----------------------------------------------

// 8. Hoisting
// 1. variable hoisting...
// console.log(a);
// const a = 10 
// console.log(a);

// funhoisting()

// function funhoisting(){
//     console.log("object");
// }

// funhoisting = () => {
//     console.log("object hositing");
// }
//-----------------------------------------------

class  fun{
    classfun(){
        console.log("HELLO");
        return null
    }
}
obj = new fun();
console.log(obj.classfun());
