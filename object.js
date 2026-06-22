// const obj={
//     "name":"Sujeet"
// }
// const obj2={
//     "name2":"ajeet"
// }
// const result=Object.assign(obj,obj2)
//  obj={...obj,...obj2}
// console.log((result))

// let users = [
//   { id: 1, name: "Sujeet", age: 24 },
//   { id: 2, name: "Rahul", age: 25 },
//   { id: 3, name: "Amit", age: 26 }
// ];

// users.push({
//   id: 4,
//   name: "Rohan",
//   age: 22
// });

// console.log(users);
// const newUser = {
//   id: 4,
//   name: "Rohan",
//   age: 22
// };

// users = [...users, newUser];
// console.log(users);

// // read 
// console.log(users);
// // find
// const user = users.find((item) => item.id === 2);
// console.log(user);
// // // filter 
// const result = users.filter((item) => item.age > 24);
// console.log(result);
// // update 

// users = users.map((item) =>
//   item.id === 2
//     ? { ...item, name: "Rahul Sharma" }
//     : item
// );

// console.log(users);
// // multiple field update 
// users = users.map((item) =>
//   item.id === 2
//     ? {
//         ...item,
//         name: "Rahul Sharma",
//         age: 30
//       }
//     : item
// );

// // delete 
// users = users.filter((item) => item.id !== 2);
// console.log(users);




// object is real world entity 
// method is a function inside the object 
// properties are the key-value pairs 
// object key only alpha
// Good question  — JavaScript object ke keys hamesha string ya symbol hote hain. Agar tum number ya dusra type use karoge, JavaScript automatically usse string bana deta hai.

// 🔹 Allowed Key Types in Object
// String (default)

// js
// let obj = { "name": "Sujeet", "age": 22 };
// console.log(obj["name"]); // Sujeet
//  Even if you write without quotes (name: "Sujeet"), internally it’s stored as a string key.
// Number (converted to string)
// js
// let obj = { 1: "apple", 2: "banana" };
// console.log(obj[1]);   // apple
// console.log(obj["2"]); // banana
//  Keys 1 and 2 are actually "1" and "2" strings internally.

// Symbol (unique key)
// js
// let id = Symbol("id");
// let obj = { [id]: 123 };
// console.log(obj[id]); // 123
//  Symbols are special because they don’t clash with other keys.

// Not Allowed as Keys
// Boolean, Object, Array, Function → Agar tum inhe key ke roop me use karoge, JavaScript unhe string me convert kar dega.

// js
// let obj = {};
// obj[true] = "yes";
// obj[{a:1}] = "objectKey";
// console.log(obj); 
// // { "true": "yes", "[object Object]": "objectKey" }
//  Notice how true became "true" and {a:1} became "[object Object]".


let obj={
   "name":"Sujeet",
   "city":"Varanasi",
   "class":"SoftPro",
   greet:function(){
    console.log("hello")
   },
   arr:[12,1,3,4,5,6],
   person:{
    "name":"XYZ",
    age:18
   }
}
// The member operator in JavaScript is the dot (.) operator.
// It’s used to access properties and methods of objects.
// object.property
// object.method()
// The object is the container, and the member operator (.) lets you reach inside to get a specific property or call a method
// types of object 
//1.BOM
//2.DOM
// way to create an Object 
//1.Using Constructor
 //ex- const a=new Object({})

//2.Using Literals 
 //const obj2={}


// console.log(obj.person.name)
// //console.log(obj."name") //this is the error  can not acces 
// obj.greet()
// console.log(obj["city"])
// console.log(obj["class"])


// for(let a in obj){
//     console.log(typeof a)
// //    console.log(a,obj[a])

// }


 const a=new Object({
   "name":"abc",
   12:"class",
   year:1
 })
  a.branch="cse"
  delete a["12"]
// console.log(a)

//  for(let i in a){
//     console.log(typeof i)
//  }

let arr2=[function (){
     console.log("hello")
},13]
arr2[0]()
console.log(arr2[1])
let arr=[{
  "name":"abc",
  age:20
},{
    "name":"xyz",
    age:21
},{
 "name":"pqr",
 age:32

},{
 "name":"xcv",
 age:22
}]

console.log(arr[2].name)

