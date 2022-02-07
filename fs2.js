//we want to run our code syncronous so that we use syncronous version of fs
const fs=require('fs')
//creating a new file

fs.writeFileSync("index1.txt",'Hii i am somi.')

//here txt file data is change .
fs.writeFileSync("index1.txt","welcome to singhaniya")

//here we add the data in txt file.
fs.appendFileSync("index1.txt"," how are you? I am fine:)")

//here we read the data from txt file. here if we read it gave buffer data.
//node.js includes an additional data type called buffer.
//(not available in browser's javascript).
//Buffer is mainly used to store 
const buf_data=fs.readFileSync("index1.txt")
console.log(buf_data)

org_data=buf_data.toString()
console.log(org_data);
//here we get the data from txt file.

//to rename the file.
fs.readFileSync("index1.txt",'indexwrite1.txt')
