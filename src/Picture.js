import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInfo: [],
            index:0
        };
    }
    handleClick = async (obj) => {
        let selectedWord = obj.FolderName;
        let inx = obj.inx;
        console.log("Hiiii...");
        let that = this;
        this.fetchAPI(selectedWord).then(function (result) {
            console.log("Hiiii..."+inx);

            that.setState({ taskInfo: result, index:inx });
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
                        <button onClick={() => this.handleClick({FolderName:item.FolderName, inx:index})}> {item.FolderName}</button>
                        {this.state.index === index ?<Task taskData={this.state.taskInfo}/>:null}
                    </div>
                )
            }) : null
        )
    }
}
export default Picture;