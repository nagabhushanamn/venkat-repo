import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './componentes/Message';
import Greeting from './componentes/Greeting'
import Box from './componentes/Box'
import Container from './componentes/Container'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      message:'greetings'
    }
  }
  
  render() {
    console.log('App:render()');

    let messageComp;

    if(this.state.message){
      messageComp=<Message message={this.state.message}/>
    }else{
      messageComp=null;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="page-header"> {this.props.title} </div>

        
        {
          /*
        <button className="btn btn-default" 
                onClick={()=>{this.setState({message:'Good Morning'})}}>
        Say GM 
        </button>
        <button className="btn btn-default" 
                onClick={()=>{this.setState({message:''})}}>
        Remove Message
        </button>
       
        <hr/>

        {messageComp}

        <hr/>

        <Greeting greet="Ola" />

        <hr/>

        <Box color="yellow"/>

        <hr/>
        */
        }

        <Container>
          <Message message="message1"/>
          {
            //getComps()
          }
        </Container> 
        
        <Container>
          <Box/>
        </Container>  

      </div>
    );
  }
}

export default App;
