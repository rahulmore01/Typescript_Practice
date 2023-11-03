// we ca create a interface and use it as generics

interface T {
  name: string;
  age: number;
}

function getUserData<T>(arg: T): T {
  return arg;
}
