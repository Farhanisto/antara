import React from 'react'
import { Redirect } from 'react-router-dom'
const Signout = () => {
  return (
    <>
      {localStorage.removeItem('token')}
      <Redirect to="/" />
    </>
  )
}
export default Signout
