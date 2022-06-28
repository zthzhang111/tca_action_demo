const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')

exports.tca_init = tca_init;
function tca_init(){
    core.info(process.cwd())

    core.info('tca初始化结束')
}