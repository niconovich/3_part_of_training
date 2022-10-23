// С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
// 2. Создать строку из имен пользователей через запятую
// 3. Посчитать общее количнство машин у пользователей
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую


// 1. Все функции и данные должны быть протипизированы
type Animals='cat'|'dog'
type Cars='bmw'|'audi'
type User={
    name:string,
    phone:string,
    email:string,
    animals?:Animals[],
    cars?:Cars[],
    hasChildren:boolean,
    hasEducation:boolean
}

const users:User[]= [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

//2. Создать строку из имен пользователей через запятую
function getUsersNameToString(users:User[]):string{
    return users.map((user)=>user.name).toString()
}
console.log(getUsersNameToString(users))

//3. Посчитать общее количнство машин у пользователей
function getCountCarsByUsers(users:User[]):number {
    let countCar:number=0
    users.map((currentValue) => {
        (currentValue.cars?countCar++:0)})
    return countCar
}
function getCountCarsByUsers2(users:User[]):number {
     return users.filter(user=>user.cars).length
}

console.log(getCountCarsByUsers(users))
console.log(getCountCarsByUsers2(users))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
function getUsersWithEducation(users:User[]):User[] {
    return users.filter(user=>user.hasEducation)
}

console.log(getUsersWithEducation(users))

// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
function getUsersWithAnimals(users:User[]):User[] {
    return users.filter(user=>user.animals)
}

console.log(getUsersWithAnimals(users))

// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
function getUsersCarsName(users:User[]):string {
    return users.filter(user=>user.cars).map(user=>user.cars).toString()
}

console.log(getUsersCarsName(users))