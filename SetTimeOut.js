///// setTimeout()////

function greet (name){
    console.log("hello Good morning " + name);
}
setTimeout(greet , 5000 , "varsha");

///// clear timeOut ///// 

function byeText (name){
    console.log("Take Care " + name);
}
 timeOut = setTimeout(byeText , 5000 , "varsha");

 clearTimeout(timeOut);

 ///// set Interval //////

 function msg (name){
    console.log("my name is " + name);

 }
 setInterval(msg, 1000 , "varsha");
