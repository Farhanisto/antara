import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"


const Root = () => (
  <Query query = {GET_PATIENT_QUERY}>
    {({data, loading , error}) =>{

      if(loading) return <div>loading</div>
      if(error) return <div> Error </div>
      return <div>{JSON.stringify(data)}</div>
    }}
  </Query>

)

const GET_PATIENT_QUERY = gql`
  {
  patient{
    id
    age
    name
    docter{
      id
    }
  }
}
`

export default Root