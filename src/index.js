const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')


try{
    const label = core.getInput('label')
    const cmd = './codepuppy quickinit --label ' + label
    const cwd = __dirname + '/../tca-client'
    shelljs.exec('ls')
    core.info(cwd)
    core.info(__dirname)
    core.info('工具初始化中........')
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