function sjit(value,funcall){
    console.log(value);
    funcall();
}
function callbacksjit(){
    console.log("Second");
}

sjit("first",callbacksjit)