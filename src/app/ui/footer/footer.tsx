import React from 'react'
import getYear from '@/app/lib/getDate'

const Footer = () => {
  return (
    <div className='container mx-auto py-2 text-center bg-primary'>
      <p className='text-lines'> @michael emmanuel | {`${getYear()}`}</p>
    </div>
  )
}

export default Footer
