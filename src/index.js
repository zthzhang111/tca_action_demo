const core = require('@actions/core');
const shelljs = require('shelljs')

try{
    core.info('获取参数......');
    const code_path = core.getInput('code_path');
    const label = core.getInput('label');
    core.info(code_path);
    core.info(label)
    core.info('启动TCA......');
    shelljs.exec('./tca-client/codepuppy scantask');
} catch (error){
    core.setFailed(error.message);
}