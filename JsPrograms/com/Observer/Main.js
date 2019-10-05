const Shopper = require("./Shopper")
const Sales = require("./Sales")
const Category = require("./Category")

const designCategory = new Category("Design category")
const webcategory = new Category(" web Develoer category")
const Pd = new Category("personality development category")

const paul = new Shopper("paul")
const Mike = new Shopper("Mike")
const John = new Shopper("John")

const BlackFriday = new Sales()

designCategory.subscribe(BlackFriday)
webcategory.subscribe(BlackFriday)
Pd.subscribe(BlackFriday)

designCategory.subscribe(paul)
webcategory.subscribe(Mike)
Pd.subscribe(John)


designCategory.sale(20)
webcategory.sale(30)
Pd.sale(50)

console.log(BlackFriday.sales);
