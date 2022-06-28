const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')

exports.tca_init = tca_init;
function tca_init(){
    core.info(process.cwd() + '/tca-client')
    child_process.exec('./codepuppy quickinit', process.cwd()+ '/tca-client')
    core.info('tca初始化结束')
}