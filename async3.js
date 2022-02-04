// ...

async function msg() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg(); // 🤡 lurks in the shadows <-- after 500