var fs = require('fs')
var path = require('path')
var request = require('request')
var shelljs = require('shelljs')
const url = 'https://github.com/Tencent/CodeAnalysis/releases/download/20220629.1/tca-client-v20220629.1-x86_64-linux.zip'
const fileName = 'tca.zip'
const dir = '/Users/zhangtenghui/Desktop/A'
shelljs.exec('ls')

let stream = fs.createWriteStream(path.join(dir, fileName))
request(url).pipe(stream).on('close', function(error){
    
})
