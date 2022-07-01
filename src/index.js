const core = require('@actions/core')
const child_process = require('child_process')


// var fs = require('fs')
// var path = require('path')
// var request = require('request')
// var shelljs = require('shelljs')
// const url = 'https://github.com/Tencent/CodeAnalysis/releases/download/20220629.1/tca-client-v20220629.1-x86_64-linux.zip'
// const fileName = 'tca.zip'
// const dir = process.cwd()+ '/lib'
// core.info(dir)
// shelljs.exec('ls ' + dir)
// let stream = fs.createWriteStream(path.join(dir, fileName))
// request(url).pipe(stream).on('close', function(error){
//     console.log(fileName + '下载完毕')
// })




const label = core.getInput('label')
const cwdd = __dirname + '/../lib/tca-client-linux'
try{
    const cmd_init = './codepuppy quickinit --label ' + label
    child_process.execSync(cmd_init, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
} catch (error){
    core.error(error.message);
}

// try {
//     const cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd()
//     child_process.execSync(cmd_scan, { cwd }, function(error, stdout, stderr){
//         if (error){
//             core.error(stderr)
//             return
//         }
//         core.info(stderr)
//     })
// } catch (error) {
//     core.error(error.message);
// }


