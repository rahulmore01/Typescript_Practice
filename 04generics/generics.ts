// we ca create a interface and use it as generics

interface T {
  name: string;
  age: number;
}

function getUserData<T>(arg: T): T {
  return arg;
}

// using arrow funcitons
let T = [3, 4, 2, 2];

const genericsExample = <T>(arr: T[]): T[] => {
  console.log(arr);
  return arr;
};

genericsExample(T);
