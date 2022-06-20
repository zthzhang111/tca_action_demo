import '@actions/core';
import exec from '@actions/exec';

try{
   const core = require('@actions/core')
   core.info('启动TCA......');
} catch (error){
    setFailed(error.message);
}