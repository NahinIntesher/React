class Context {
  constructor(value) {
    this.value = value;
  }
  // Provider component
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };
  // Consumer component
  Consumer = ({ children }) => children(this.value);
}
function CreateContext(value = null) {
  const contex = new Context(value);
  return {
    Provider: contex.Provider,
    Consumer: contex.Consumer,
  };
}
export default CreateContext;
