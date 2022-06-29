const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')

try{
    core.info('工具初始化中........')
    const label = core.getInput('label')
    const cmd = './codepuppy quickinit --label ' + label
    const cwd = process.cwd()+ '/tca-client'
    try {
        child_process.exec('npm ls',{ cwd },function(error,stdout,stderr){
            if(error){
                core.error(stderr)
                return
            }
            core.info('111')
            core.info(stderr)
        })
    } catch (error) {
        core.error(error.message)
    }
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