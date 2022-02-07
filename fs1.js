const fs=require("fs");
const bioData={name:"somi",age:18,channel:"singhaniya"};
const jsonData=JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log("done");
});

fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data);
    console.log(typeof data);
    const orgData=JSON.parse(data);
    console.log(orgData);
    console.log(typeof orgData);
});