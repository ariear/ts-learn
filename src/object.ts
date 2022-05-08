interface Product {
    id: string,
    productName: string,
    price: number,
    note: string
}

let product1 : Product = {
    id: '999',
    productName: 'Mekbuk',
    price: 15000000,
    note: 'mekbuk ini sangat cocok untuk mengoding'
}


// nested object
interface Item {
    id: number,
    nameProduct: string,
    price: number,
    ready: boolean,
    productDetail: ItemDetail
}
interface ItemDetail{
    year: string,
    stock: number
}

let product2: Item = {
    id: 1,
    nameProduct: 'Lenovo Ideapad Slim 3',
    price: 5000000,
    ready: true,
    productDetail: {
        year: '2022',
        stock : 69
    }
}

// Nested , array of Object
interface Siswa{
    id: string,
    name: string,
    address: Addreess[]
}
interface Addreess{
    street: string,
    city: string
}

let siswa : Siswa = {
    id: "U-1",
    name: "Adi dodi",
    address: [
      {
        street : "Jln. Setapak No.2",
        city: "Jakarta"
      },
      {
        street: "Jln. Lebar sekali no 10",
        city: "Medan"
      }
    ]
  }


// Nested , object of object
interface Chart{
    idCart: string,
    dateOrdered: string,
    items: {
        [key: string] : ChartItem
    }
}
interface ChartItem{
    id: string,
    name: string,
    qty: number
}

let chart : Chart = {
    idCart: "C1",
    dateOrdered: "2020-05-20",
    items: {
      p1 :{
        "id": "P-1",
        "name": "Mechanical Keyboard",
        "qty": 2
      },
      p2 :{
        "id": "P-2",
        "name": "USB Hub",
        "qty": 1
      }
    }
  }


  // Object Destructuring
  let fullname = {
      firstName: 'Arie',
      lastName: 'Akbarull'
  }
  
  let { firstName , lastName } : {firstName: string , lastName: string} = fullname;