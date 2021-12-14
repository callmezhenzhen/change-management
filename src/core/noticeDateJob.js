import createJob from "./jobFactory"

function createNoticeJob(timePoint) {
  const job = {
    timePoint,
    step: '版本通知时间节点',
    jobs: []
  }
  const job1 = createJob({description: '发送版本需求提交时间截止通知邮件'})
  job.jobs.push(job1)

  return job
}

export default createNoticeJob