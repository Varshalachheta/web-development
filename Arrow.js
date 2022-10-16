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

/// another shortcut /// 

let add = (p,q) => p+q;

let half = a => a/2;

let msg = () => console.log("good to see you");
msg();

//// objects

let obj1 ={
    names: ["varsha", "sanju","lata"],
    speak(){
        this.names.forEach((student)=>{
            console.log("welcome! " + student );
        });
    }
}
obj1.speak();