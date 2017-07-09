import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props);
        console.log("Message:constructor");
        //this.state={data:''}
    }

    componentWillMount() {
        console.log("Message:componentWillMount");
    }

    render() {
        console.log("Message:render");
        return (
            <div className="alert alert-info">
                {this.props.message}
                <hr/>
                <button className="btn btn-default" 
                onClick={()=>{this.forceUpdate()}}>
                Reload
            </button>
            </div>
        );
    }

    componentDidMount(){
        console.log("Message:componentDidMount");
        /*
         N/W calls
        */
        //this.setState({data:'some-data'});
    }

    componentWillReceiveProps(nextProps){
        console.log("Message:componentWillReceiveProps");
        console.log(this.props)
        console.log(nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Message:shouldComponentUpdate");
        if(this.props.message===nextProps.message)return false;
        return true;
    }
    componentWillUpdate(){
        console.log("Message:componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Message:componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Message:componentWillUnmount");
    }

    

}

export default Message;