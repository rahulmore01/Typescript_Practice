// type aliases

// User becomes a new type here
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  //   if user dont want to provide AbstractRange, that onkeydown, no error
  age?: number;
};
// taking empty function for example
// function getUser(user: User){
//   console.log(user);
// }

// :User means function getUser will return only User type object
function getUser(user: User): User {
  return user;
}

// calling above function by providing user details as argument, as object
getUser({ _id: "one", name: "rahul", email: "rahul@gmail.com", isAdmin: true });
