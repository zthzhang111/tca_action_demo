const core = require('@actions/core')
const shelljs = require('shelljs')
const tca = require('../tca-client/tca.js')
const child_process = require('child_process').exec

try{
    // tca.tca_init()

    core.info('工具初始化中........')
    const label = core.getInput('label')
    const cmd = './codepuppy quickinit --label ' + label
    const cwd = process.cwd()+ '/tca-client'
    child_process(cmd, { cwd }, function(error, stdout, stderr){
        if (error){
            core.info('打印错误log')
            core.error(stderr)
            return
        }
        core.info('run ${cwd} successfully')
    })
    core.info('工具初始化完成........')
} catch (error){
    core.setFailed(error.message);
}