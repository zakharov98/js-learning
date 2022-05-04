class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    get width() {
        return this._width
    }
    
    get height() {
        return this._height
    }

    set width(value) {
        this._width = value
    }

    set height(value) {
        this._height = value
    }

    getArea() {
        return this._width * this._height
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }

    set width(value) {
        this._width = this._height = value
    }

    set height(value) {
        this._width = this._height = value
    }
}

const square = new Square(2)
square.width = 3
console.log(square.getArea())

const rectangle = new Rectangle(2, 2)
rectangle.width = 3
console.log(rectangle.getArea())