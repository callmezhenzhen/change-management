import React from "react"
import { Button, Input, DatePicker } from "antd"
import createChangeProcess from "../core/changeProcess"
class AddChange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowInputs: false,
      isShowSaveBtn: false,
      title: '',
      deadlineDate: '',
      noticeDate: '',
      testDate: '',
      reportDate: '',
      finalDate: ''
    }
  }
  showInputs() {
    this.setState({isShowInputs: true})
  }
  saveChange() {
    // this.setState({isShowInputs: false})
    const change = createChangeProcess(this.state)
    console.log('change', change)
  }
  // 显示与隐藏保存变更的按钮
  disPlaySaveBtn() {
    const state = this.state
    let showSaveBtn = false
    if (
      state.title && 
      state.deadlineDate && 
      state.noticeDate && 
      state.testDate && 
      state.reportDate && 
      state.finalDate && 
      new Date(state.deadlineDate).getTime() < new Date(state.noticeDate).getTime() && 
      new Date(state.noticeDate).getTime() < new Date(state.testDate).getTime() && 
      new Date(state.testDate).getTime() < new Date(state.reportDate).getTime() && 
      new Date(state.reportDate).getTime() < new Date(state.finalDate).getTime()
    ) {
      showSaveBtn = true
    }
    this.setState({isShowSaveBtn: showSaveBtn})
  }
  onTitleChange = (event) => {
    this.setState({title: event.target.value}, () => {
      this.disPlaySaveBtn()
    })
  }
  // 一个变更周期各个阶段的时间节点变化
  onDateChange = (date, dateString, type) => {
    const arg = {[type]: dateString}
    this.setState(arg, () => {
      this.disPlaySaveBtn()
    })
  }
  render() {
    return (
      <div>
        <Button 
          type="primary" 
          size="large"
          onClick={() => {this.showInputs()}}
        >新增变更</Button>
        {this.state.isShowInputs &&
          <div>
            <Input value={this.state.value} onChange={this.onTitleChange} size="large" placeholder="请填写变更标题"/>
            <br />
            <DatePicker onChange={(date, dateString) => this.onDateChange(date, dateString, 'deadlineDate')} placeholder="请选择版本计划提交deadline" />
            <br />
            <DatePicker onChange={(date, dateString) => this.onDateChange(date, dateString, 'noticeDate')} placeholder="请选择版本通知时间" />
            <br />
            <DatePicker onChange={(date, dateString) => this.onDateChange(date, dateString, 'testDate')} placeholder="请选择测试域提测时间" />
            <br />
            <DatePicker onChange={(date, dateString) => this.onDateChange(date, dateString, 'reportDate')} placeholder="请选择出测试报告时间" />
            <br />
            <DatePicker onChange={(date, dateString) => this.onDateChange(date, dateString, 'finalDate')} placeholder="请选择现网升级时间" />
            <br />
            {
              this.state.isShowSaveBtn &&
              <Button 
                type="primary" 
                size="small"
                onClick={() => {this.saveChange()}}
              >保存变更</Button>
            }
          </div>
        }
      </div>
    )
  }
}

export default AddChange