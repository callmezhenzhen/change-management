import createJobs from "./jobsInProcess"

function createChangeProcess(opts) {
    const { title, deadlineDate, noticeDate, testDate, reportDate, finalDate } = opts
    // 初始化process
    const process = {
        title,
        steps: []
    }
    // 添加deadlineDate节点，该节点的生存周期为新建版本之后到最后期限之前
    process.steps.push(createJobs('deadlineDate', deadlineDate))
    // 添加发送版本需求提交时间截止通知邮件节点，该节点的生存周期为最后期限之后到第二天结束之前
    process.steps.push(createJobs('noticeDate', noticeDate))
    // 添加需求变更通知邮件节点，该节点的生存周期为需求封板之后到制品入口之前
    process.steps.push(createJobs('requirementChange'))

    return process
}

export default createChangeProcess