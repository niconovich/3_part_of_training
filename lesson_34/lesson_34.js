var count = 1;
var isActive = true;
var names = 'Petya';
//let list: number[]=[1,2,3,4]
var list = [1, 2, 3, 4];
var y = ['good', 42];
var Day;
(function (Day) {
    Day[Day["SUNDEY"] = 0] = "SUNDEY";
    Day[Day["MONDAY"] = 1] = "MONDAY";
    Day[Day["TUEDAY"] = 2] = "TUEDAY";
})(Day || (Day = {}));
var day;
var createPassword = function (name, age) {
    return "".concat(name).concat(age);
};
console.log(createPassword('dddddd', 23));
