const fs = require('fs')
const content = 'Logging to a file'
try {
    fs.writeFileSync('test.txt', content)
    console.log('logs completed')
} catch (err) {
    throw err
}