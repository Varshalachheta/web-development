/// Arrow Function /// 
let greet= ()=>{
    console.log('good morning');
}
greet();
let sum = (a,b)=>{
    return a+b;
}

setTimeout(()=>{
    console.log("we are inside the setInterval")
} , 3000);