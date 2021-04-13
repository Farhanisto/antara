import { gql, useQuery } from '@apollo/client'
import React, { useState, useRef } from 'react'

const Patients = () => {
  const { loading, error, data } = useQuery(GET_PATIENTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const patients = data.patient
  console.log(patients, 'patient')
  return (
    <ul className="list-group">
      {patients ? (
        patients.map(({ name, id }) => (
          <li className="list-group-item" key={id}>
            {name}
          </li>
        ))
      ) : (
        <div> No patient records add patients</div>
      )}
    </ul>
  )
}

const GET_PATIENTS = gql`
  {
    patient {
      id
      name
    }
  }
`

export default Patients
