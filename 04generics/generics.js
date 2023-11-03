// we ca create a interface and use it as generics
function getUserData(arg) {
    return arg;
}
// using arrow funcitons
var T = [3, 4, 2, 2];
var genericsExample = function (arr) {
    console.log(arr);
    return arr;
};
genericsExample(T);
