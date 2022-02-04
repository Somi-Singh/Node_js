async function hello() {
    return 'Hello Alligator!';
  }
  
  const b = hello();
  
  console.log(b); // [object Promise] { ... }

//   or
async function hello() {
    return 'Hello Alligator!';
  }
  
  const b = hello();
  
  b.then(x => console.log(x)); // Hello Alligator!

//   or

async function hello() {
    return 'Hello Alligator!';
  }
  
  hello().then(x => console.log(x)); // Hello Alligator!