const p1 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("Promise 1 Sucess");
//   }, 3000);
  setTimeout(() => {
    reject("Promise 1 Sucess");
  }, 3000);
})
const p2 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("Promise 2 Sucess");
//   }, 1000);
  setTimeout(() => {
    reject("Promise 2 Rejected");
  }, 1000);
})
const p3 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("Promise 3 Sucess");
//   }, 2000);
  setTimeout(() => {
    reject("Promise 3 rejected");
  }, 2000);
})
// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values);
// }).catch((error)=>{
//     console.log("Error:", error);
// });


// Promise.allSettled([p1, p2, p3]).then((values) => {
//   console.log(values);
// }).catch((error)=>{
//     console.log("Error:", error);
// });


// Promise.race([p1, p2, p3]).then((values) => {
//   console.log(values);
// }).catch((error)=>{
//     console.log("Error:", error);
// });

Promise.any([p1, p2, p3]).then((values) => {
  console.log(values);
}).catch((error)=>{
    console.log("Error:", error);
});
