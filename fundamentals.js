// 1.How to declare  a variable using let and constant

const fatherName = ' Arnold ';
let season = 'rainy';
season = 'winter';

//condition     >,<, ===, ==!, <=,>=
//multiiple condition: &&, ||

if(fatherName === 'Arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}else{

}

//Array declare 
// index
// length,push,pop
const numbers = [89,35,98,12];
number[0] = 56;

//loop

for( let i = 0; i<numbers.length;i++){
    const number = numbers[i];
    const sum = number + i;
    console.log(sum);
}

//funstion

function multiply(number1,number2){
    const result = number1 * number2;
    return result;
}

const output = multiply(12,55);
console.log(output);

//object

const student = {

    name : 'sakib khan',
    age : 32,
    movies : ['king khan', 'Dhakar mastan']
}

const myVariable = 'age';

console.log(student.age);//direct by property
console.log(student['age']);//access via property name string
console.log(student[myVariable]);// access via property name in a variablegit 