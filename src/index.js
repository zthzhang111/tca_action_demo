const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')

try{
    child_process.execSync(
        'wget https://mirrors.tencent.com/repository/generic/tca/release/opensource/v20220613.1/tca-client-v20220613.1-x86_64-linux.zip'
        ,process.cwd()
        ,function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })

    const label = core.getInput('label')
    const cmd = './codepuppy quickinit --label ' + label
    const cwd = process.cwd()+ '/tca-client'
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