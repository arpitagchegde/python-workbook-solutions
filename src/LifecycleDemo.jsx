import React, { Component } from 'react';


class LifecycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor: Component is being created.');
    }


    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps: Syncing state with props if necessary.');
        return null;
    }


    componentDidMount() {
        console.log('componentDidMount: Component has mounted.');
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Deciding whether to re-render.');
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Capturing DOM state before update.');
        return null;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Component updated.');
    }


    componentWillUnmount() {
        console.log('componentWillUnmount: Component is being removed.');
    }


    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };


    render() {
        console.log('Render: Rendering the component.');
        return (
            <div>
                <h2>Lifecycle Demo</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}


export default LifecycleDemo;