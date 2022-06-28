const core = require('@actions/core')
const shelljs = require('shelljs')

exports.tca_init = tca_init;
function tca_init(){
    core.info(__dirname)
    shelljs.exec('./codepuppy quickinit')
    core.info('tca初始化结束')
}