class Context {
  constructor(value = null) {
    this.value = value;
  }

  // Provider component
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  // Consumer component
  Consumer = ({ children }) => {
    children(this.value);
  };
}
function CreateContext(value) {
  const contex = new Context(value);
  return {
    Provider: contex.Provider,
    Consumer: contex.Consumer,
  };
}
export default CreateContext;
