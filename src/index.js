const core = require('@actions/core');
const { appendFile } = require('fs');
const shelljs = require('shelljs')
const exec = require('child_process').exec

try{
    core.info(__dirname)
    const cmd = 'codepuppy quickinit'
    const cwd = './tca-client'
    shelljs.exec('ls', 'tca-client', function (error, stdout, stderr){})

    core.info('clinet初始化中......')
    shelljs.exec('codepuppy quickinit', 'tca-client')
    core.info('client初始化完成')

    core.info('获取参数......');
    const code_path = core.getInput('code_path');
    const label = core.getInput('label');
    core.info(code_path);
    core.info(label)
    core.info('启动TCA......');
    shelljs.exec('./tca-client/codepuppy quickscan --label' + label + '-s ./');
} catch (error){
    core.setFailed(error.message);
}