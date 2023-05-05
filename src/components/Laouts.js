import React from 'react'
import Navbar from './Navbar'

const Laouts = ({children}) => {
  return (
    <>
    <Navbar />
    <main>{children}</main>
    <h2>footer</h2>
    </>
  )
}

export default Laouts