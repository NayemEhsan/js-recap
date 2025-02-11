const products = [

    {name : 'laptop', price : 32000, brand: 'lenovo', color: "silver"},

    {name : 'phone', price : 32000, brand: 'iphone', color: "silver"},

    {name : 'watch', price : 32000, brand: 'lenovo', color: "silver"},

    {name : 'sunglass', price : 32000, brand: 'glassdoor', color: "silver"},

    {name : 'camera', price : 32000, brand: 'camon', color: "silver"}
]

const brands = products.map(product =>product.brand);
console.log(brands)

const prices = products.map(product=>product.price)
console.log(prices)