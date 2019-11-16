import React from 'react';
import ReactDOM from 'react-dom';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.taskData && this.props.taskData.length ? this.props.taskData.map((item, index) => {
                return (
                    <div key={item + index}>
                        {item.name}     ,  {item.lastRunTime}, {item.nextRunTime}      {item.state}
                        <button onClick={() => this.handleClick(item.name)}> {item.name}  </button>
                    </div>
                )
            }) : null
        )
    }
}
export default Task;