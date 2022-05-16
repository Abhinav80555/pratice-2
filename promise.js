// var age=parseInt(prompt("enter the age !!!"));
// var p1=new Promise((resolve,reject)=>{
//     if(age>=18){
//         resolve("you are eligible to vote!! ");
//     }
//     else{
//         reject("you are not eligible")
//     }
// });
// console.log(p1);
// p1.then((data)=>console.log(data)).catch((error)=>console.log(error));

//how to handle iF a function returns a promise?
// //using.then and .class
// function foo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>reject("this is rejected after 2 sec"),2000);
//     });
// } 
// foo().then((data)=>console.log(data)).catch((error)=>console.log(error));



// var p1=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>{
//             resolve("this is p1 resolved state")
//         },3000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("this is p1 rejected state")
//         },2000);
//     }
// });
// var p2=new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>{
//             resolve("this is p2 resolved state")
//         },2000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("this is p2 rejected state")
//         },2000);
//     }
// });
// p1.then((data)=>console.log(data)).catch((error)=>console.log(error));
// p2.then((data)=>console.log(data)).catch((error)=>console.log(error));
// Promise.all([p1,p2]).then((data)=>console.log(data)).catch((error)=>console.log(error));
//it will take array of promises as a parameter ,it will wait untill all the promises are resolved
//the output will be an array o resolved promises

//drawback:if any of the promises gettin rejected,it will be directly jumped
//to catch block ignoring the rest.


//promise chaining/chaining of promises
function foo(num){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>resolve(2*num),3000)
    });
}

foo(5).then((data)=>{
    console.log(data);
    return foo(data);//foo(10)
}).then((data1)=>{console.log(data1)
    return foo(data1);//foo(20)
}).then((data2)=>console.log(data2))
.catch((error)=>console.log(error));