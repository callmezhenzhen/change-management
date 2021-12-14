function createJob(opts) {
    const { description = '未知任务', status = 0, statusText = '未完成' } = opts

    return {
        description,
        status,
        statusText
    }
}

export default createJob