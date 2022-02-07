var fs=require("fs")
fs.open("mynewfile1.txt","w",function(err,file){
    if (err) throw err;
        console.log('save!');
});
//here we create file byb using fs.open() methods