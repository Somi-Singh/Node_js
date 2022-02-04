const fs=require("fs");
// creating a new file
// fs.writeFileSync("read.txt","welcome to somi's file");
fs.appendFileSync("read.txt"," how r u?")

const buf_data=fs.readFileSync("read.txt");
org_data=buf_data.toString();
console.log(org_data);


fs.renameSync("read.txt","readwrite.txt")