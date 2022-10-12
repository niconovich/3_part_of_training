// С ниже приведенным массивом пользователей решить следующие задачи:
// 1. Получить средний возраст пользователей.
// 2. Отсортировать массив по возрасту от большего к меньшему.
// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста.
//    Например, есть ли пользователь, которому 22 года? Ответ должен быть: true
const users = [
    {
        id: 1,
        username: "Michael Lawson",
        age: 22,
    },
    {
        id: 2,
        username: "Tom Spot",
        age: 32,
    },
    {
        id: 3,
        username: "Kate Ford",
        age: 18,
    }
];

function checkArray(array) {
    let check = true;
    if (array == null) {
        check = false;
    }
    if (typeof array != "object") {
        check = false;
    }
    if (check) {
        let checkAge=0
           array.forEach(items => {

            if (typeof items.age != "undefined") {
                if (typeof items.age != "number") {
                    check=false
                } else {
                    checkAge++
                }
            }
         })
         if (checkAge==0) {check = false;}
        }
    return check;
}

function getAvgAge(array) {
    if (!checkArray(array)) {
        return null;
    }
    let countAge = 0;
    let count = 0;
    array.forEach(items => {
            if (typeof items.age != "undefined") {
                countAge += items.age;
                count++;
            }

        }
    );
    return countAge / count;
}


console.log(getAvgAge(users));

function sortArray(array) {
    if (!checkArray(array)) {
        return null;
    }
    return array.sort(function (a, b) {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
        return 0;
    });
}

console.log(sortArray(users));

function chekAge(age = 0, array) {
    if (!checkArray(array)) {
        return null;
    }
    let result = false;
    array.forEach(items => {
            if (items.age == age) {
                result = true;
            }
        }
    );
    return result;
}

console.log(chekAge(18, users));