const core = require('@actions/core');
const exec = require('@actions/exec');

try{
    const label = core.getInput('label')
    core.info(label)
    core.info('启动TCA......');
} catch (error){
    core.setFailed(error.message);
}