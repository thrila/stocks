import React from 'react'

const StockCardItem = () => {
  return (

    <div className='flex space-x-24 py-3 text-black bg-cards px-3 my-2 rounded font-thin font-sans'>
      <p className=''> Name</p>
      <p className=''> Last</p>
      <p className=''> Chg</p>
      <p className=''>Chg%</p>
      <p className=''> High</p>
      <p className=''>Low</p>
      <p className=''>Open</p>
      <p className=''>Close</p>
    </div>
  )
}

export default StockCardItem
