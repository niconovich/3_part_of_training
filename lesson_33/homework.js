// С ниже приведенным объектом решить следующие задачи:
//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200, teachers: 6
    }, biology: {
        students: 120, teachers: 7
    }, chemistry: {
        students: 100, teachers: 3
    }, geography: {
        students: 60, teachers: 2
    },
}

//Проверка на коррекность данных
function checkObj(obj) {
    let check = true
    if (typeof obj !== 'object') {
        check = false
    }
    if (Object.keys((obj)).length == 0) {
        check = false
    }
    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            check = false
        } else {
            if (!('students' in obj[key] && 'teachers' in obj[key])) {
                return false
            }
        }
    }
    return !check
}

//Создать строку из названий предметов написаных через запятую
function getStrName(obj = {}) {
    if (checkObj(obj)) {
        return null
    }
    let res = []
    for (const key in obj) {
        res.push(key)
    }
    return res.toString()
}

console.log('Задание 1:', getStrName(subjects))

//Посчитать общее количество студентов и учителей на всех предметах
function countStudTeach(obj = {}) {
    if (checkObj(obj)) {
        return null
    }
    let res = {'students': 0, 'teachers': 0}
    for (const key in obj) {
        res.students += obj[key].students
        res.teachers += obj[key].teachers
    }
    return res
}

console.log('Задание 2:', countStudTeach(subjects))


//Получить среднее количество студентов на всех пердметах
function avgStudPredmet(obj = {}) {
    if (checkObj(obj)) {
        return null
    }
    let allStud = 0
    let countPredmet = 0
    for (const key in obj) {
        allStud += obj[key].students
        countPredmet++
    }
    return allStud / countPredmet
}

console.log('Задание 3:', avgStudPredmet(subjects))

//Создать массив из объектов предметов
//Получить среднее количество студентов на всех пердметах
function createArrayPredmet(obj = {}) {
    if (checkObj(obj)) {
        return null
    }
    let res = []
    for (const key in obj) {
        res.push(key)
    }
    return res
}

console.log('Задание 4:', createArrayPredmet(subjects))

//Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
function getSortTech(obj = {}) {
    if (checkObj(obj)) {
        return null
    }
    let arrayRes = []
    arrayRes = createArrayPredmet(obj)
    return arrayRes.sort(function (a, b) {
        if (obj[a].teachers > obj[b].teachers) {
            return -1;
        }
        if (obj[a].teachers < obj[b].teachers) {
            return 1;
        }
        return 0;
    })


}

console.log('Задание 5:', getSortTech(subjects))