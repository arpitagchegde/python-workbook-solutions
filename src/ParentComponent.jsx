import React from 'react';
import ChildComponent from './ChildComponent';


function ParentComponent() {
    const message = 'Hello from Parent!';


    return (
        <div>
            <h2>Parent Component</h2>
            <ChildComponent message={message} />
        </div>
    );
}


export default ParentComponent;