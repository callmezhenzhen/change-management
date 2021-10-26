const list = [
  {
    name: '学习基础知识',
    status: 0
  },
  {
    name: '集成ant design',
    status: 0
  }
]
const listItem = list.map(item => 
  <li>任务名称：{item.name}，状态：{item.status === 1 ? '已完成' : '未完成'}</li>
)

function taskList () {
  return (
    <ul>{listItem}</ul>
  )
}

export default taskList