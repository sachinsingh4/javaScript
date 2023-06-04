"use strict";

//Qno1...Write a program which return true or false...
/*


//Normal function...
function calavg(a, b) {
  let avg = (a + b) / 2;
  if (avg > 10) {
    return true;
  } else {
    return false;
  }
}

//Function Expression...

const calavg1 = function (a, b) {
  if (a == b) return true;
  else if (a > b) return false;
  else return a;
};

//Arrow function...
const calavg2 = (a1,b1) => a1 + b1;

let a = 5;
let b = 6;
let a1 = Number(prompt("Enter value1"));
let b1 = Number(prompt("Enter value2"));
console.log(calavg(a, b));
console.log(calavg1(a, b));
console.log(calavg2());
*/
// ========================================================================================
/*
//String Literal Concept...

let s = "Sachin";
let s1 = "Singh";
console.log(s1 + " " + s);
console.log(typeof s);
let age = 10;
var add = "Tamilnadu";
console.log(
  `Hello... My name is ${
    s + " " + s1
  } And my age ${age} and currently i am doing PG from ${add}`
);

console.log("Hello" + 5 + " is a number");
console.log(`Hello ${5} is a number`);

*/

//========================================================================================

//Array concept...

//Qno1... Remove duplicate from an array...
/*
const print = function (arr) {
  const newarr = [];
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    flag = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
};

const arr = [3, 1, 2, 3, 1, 5, 2];
console.log(print(arr));
*/

//========================================================================================
//Scoping concept...
/*
{
  let a = 5;
  console.log(a);
  var b = 10;
  console.log(b);
}

//console.log(a);//This line gives error bcz of we are acceing element from outside of block

console.log(b); //We can var from any where...

const glob = 12; // Global scope...
{
  console.log(glob);
}
console.log(glob);

*/

//========================================================================================
//this keyword in javascript...

//1. this in method...
/*
const person = {
  fname: "Sachin",
  lname: "Singh",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};

console.log(person.fullName());
console.log(this); // gives the all browers element.

const person2 = {
  year: 1996,
};

console.log((person2.fullName = person.fullName())); // this is called as borrow function...

*/

//============================================================================================================
//Destructing object...
/*
const sachin = {
  name: "sachin",
  lname: "Singh",
};

const { p1, p2 } = sachin;
console.log(sachin.name);
console.log(p1);

*/

//=============================================================================================================
//Map and set...
/*
const set = new Set([1, 2, 4, "Sachin", 3]);
for (const item of set) {
  console.log(item);
}
//Add element in set...
set.add(10);
//console.log(set);
console.log(set.size);
set.delete(2);
console.log(set);
console.log(set.has(3));
*/

//Map....
/*
const map = new Map();
map.set(1, "sachin");
console.log(map);
console.log(map.get(1));

const map1 = new Map([
  [1, "helloe"],
  [2, "hii"],
]);
console.log(map1);
*/

//Qno1 from array to copy element in map and print map
/*
const arr = new Array();

for (let i = 0; i < 3; i++) {
  arr[i] = Number(prompt("enter array element"));
}
const map = new Map();
for (let i of arr) {
  if (!map.has(i)) {
    map.set(i, "Sachin");
  }
}

for (const [key, value] of map) {
  console.log(key + " " + value);
}




//Type Conversion...
const STR = "3";
console.log(Number(STR));

//template literal...
let sac = `Sachin is a good boy ${5}`;
console.log(sac);

//Type coercion
let sac1 = 5 + 2 + "sachin is";
console.log(sac1);
console.log("1.0" == "1");
let s = prompt("enterno");
*/

// const sac = document.getElementById("sac");
// console.log(sac);

// const arr = ["sachin", "anurag", "akash", "abhsihek"];
// const arr1 = arr.splice(0, 2);
// console.log(arr1);

// const arr3 = ["sachin", "anurag", "akash", "abhsihek"];
// const arr4 = arr3.slice(2);
// console.log(arr4);

/*Map Reduce and bind

//Map function...

const arr = [1, 2, 3, 4, 5];
console.log(arr);
//Map create a new array
const arr1 = arr.map((item) => item * 2);

console.log(arr1);

const arr2 = arr.filter((item) => item % 2 == 0);
console.log(arr2);

const arr3 = ["sachin", 2];
console.log(arr3);

*/
//===================================================================================
//MAP Function...
/*
const arr = [1, 2, 3, 4, 5];
const arr1 = arr.map((item, index, accumulator) => {
  //console.log(item);//It gives item of array like 1,2,3,4,5...
  //console.log(index);//It gives array index like 0,1,2,3,4.
  console.log(accumulator);
});


//Reduce function...this function is used to like add all element of array.
//This function reduce an array values into one values. llike adding all element.
//Method...1
const arr = [1, 2, 3, 4, 5];
const arr1 = arr.reduce((result, item) => {
  return result + item;
});
console.log(arr1);

//Method...2
function ans(result, item) {
  return result + item;
}

const array = [1, 2, 3];

let temp = array.reduce(ans);
console.log(temp);
==========================================================================================
//Promises... It says that I promises a result
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

let myPromises = new Promise(function (myResolve, myReject) {
  //Producing code...
  myResolve(); //When Successfull
  myReject(); //When Error.
});

//Consuming Code...
myPromises.then(
  function (value) {
    console.log("Code is successfull");
  },
  function () {
    console.log("Code is not successfu");
  }
);
//Three promises state i.e.
//1. pending: undefined,
//2. Fullfield: a result value
//3.Reject: Gives an error obejct.

function ans() {
  console.log("successful promises function will execute");
}
========================================================================================

//TimeOut example using callBack and Promises...

//syntax of setTimeout...
// setTimeout(function () {
//   console.log("Hlo");
// }, 3000);

setTimeout(function () {
  myFunction("Hi my name is sachin");
}, 3000);

function myFunction(value) {
  console.log(value);
} //here you can simply see that we apply a timer for myfunction using setTimeout.
*/
//Now do the above program using Promise and pass delay also...

let myPromises = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("Hi my name is sachin");
  }, 3000);
});

myPromises.then(function (value) {
  console.log(value);
});
