const core = require('@actions/core')
const shelljs = require('shelljs')

const request = require('request')
const fs = require('fs')

function downloadFile(url, fileName, callback){
    const stream = fs.createWriteStream(fileName)
    request(url).pipe(stream).on('close', callback)
}
try{
    downloadFile(
        'https://mirrors.tencent.com/repository/generic/tca/release/opensource/v20220613.1/tca-client-v20220613.1-x86_64-linux.zip'
        ,'tca-client'
        ,function(){
        core.info('下载完毕')
    })

    const label = core.getInput('label')
    const cmd = './codepuppy quickinit --label ' + label
    const cwd = process.cwd()+ '/tca-client'

    core.info('工具初始化中........')
    const child_process = require('child_process')
    child_process.execSync(cmd, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
    setTimeout(() => {
        core.info('初始化完成........')
    }, 100);

} catch (error){
    core.error(error.message);
}