import React from 'react'
import getYear from '@/app/lib/getDate'

const Footer = () => {
  return (
    <div className='container bg-opacity-0 opacity-70 mx-auto py-2 text-center bg-primary'>
      <p className='text-white'> @Michael Emmanuel | {`${getYear()}`}</p>
    </div>
  )
}

export default Footer
