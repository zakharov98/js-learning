class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class UserView {
    constructor(user) {
        this.user = user
    }

    html() {
        return `<div><span>User: ${this.user.name}, age - ${this.user.age}</span></div>`
    }

    json() {
        return JSON.stringify({
            name: this.user.name,
            age: this.user.age
        })
    }
}


const view = new UserView(
    new User('Addie', 20)
)

console.log(view.html())
console.log(view.json())