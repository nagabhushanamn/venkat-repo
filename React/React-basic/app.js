

// ES5 

// HelloComponent - class

// let HelloWorld=React.createClass({
//     render:function(){
//         let ele=React.createElement('div',null,"Hello - Welcome to react");
//         return ele;
//     }
// })


// let helloWorld=React.createElement(HelloWorld,null,null); // instance

// ReactDOM.render(helloWorld,document.getElementById("root"))

//-----------------------------------------------------------------

// ES5 with JSX

// let HelloWorld=React.createClass({
//     render:function(){
//         let ele=(<div>Hello, Welcome</div>)
//         return ele;
//     }
// })


// let helloWorld=<HelloWorld />

// ReactDOM.render(helloWorld,document.getElementById("root"))

//-----------------------------------------------------------------

// ES6


class HelloComponent extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                HelloComponent
            </div>
        )

    }
}

// let hello = <HelloComponent />

ReactDOM.render(<HelloComponent />, document.getElementById("root"))

