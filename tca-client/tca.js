const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process').exec

exports.tca_init = tca_init;
function tca_init(){
    const cmd = './codepuppy quickinit'
    const cwd = process.cwd()+ '/tca-client'
    child_process(cmd, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info('run ${cwd} successfully')
    })
    core.info('tca初始化结束')
}