import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';


function Login(){
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

   const login = () => {
      //request done
      setUser({
          id: 1,
          name: "papirico"
      })
  }
  const logout = () => setUser(null)
  
    return (
        <>
        <div className="General_container">
        <div className=" panel_login">
            <div className="grid-el login-image">
              <div className="login-content-logo">
                <img src="./src/assets/logogid.png" width={"180px"} alt="logo" />            
              </div>
            </div>
            <div className="grid-el login-content">
              <div className="login-content-form">
              <label htmlFor="email" >Username</label>
                <input type="email" name="email" id="email-login"  placeholder="Correo electrónico"/>
                <label htmlFor="passw">Password</label>
                <input type="password" name="passw" id="passw-login" placeholder="Digite una contraseña segura"/>
                <input type="submit" value="Log In" id="submit-login" onClick={() => {navigate("/home")}} />
              </div>
              <p style={{textAlign:"center", marginBottom: "25px"}}><Link to={'/signup'}><a href="#">Crear una cuenta</a></Link></p>
            </div>
        </div>
       
        </div>             
       
        </>
    )
}
export default Login