const core = require('@actions/core');
const exec = require('@actions/exec');

try{
   
    core.info('启动TCA......');
} catch (error){
    core.setFailed(error.message);
}