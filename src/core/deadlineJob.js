import createJob from "./jobFactory"

function createDeadlineJob(timePoint) {
  const job = {
    timePoint,
    step: '版本需求提交截止时间节点',
    jobs: []
  }
  let status1 = 1
  let statusText1 = '进行中'
  if (new Date().getTime() > new Date(`${timePoint} 23:59:59`)) {
    status1 = 2
    statusText1 = '已完成'
  }
  const job1 = createJob({
    description: `该版本需求提交截止时间为${timePoint}`, 
    status: status1,
    statusText: statusText1
  })
  job.jobs.push(job1)

  return job
}

export default createDeadlineJob