import createJob from "./jobFactory"

function createRequirementChangeJob(timePoint) {
  const job = {
    timePoint,
    step: '需求变更做好记录',
    jobs: []
  }
  // job1
  const job1 = createJob({description: '需求封板后变更'})
  job.jobs.push(job1)
  // job2
  const job2 = createJob({description: '需求提测后变更'})
  job.jobs.push(job2)

  return job
}

export default createRequirementChangeJob