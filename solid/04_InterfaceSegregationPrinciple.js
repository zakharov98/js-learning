class Device {
    constructor() {
        if (this.constructor.name === 'Phone')
            throw new Error('Phone class is absctract')
        else
            this.name = this.constructor.name
    }
}

class Keyboard extends Device {
    press() {
        console.log(`${this.name} - press..`)
    }
}

class Mouse extends Device {
    click() {
        console.log(`${this.name} - click..`)
    }
}

const keyboard = new Keyboard()
keyboard.press()

const mouse = new Mouse()
mouse.click()