// type
type User = {
    name: string,
    age: number
}
// interface
interface IUser{
    name: string,
    age: number
}


// merge 
interface Song {
    songName: string
}
interface Song{
    artisName: string
}
const mySong: Song = {
    songName: 'Black Catcher',
    artisName: 'VickeBlanka'
}

// intersection & union
type typeA = {
    id: number,
    propA : string
}
type typeB = {
    id: number,
    propB : string
}

type intersection = typeA & typeB

type union = typeA | typeB

const MyData : intersection = {
    id: 1,
    propA: 'Ini prop a',
    propB: 'Ini prop b'
}

const MyDataUni : union = {
    id: 1,
    propA: 'Ini prop a'
}

//  implements
//  Pada implement kita bisa membuat dengan interface / type
interface Addres {
    street: string
}
interface Person extends Addres {
    name:string
    age:number
    getName(id: string) : string
}
class People implements Person{
    name: string
    age: number
    street: string
    constructor(name: string , age: number) {
        this.name = name
        this.age = age
        this.street = ''
    }
    getName(id: string): string {
        return 'Yomann'
    }
}