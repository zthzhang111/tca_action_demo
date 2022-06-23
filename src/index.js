const core = require('@actions/core');
const exec = require('@actions/exec')

try{
    core.info('启动TCA......');
    exec.exec('./tca-client/codepuppy scantask')
} catch (error){
    core.setFailed(error.message);
}