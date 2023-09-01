import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

export function CrabForm() {
  const [crab, setCrab] = useState('')
  const {
    data: crabs,
    error,
    isLoading,
  } = useQuery(['crabs'], () => {
    const crabs = [
      'King Crab',
      'Ghost crab',
      'Snow crab',
      'Fiddler crab',
      'Spider crab',
    ]
    return crabs
  })

  if (error) {
    return `Could not load details for ${name}`
  }

  if (isLoading) {
    return <>...Loading</>
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCrab(event.target.value)
  }

  return (
    <form>
      <label>
        <select value={crab} onChange={handleSelectChange}>
          {crabs?.map((crab) => (
            <option key={crab} value={crab}>
              {crab}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}
