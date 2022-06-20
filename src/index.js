
const core = require('@actions/core');


try{
   
    core.info('启动TCA......');
} catch (error){
    core.setFailed(error.message);
}