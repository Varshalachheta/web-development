///// for loop ////
let friends = ["popaye","tweety","seetoo","michen"];
for (let index = 0; index < friends.length; index++) {
    console.log ("hello friend  " + friends[index]);
    
}

///// forEach loop /////

let fruits = ["apple","mango","orange","grapes"];
fruits.forEach(element => {
    console.log(element + "  is good for health");
    
});

///// for of loop /////

let subject = ["CA","CN","SE","DAA","AI"];
for (element of subject) 
{
  console.log(element + " is my current semester subject");    
}

////// for in loop //////

let student = {
    name : "varsha",
    roll_no : "IC-2K19-97",
    class : "MCA VII sem",
    mob : 8305009756
}
for ( key in student) {
    console.log(`The ${key} of student is ${student[key]}`);
    
}

////// while loop //////

let i = 0;
while (i<4) {
    console.log(`${i} is less than 4`);
    i++;
    
}

////// do while loop //////
let j = 10;
do {
    console.log(`${j} is less than 4 but we are inside the do while loop`);
    j++;
} while (j<4);
