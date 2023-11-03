// union |

type UserOne = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

// now rahul can be UserOne type or Admin type
let rahul: UserOne | Admin = {
  name: "Rahul",
  id: 1,
};

// type userOne={
//   name:string;
//   email:string;
// }
// type userTwo={
// id:number;
// age:number
// }
// // u can mix 1 of each obj prop in the union, use either both props of any one obj
// let details : userOne | userTwo = {
//   name:"Rahul",
//   id:1,
// }
