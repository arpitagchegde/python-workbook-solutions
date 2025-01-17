import React, { useState } from 'react';


function FunctionalState() {
    const [count, setCount] = useState(0);


    return (
        <div>
            <h2>Functional Component Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}


export default FunctionalState;