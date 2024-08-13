import {FaSearch} from 'react-icons/fa'
function Search() {
  return (
   <form className='flex items-center gap-2'>
    <input type="text" placeholder='search..' className='input input-bordered rounded-full' />
    <button type='submit' className='btn btn-circle text-white bg-success'>
       <FaSearch/>
    </button>
   </form>

  )
}

export default Search
