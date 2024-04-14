import React, { useEffect, useState } from 'react'
import Container from './Container'

function Dashboard() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1000)
  }, [])
  return (
    <div>
      <Container />
  
    </div>
  )
}

export default Dashboard
