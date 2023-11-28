import { FiSearch } from "react-icons/fi";


const Search = () => {
  return (
    <div className="my-8 ml-10 justify-center ">
      <div className='flex text-white  shadow-gold shadow-sm border my-5 h-12 rounded-full container max-w-md '>
        <input
          name='search'
          type='search'
          placeholder='Search Stock...'
          className='bg-transparent border-none outline-none from-inherit opacity-100 h-full w-full rounded-l-full bg-black px-3 ' />
        <div className='text-white flex text-xl px-5 items-center justify-start bg-black rounded-r-full' ><FiSearch />
        </div>
      </div>
    </div>
  )
}

export default Search
