class Discount {
    calculate() {
        throw new Error('Calculate method should be implemented')
    }
}

class VipDiscount extends Discount {
    constructor() {
        super()
    }

    calculate() {
        return 0.2
    }
}

class FridayDiscount extends Discount {
    constructor() {
        super()
    }

    calculate() {
        return 0.05
    }
}

class DiscountCalculator {
    constructor(discounts = []) {
        this.discounts = discounts
    }

    sum() {
        return this.discounts.reduce((total, discount) => {
            total += discount.calculate()
            return total
        }, 0)
    }
}


const calculator = new DiscountCalculator([
    new VipDiscount(),
    new FridayDiscount(),
])

console.log(calculator.sum().toFixed(2))
