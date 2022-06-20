const core = require('@actions/core');

try{
    core.info('hello world');
} catch (error){
    core.setFailed(error.message);
}