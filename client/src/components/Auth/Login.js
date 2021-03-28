import React, {useState, useRef} from "react";
import { useMutation, gql } from '@apollo/client';


const Login = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [setToken, { loading: mutationLoading, error: mutationError, data }] = useMutation(LOGIN_USER)
  const usernameRef = useRef()
  const passwordRef = useRef()
  console.log(setToken, 'setTOkeen')
  
  return(
  <div className="container">
  <form onSubmit={e => {
            e.preventDefault();
            setToken({variables: {username:usernameRef.current.value, password:passwordRef.current.value}});
            
          }}>
     <div className="mb-3">
       <label className="form-label">username</label>
       <input type="text" className="form-control"  aria-describedby="emailHelp" ref= {usernameRef}/>
     </div>
     <div className="mb-3">
       <label  className="form-label">Password</label>
       <input type="password" className="form-control" ref= {passwordRef}/>
     </div>
     <button type="submit" className="btn btn-primary">Login</button>
  </form>
  {/* {console.log(passwordRef.current.value)} */}
  {mutationLoading && <p>Loading...</p>}
  {mutationError && <p>Error :( Please try again</p>}
  </div>)
}

const LOGIN_USER = gql`
mutation tokenAuth($username:String, $password:String){
  tokenAuth(username:$username, password:$password){
    token
  }
}
`;

export default Login;