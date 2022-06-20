const core = require('@actions/core');
const github = require('@actions/github');
try{
   core.info('启动TCA......');
} catch (error){
    setFailed(error.message);
}