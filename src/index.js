const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')

try{
    core.info('工具初始化中........')
    const label = core.getInput('label')
    const cmd = './codepuppy quickinit --label ' + label
    const cwd = process.cwd()+ '/tca-client'
    child_process.execSync(cmd, { cwd }, function(error, stdout, stderr){
        if (error){
            console.log(stderr)
            return
        }
        console.log(stderr)
    })
    setTimeout(() => {
        console.log('初始化完成........')
    }, 200);



} catch (error){
    core.setFailed(error.message);
}