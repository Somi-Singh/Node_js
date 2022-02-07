const fs=require("fs");
fs.writeFile("read.txt",'i love my india:)',(err)=>{
    console.log('files is created');
    //if you want to check there is error or not so just use 
    console.log(err);//null becuase ther is no error
});

fs.appendFile("read.txt",'hye i love to my family very much.',(err)=>{
    console.log("task completed");
});
//here we are adding some data in txt file

fs.readFile('read.txt',(err,data)=>{
    console.log(data);
});
//here we get Buffer data so if we don't want this data so use "UTF-8" inside the string.

fs.readFile("read.txt","UTF-8",(err,data)=>{
   console.log(data); 
});
//here we read txt file
