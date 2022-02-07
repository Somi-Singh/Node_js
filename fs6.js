var fs=require('fs')
fs.appendFile('mynewfile1.txt','this is my text.',function(err){
    if (err) throw err;
         console.log('updating!');
});
//here we update the file by using fs.appendFile() methods

