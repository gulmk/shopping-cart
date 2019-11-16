import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInfo: []
        };
    }
    handleClick = async (name) => {
        let selectedWord = name;
        console.log("Hiiii...");
        let that = this;
        this.fetchAPI(selectedWord).then(function (result) {

            that.setState({ taskInfo: result });
        });
    };

    fetchAPI(param) {
        return fetch("http://13.74.177.187:8585/api/Task/GetTaskInfo?FolderName=" + param)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .then(item => {
                // item["link"] = item._links.self.href;
                console.log(item);
                return item;
            }
            )
            .catch(error => {
                this.handleError(error);
            });
    }
    render() {
        return (
            this.props.pictureData && this.props.pictureData.length ? this.props.pictureData.map((item, index) => {
                return (
                    <div key={item + index}>
                        {item.FolderName}
                        <button onClick={() => this.handleClick(item.FolderName)}> {item.FolderName}</button>
                        <Task taskData={this.state.taskInfo}/>
                    </div>
                )
            }) : null
        )
    }
}
export default Picture;