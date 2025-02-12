
const employee = {
    ide : 'vs code',
    designation : 'developer',
    machine : 'mac',
    language : ['html','css', 'js'],
    specification : {
        height: 66,
        weight: 75,
        address : 'barisal',
        drink : 'water'
    }
}

// const employeeJSON = JSON.stringify(employee);
// const studentJSON =JSON.parse(employee)
// console.log(employeeJSON)
// console.log(employee) 

//fetch

// fetch('url')
// .then(res=>res.json())
// .then(data => console.log(data))

//object keys and values

const keys = Object.keys(employee);
const values = Object.values(employee)


//for 
const numbers =[23,55,96,88,45,53,32];
numbers.forEach(num =>console.log(num));
numbers.map(num => num * 2);


// for of on array like object
// for in using loop on an object 

const products = [

    {name : 'laptop', price : 32000, brand: 'lenovo', color: "silver"},

    {name : 'phone', price : 32000, brand: 'iphone', color: "silver"},

    {name : 'watch', price : 32000, brand: 'lenovo', color: "silver"},

    {name : 'sunglass', price : 32000, brand: 'glassdoor', color: "silver"},

    {name : 'camera', price : 5000, brand: 'camon', color: "silver"}
]


const newProduct ={name :'webcam', price: 7000, brand : 'lal'};

// copy product array and then add new product

const newProducts = [...products,newProduct]
console.log(newProducts);

// create a new array without new specific item
//remove phone create a eithout the phone

const remaining = products.filter(product => product.name !== ' phone');
console.log(remaining)