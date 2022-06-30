const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')

const label = core.getInput('label')
const cwd = __dirname + '/../tca-client'
try{
    const cmd_init = './codepuppy quickinit --label ' + label
    shelljs.exec('ls')
    // core.info(process.cwd())  用户库的路径（代码扫描的目录）
    // core.info(cwd) 拼接出来的客户端目录
    // core.info(__dirname) 执行文件的所在路径，不带文件名
    child_process.execSync(cmd_init, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
} catch (error){
    core.error(error.message);
}

try {
    const cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd()
    child_process.execSync(cmd_scan, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
} catch (error) {
    core.error(error.message);
}