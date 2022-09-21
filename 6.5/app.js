//1
const o = { name  : "Aya"}
let arr=Array(100).fill(o);
//console.log(arr);
//2
let arr2=Array.from(Array(100).keys());
//3
const obj={"1":9,"2":8,"3":7,"4":6,"5":5};
let arr3=[]
arr3 = Object.values(obj);
//console.log(arr3);
//4
const arr4 = ['zero', 'one', 'two'];
const obj1 = Object.assign({}, arr4);
//console.log(obj1); 
//5
const result = Array.isArray(arr4);
//console.log(result);

//6
let arr6=[1,2,3,4,5];
let arr7=arr6.slice();
arr7.push(6);
//console.log(arr6);
//console.log(arr7);

