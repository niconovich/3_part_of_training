let count: number = 1;
let isActive: boolean = true;
let names: string = 'Petya';

//let list: number[]=[1,2,3,4]
let list: Array<number> = [1, 2, 3, 4]

let y: [string, number] = ['good', 42]

enum Day {'SUNDEY', 'MONDAY', TUEDAY}
let day: Day

const createPassword=(name: string, age?: number): string => {
  return `${name}${age}`
}

console.log(createPassword('dddddd',23))