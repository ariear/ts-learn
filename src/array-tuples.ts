// array
let list1 = [1,2,3];
let list1_2 : number[] = [1,2,3];
let list1_3 : Array<number> = [1,2,3];

// union
let list2 : (number | string)[]
list2 = [1,'fakta', 3]
 
let list2_2 : Array<string | number>
list2_2 = ['kebanjiran', 43 , 'fakta']

// tuples 
let list3 : [string , number , number , number]
list3 = ['Arie', 10,20,30]

// json type value
let list4 : {color: number , name: string}[];
list4 = [
    {
        color: 100,
        name: 'lightblue'
    }
]

let list4_2 : Array<{color: number , name: string}>
list4_2 = [
    {
        color: 200,
        name: 'lightgreen'
    }
]

// object
let list5 : { id: number ,name: string}
list5 = {id: 1, name: 'Arie'}

// array in array
// let list6 : number[][]
let list6 : Array<Array<number>>
list6 = [[1],[2,4]]