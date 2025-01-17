import React from 'react';


function withLogging(WrappedComponent) {
    return function LoggingComponent(props) {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
}


export default withLogging;