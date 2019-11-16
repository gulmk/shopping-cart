import React from 'react';
import ReactDOM from 'react-dom';
import Picture from'./Picture';
import Task from './Task';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            taskinfo: []
        };
    }

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

    render() {
        return (
            <>
            <Picture  pictureData={this.state.pictures}/>
           
            </>
        )
    }
}
export default App;