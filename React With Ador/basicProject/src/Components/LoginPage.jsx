import Box from "./box";
function LoginBox(element){
  return(
    <>
      <div className="container">
        <div className="userName">
          <Box name="User Name Section" color="darkcyan"/>
      
        </div>
        <div className="userPassword">
          <Box name="Password Section" color="cadetblue"/>
          
        </div>
        <div className="buttons">
          <div className="Log in"><Box name="Log in" color="steelblue"/></div> 
          <div className="Sign up"><Box name="Sign up" color="steelblue"/></div> 
          
        </div>
      </div>        
    </>
  );
}
export default LoginBox;