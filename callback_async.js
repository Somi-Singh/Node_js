const fs = require('fs')
const content = 'Logging to a file'
fs.writeFile('test.txt', content, err => {
    if (err) {
        throw err
    }
    console.log('logs completed')
})
console.log('end script')