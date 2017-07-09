import React, { Component } from 'react';

class Story extends Component {
    render() {
        let {story}=this.props;
        return (
            <div className="list-group-item">
                <div className="alert alert-info">
                    <span className="badge">{story.name}</span><hr />
                    <p>{story.body}</p>
                </div>
            </div>
        );
    }
}

export default Story;