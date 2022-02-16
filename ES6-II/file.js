// 

// class Person {
//     constructor(n,s)
//     {
//         this.name = n;
//         this.sports = s;

//     }

// showname = () =>{
//     console.log(this.name)
// };
// }

// let p1 = new Person("sam", "polo");
// console.log(p1);


//inheritance
// class Car{
//     constructor(){
//         this.name= n;
//         this.brand = b;

//     }

// }

// let c1 = new Car("duster", "BMW");
// console.log(c1);
// class Tiger extends Cat {
//     cunstructor(n,b,o,t) {
//         super(n,b);
//         this.owner = o;
//         this.type = t;

//         }
// }
// let c2 = new SUV("duster","BMW", "Sam", "Car")
// console.log(c2);


// let food ={
//     ingreadients: ["butter", "paneer"],
//     cookfood: function(){
//         console.log("cooking paneer")

//     },
// };
// function ingreadients(a,b)  {
//     retun[a,b];
// }
// function cookFood() {
//     let ingre = ingreadients("butter", "paneer")
//     return `cokking food using  ${ingre}`
// }

class Stack {
    constructor() {
        this.length = 0;
        this.stack = [];
        }

        push(v) {
            this.stack.push(v);
            this.length++

        }
        pop() {
            this.stack.pop();
            this.length--;
        }
    
}
let s1 = new Stack();
s1.push("sam")
s1.push("wings of fire")
s1.push("3 mistakes of my life")

s1.pop();

console.log(s1);


