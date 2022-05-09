
function jml1(a : number , b : number) : number {
    return a + b;
}

const jml2 = function (a:number , b: number) :number {
    return a + b;
}

const jml3 = (a:number, b :number) :number => a + b

// funcntion with optional parameter
const jml4 = (a:number , b:number , c? : number ) :number => {
    return a + b
}

// function with callback
type Greeter = (message: string) => void

const request = (url: string, cb : Greeter) => {
    cb(url)
}

let callback = (str: string) => console.log(str)
 
request('https://arie-akbarull.netlify.app', callback)


// optional & default parameter

type Contact = {
    firstName : string,
    lastName: string,
    gender?: string,
    language: string 
}
const submitContact = (firstName: string, lastName : string, language = 'english',gender?:string) :Contact => {
    return {
        firstName,
        lastName,
        language,
        ...(gender && {gender})
    }
}

// Rest Parameter
const fruitsCollections = (item: string , ...restItem: string[]) => {
    return item + ' ,' + restItem.join('+')
}
console.log(fruitsCollections('Ini Argument Item','ini argumen restItem1','ini argumen restItem2'));


// condisional type with union - generic
const anjai = (message: string | number) : string | number => {
    return message
}

// arrow function generic
const anjai_generic = <T> (message: T) => {
    return message
}
anjai_generic<string>('halo')
anjai_generic<number>(6969)


// function generic
function anjai_generic_func<T> (message: T) : T {
    return message
}
anjai_generic_func<string>('anjai')
anjai_generic_func<number>(6969)