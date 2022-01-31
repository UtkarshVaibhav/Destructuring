// destructure the name and password from
let prob1 = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' };
const {name,password}=prob1;
console.log(name,password);
// ------------------------------------------------------------------------
// destructure the pincode and rename to pin
let prob2 = {  name: 'masai', address: {  pincode: 560095 }  }
let {address:{pincode:pin}}=prob2;
console.log(pin);
// -------------------------------------------------------------------------
// destructure the first value and second value of the array
let prob3 =[ 100, 200, 500, 600 ] ;
let [val1,val2]=prob3;
console.log(val1,val2);
// -------------------------------------------------------------------------

// destructure to get the value 50 from this array
let prob4=[ 100, [  50, 60, 70  ]   ] ;
let [a,b]=prob4;
console.log(b[0]); 
// -------------------------------------------------------------------------
// destructure to get the value 2,3 into a new array
let arr1=[  1, {  
    arr: [ 1, 2, 3 ]
  }
];
let{arr}=arr1[1];
const [c,...newArr]=arr;
console.log(newArr);