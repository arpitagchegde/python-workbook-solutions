import React from 'react';


function ChildComponent({ message }) {
    return (
        <div>
            <h3>Child Component</h3>
            <p>{message}</p>
        </div>
    );
}


export default ChildComponent;