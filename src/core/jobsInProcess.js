import createDeadlineJob from "./deadlineJob"
import createNoticeJob from "./noticeDateJob"
import createRequirementChangeJob from "./requirementChangeJob"

function createJobs(type, timePoint) {
  let job = {}
  switch (type) {
    case 'deadlineDate':
      job = createDeadlineJob(timePoint)
      break
    case 'noticeDate':
      job = createNoticeJob(timePoint)
      break
    case 'requirementChange':
      job = createRequirementChangeJob()
      break
    default:
      job = createDeadlineJob(timePoint)
  }
  return job
}

export default createJobs