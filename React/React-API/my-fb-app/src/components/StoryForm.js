import React, { Component } from 'react';

class StoryForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showForm: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        let newStory = {
            name: this.refs.name.value,
            body: this.refs.body.value
        }
        this.props.onNewStory(newStory);

        this.refs.name.value = "";
        this.refs.body.value = "";
    }

    showForm() {
        if (this.state.showForm) {
            return (
                <div className="panel panel-danger">
                    <div className="panel-heading">Story Form</div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" ref="name" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" ref="body"></textarea>
                            </div>
                            <button className="btn btn-primary">submit</button>
                        </form>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <button className="btn btn-primary" 
                            onClick={()=>{this.setState({showForm:!this.state.showForm})}}>
                            {this.state.showForm?'Hide':'New Story'}
                    </button>
                    <hr/>
                    {this.showForm()}
                </div>
            </div>
        );
    }
}

export default StoryForm;