import React from "react"
import { Button, Input } from "antd"

class AddChange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowInputs: false
    }
  }
  showInputs() {
    this.setState({isShowInputs: true})
  }
  saveChange() {
    this.setState({isShowInputs: false})
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
            <Input size="large" placeholder="请填写变更标题"/>
            <br />
            <Button 
              type="primary" 
              size="small"
              onClick={() => {this.saveChange()}}
            >保存变更</Button>
          </div>
        }
      </div>
    )
  }
}

export default AddChange