const core = require('@actions/core');
const { appendFile } = require('fs');
const shelljs = require('shelljs')
const child_process = require('child_process');
const path = require('path');

try{
    const filePath = path.join(__dirname, '../tca-client')
    core.info(filePath)
    core.info('......')

    const cmd = 'codepuppy quickinit'
    child_process.exec('ls', filePath, function (error, stdout, stderr){
        core.info(stdout)
    })

    core.info('clinet初始化中......')
    shelljs.exec('./codepuppy quickinit', filePath)
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