import React from 'react';
import withLogging from './withLogging';
import SimpleComponent from './SimpleComponent';


const EnhancedComponent = withLogging(SimpleComponent);


function App() {
    return (
        <div>
            <EnhancedComponent message="Hello from HOC!" />
        </div>
    );
}


export default App;