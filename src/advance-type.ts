
/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */


interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function CreateUser(data: Required<User>) {
//     data.id = 2
// }
// function CreateUser(data: Pick<User, 'id' | 'name'>) {}
// function CreateUser(data: Omit<User, 'id' | 'name'>) {}

// CreateUser({
//     id: 1,
//     name: 'doe',
//     age: 20,
//     createdAt: new Date(),
// });


//  Record
type repons = Record<string, string | number>
const message : repons = {
    id: '1',
    name: '',
    age: 4
}

type Users = Record<string , User>
const allUser : Users = {
    '1' : {id: 1 , name : 'Arie' , age: 1 , createdAt : new Date()},
    '2' : {id: 2 , name : 'Raja Satir' , age: 69 , createdAt : new Date()}
}