const core = require('@actions/core');
const shelljs = require('shelljs')

try{
    core.info('clinet初始化中......')
    shelljs.exec('./tca-client/codepuppy quickinit')
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