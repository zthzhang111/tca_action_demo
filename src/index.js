const core = require('@actions/core');
const shelljs = require('shelljs')

try{
    core.info('启动TCA......');
    shelljs.exec('./tca-client/codepuppy scantask')
} catch (error){
    core.setFailed(error.message);
}