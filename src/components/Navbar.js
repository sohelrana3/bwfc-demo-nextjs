import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex  gap-x-2'>
        <Link href='/'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/temp'>Temp</Link>
    </ul>
  )
}

export default Navbar