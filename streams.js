const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');

readStream.on('data', (chunk) => {
    console.log('----- new chunk');
    console.log(chunk.toString());
})

