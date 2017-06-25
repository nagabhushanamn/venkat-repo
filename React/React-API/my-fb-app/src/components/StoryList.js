import React, { Component } from 'react';
import Story from './Story'

class StoryList extends Component {
    render() {
        let { stories } = this.props

        let storyComps = stories.map(function (story,i) {
            return <Story story={story} key={i}/>
        })

        return (
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">Story List - ({stories.length})</div>
                    <div className="list-group">
                        {storyComps}
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryList;