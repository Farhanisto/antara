import React, { useState, useRef } from 'react'
import { useMutation, gql } from '@apollo/client'
import { Redirect } from 'react-router-dom'
const Register = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [
    registerUser,
    { loading: mutationLoading, error: mutationError, data },
  ] = useMutation(REGISTER_USER)
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordRef1 = useRef()

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          registerUser({
            variables: {
              username: usernameRef.current.value,
              email: emailRef.current.value,
              password: passwordRef.current.value,
            },
          })
        }}
      >
        <div className="mb-3">
          <label className="form-label">username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            ref={usernameRef}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">email</label>
          <input type="text" className="form-control" ref={emailRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" ref={passwordRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">confirm password</label>
          <input type="password" className="form-control" ref={passwordRef1} />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}

      {data && <Redirect to="/login" />}
    </div>
  )
}

const REGISTER_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createDoctor(username: $username, email: $email, password: $password) {
      Doctor {
        id
      }
    }
  }
`

export default Register
