import React,  {useState} from "react";
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const Register = () => {
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // <Mutation >
  //   {
  //     () => {
        return (
          <form>
            <label>
              username:
              <input type="text" name="name" />
            </label>
            <label>
              email:
              <input type="text" name="email" />
            </label>
            <label>
              password:
              <input type="text" name="password"  />
            </label>
            <input type="submit" value="Register" />
            <button> Login</button>
         </form>
        )
      // }
  //   }
  // </Mutation>
  
};
// const REGISTER_DOCTOR = gql `
// mutation($username: String!, $email: String!, $password: String!){
//   createDoctor(username: $username, email: $email, password: $password){
//     Doctor{
//       id
//       username
//     }
//   }
// }`

export default Register;