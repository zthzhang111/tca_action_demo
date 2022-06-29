const core = require('@actions/core')
const shelljs = require('shelljs')
const child_process = require('child_process')


try{
    const label = core.getInput('label')
    const cmd_init = './codepuppy quickinit --label ' + label
    const cwd = __dirname + '/../tca-client'
    shelljs.exec('ls')
    // core.info(process.cwd())  用户库的路径（代码扫描的目录）
    // core.info(cwd) 拼接出来的客户端目录
    // core.info(__dirname) 执行文件的所在路径，不带文件名
    core.info('工具初始化中........')
    child_process.execSync(cmd_init, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
    setTimeout(() => {
        core.info('初始化完成........')
    }, 100);
} catch (error){
    core.error(error.message);
}

try {
    const cmd_scan = './codepuppy quickscan --label ' + label + ' -s ' + process.cwd()
    core.info('开始执行代码分析........')
    child_process.execSync(cmd_scan, { cwd }, function(error, stdout, stderr){
        if (error){
            core.error(stderr)
            return
        }
        core.info(stderr)
    })
    setTimeout(() => {
        core.info('代码分析执行完毕........')
    }, 100);
} catch (error) {
    core.error(error.message);
}