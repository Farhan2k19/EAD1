import React from 'react';

// Higher-order component
const withClassName = (WrappedComponent, className) => {
  return (props) => {
    return <WrappedComponent {...props} className={className} />;
  };
};

// Example component
const MyComponent = ({ className }) => {
  return <div className={className}>Hello, World!</div>;
};

// Usage of the HOC
const ComponentWithClass = withClassName(MyComponent, 'my-class');

// Render the component
const App = () => {
  return <ComponentWithClass />;
};

export default App;


//wnbdjkbwejkdbjwebfjbwejfbejbfjebwj
