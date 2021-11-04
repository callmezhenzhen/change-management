import React from "react"
import { DatePicker } from 'antd'

class MyDatePicker extends React.Component {
    render() {
        return (
            <div>
                <span>date-picker</span>
                <DatePicker />
            </div>
        )
    }
}

export default MyDatePicker