import Contact from "./Contact";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <p>Something went wrong. Please try again later.</p>;
      }
  
      return this.props.children;
    }
  }
  
  // Wrap your component that might throw errors with ErrorBoundary
  <ErrorBoundary>
    <Contact />
    
  </ErrorBoundary>