import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
const PictureInfo = ({ pictures }) => {
    return (
        pictures && pictures.length ? pictures.map((item, index) => {
            return (
                <div key={item + index}>
                    {item.FolderName}
                    <button onClick={() => this.handleClick(item.FolderName)}> {item.FolderName}</button>
                </div>
            )
        }) : null
    )
}
class Apps extends React.Component {
    constructor(props) {
        // makes this refer to this component
        super(props);
        // set local state
        this.state = {
            pictures: [],
            taskinfo: []
        };
        //    this.handleClick = this.handleClick.bind(this);
    }
    handleClick = async (name) => {
        let selectedWord = name;
        let that = this;
        fetchAPI(selectedWord).then(function (result) {
            that.setState({ taskinfo: result });
        });
    };

    componentDidMount() {
        fetch('http://13.74.177.187:8585/api/Task/GetSubFolders')
            .then(results => {
                console.log(results)
                return results.json();
            }).then(data => {
                console.log("State", data);
                this.setState({ pictures: data });

            })
    }
    getPictureInfo = (pictures) => {
        return (
            pictures && pictures.length ? pictures.map((item, index) => {
                return (
                    <div key={item + index}>
                        {item.FolderName}
                        <button onClick={() => this.handleClick(item.FolderName)}> {item.FolderName}</button>
                    </div>
                )
            }) : null
        )
    }
    getTaskInfo = (taskinfo) => {
        return (
            taskinfo && taskinfo.length ? taskinfo.map((item, index) => {
                return (
                    <div key={item + index}>
                        {item.name}     ,  {item.lastRunTime}, {item.nextRunTime}      {item.state}
                        <button onClick={() => this.handleClick(item.name)}> {item.name}  </button>
                    </div>
                )
            }) : null
        )
    }
    render() {
        const { pictures, taskinfo } = this.state
        return (
            <h1>
                {this.getPictureInfo(pictures)}
                {this.getTaskInfo(taskinfo)}

            </h1>
        )
    }
}
function fetchAPI(param) {
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

ReactDOM.render(<App/>, document.getElementById('root'));*/
