let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });


// ***********************************


// let promise = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });


// *****************************************


// let promise = new Promise(function(resolve, reject) {
//     resolve("done");
  
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
//   });

// ******************************************

// let promise = new Promise(function(resolve, reject) {
//     // not taking our time to do the job
//     resolve(123); // immediately give the result: 123
//   });