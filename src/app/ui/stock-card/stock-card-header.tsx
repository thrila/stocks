import React from 'react'

const StockCardHeader = () => {
  return (
    <div className='container flex space-x-24 py-3 rounded-t-lg bg-charcoal text-white px-2 font-thin font-sans justify-center'>
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
