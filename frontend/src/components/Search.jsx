import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import useConversasion from '../zustand/useConversasion'
import useGetConversasion from '../hooks/useGetConversasion'
import toast from 'react-hot-toast'
function Search() {
  const [search , setSearch] = useState("")
  const {setSelectedConversasion} = useConversasion()
  const {conversasion} = useGetConversasion()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search)
      return
    if(search.length < 3)
    {
      return toast.error("at least 3 characters are required")
      
    }
    const convo = conversasion?.find((c)=>c.userName.toLowerCase().includes(search.toLowerCase()))
    if(convo){
      setSelectedConversasion(convo)
      setSearch('')

    }else{
      toast.error("no such user")
    }
  }
  return (
   <form className='flex items-center gap-2' onSubmit={handleSubmit}>
    <input type="text" placeholder='search..' className='input input-bordered rounded-full' value={search} onChange={(e)=>setSearch(e.target.value)} />
    <button type='submit' className='btn btn-circle text-white bg-success'>
       <FaSearch/>
    </button>
   </form>

  )
}

export default Search
