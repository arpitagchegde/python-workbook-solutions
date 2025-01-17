import React, { Component } from 'react';


class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }


    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };


    render() {
        return (
            <div>
                <h2>Class Component Count: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}


export default ClassState;