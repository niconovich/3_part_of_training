// Протипизировать данные

type Empl = { id: number, email: string, first_name: string, last_name: string, avatar: string, age: number, key: number | null }

const users: Empl[] = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23,
        "key": null
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20,
        "key": 23,
    }
]
type Currency = 'euro'|'dollar'|'rub'
type Ingredients ='flour'| 'beef'| 'salad'|'cheese'| 'sauce'|'cucumber'|'pepper'
// enum Ingredients {
//     Flour='flour',
//     Beef='beef',
//     Salad='salad',
//     Cheese='cheese',
//     Sauce='sauce',
//     Cucumber='cucumber',
//     Pepper='pepper'}
type Products = {
        id: number,
        name: string,
        price: number,
        currency: Currency,
        ingredients: Ingredients[][],
        type:string,
        available:boolean
}
// currency описать с помощью литеральных типов и объединения
const products: Products[]= [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: [["flour", "beef"], ["salad", "cheese", "sauce"]],
        type: "burger",
        available: false,
    },
    {
        id: 2,
        name: "Burger Lite",
        price: 2.3,
        currency: "euro",
        ingredients: [["flour", "beef"], ["cheese", "sauce", "cucumber"]],
        type: "burger",
        available: true,
    },
    {
        id: 3,
        name: "Burger Spicy",
        price: 5,
        currency: "dollar",
        ingredients: [["flour", "beef"], ["cheese", "sauce", "pepper"]],
        type: "burger",
        available: true
    },
]


//Проверка на корректность данных
const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 7
    },
    chemistry: {
        students: 100,
        teachers: 3
    },
    geography: {
        students: 60,
        teachers: 2
    },
};
type predmet='geography'|'chemistry'|'biology'|'mathematics'
type paramsClass={
    students:number,
    teachers:number
}
type premet={
    [prop:string]:paramsClass
}

function checkObj(obj: premet): boolean {
    let check = true;
    if (typeof obj !== "object") {
        check = false;
    }
    if (Object.keys((obj)).length == 0) {
        check = false;
    }
    for (const key in obj) {
        if (typeof obj[key] !== "object") {
            check = false;
        } else {
            if (!("students" in obj[key] && "teachers" in obj[key])) {
                return false;
            }
        }
    }
    return !check;
}