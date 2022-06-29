const request = require('request')
const fs = require('fs')

function downloadFile(url, fileName, callback){
    const stream = fs.createWriteStream(fileName)
    request(url).pipe(stream).on('close', callback)
}
