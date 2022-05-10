
abstract class Root{
    abstract done: boolean
}

class User extends Root {
    id: number
    firstName: string
    lastName: string
    protected save: boolean
    private token : string
    static MAX_FAILED_LOGIN = 2
    private retry_login = 0
    done: boolean

    login(username: string , password :string){
        this.retry_login += 1
        if (username === 'Arie' && password === 'password') {
            return 'Welcomee Arie'
        }
        if (this.retry_login >= User.MAX_FAILED_LOGIN) {
            return 'Password max attemp'
        }
        return false
    }
    register(){}

    constructor(id: number , firstName: string , lastName: string){
        super()
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.save = false
        this.token = ""
        this.done = false
    }
}

let myUser = new User(1, 'Arie','Akbarull Ridho')
console.log(myUser.login('das','das'));
console.log(myUser.login('das','das'));
console.log(myUser.login('das','das'));


class EnhancmentUser extends User {
    location: string
    constructor(location: string, id: number , firstName: string , lastName: string){
        super(id, firstName ,lastName)
        this.location = location
        this.save
    }
}

let myNewUser = new EnhancmentUser("Jember", 69,'Arie', 'Bilek')