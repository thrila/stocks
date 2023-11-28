import React from 'react'
import Logo from '../logo/logo'

const Header = () => {
  return (
    <div className='container mx-auto max-w-full border-b border-body py-5 flex md:flex-row  justify-between bg-opacity-0 opacity-70'>
      {/* logo */}
      <Logo />
      <div className='flex text-white space-x-5 pr-20  text-lg  font-semibold'>
        <p>watchlist </p>
        <p>currency</p>
        <p> mode</p>

      </div>
    </div>
  )
}

export default Header
