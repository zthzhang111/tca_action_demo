const core = require('@actions/core')
const shelljs = require('shelljs')
const exec = require('@actions/exec')

exports.tca_init = tca_init;
function tca_init(){
    core.info(__dirname)
    exec.exec('./codepuppy quickinit')
    core.info('tca初始化结束')
}