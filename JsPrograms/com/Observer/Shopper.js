// observer class this class holds the property about perticular object.

class Shopper{

    constructor(name){
        this.name = name
    }

    notify(CategoryName,Discount)
    {
        console.log(`${this.name}, there is sale for ${CategoryName} course! ${Discount}% off for every course`)
    }
}

module.exports = Shopper