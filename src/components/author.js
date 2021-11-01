import React from "react"

class Author extends React.Component {
  render() {
    return (
      <h3>任务接受者：{this.props.name}</h3>
    )
  } 
}

export default Author