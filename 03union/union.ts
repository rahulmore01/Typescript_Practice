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
