function boxify (num1,num2){
  const numbers = [num1,num2]
  return numbers;
}


const [first,second] = boxify(32,95);
const nums = [first,second];
console.log(nums)

// console.log(boxify(32,95))


//object destructuring

const {name,age,salary}= { name: 'ehsan', age : 25}

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

const {machine,ide} = employee;
const {weight,drink} = employee.specification;

const instrument = {machine,ide};
const about ={weight,drink};
console.log(instrument,about)