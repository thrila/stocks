import React from 'react'

const StockCardHeader = () => {
  return (
    <div className='flex space-x-32 py-5 rounded-t-lg bg-cards px-5 font-thin font-sans'>
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
// Name	Last	Chg	Chg%	High	Low	Open	Close
export default StockCardHeader 
