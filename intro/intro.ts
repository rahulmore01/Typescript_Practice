console.log("follow me on medium");

//string

let title: string = "Welcome to typeScript";

// Number -- interger & floats
let tutorialNum: number = 1;

// Boolean
let userIsAdmin: boolean = true;

console.log(title, tutorialNum, userIsAdmin);

// Functions
const loginUser = (name: string, email: string, isAdmin: boolean = false) => {};

// u have to pass 3 values to the function ,if u miss one of them it will through error, to avoid this declare some values as default like isAdmin:false

loginUser("rahul", "rahul@MediaList.com");
