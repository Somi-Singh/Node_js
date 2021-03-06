let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);


//   The output is: 1.

// The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.