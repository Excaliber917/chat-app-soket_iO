import { BiLogOut } from "react-icons/bi"
import useLogout from "../hooks/useLogout"
function Logout() {
  const { loading, logout } = useLogout()

  return (
    <div className="mt-auto">
      {loading ? <div className='loading loading-spinner'></div> : <BiLogOut onClick={logout} title="logout" className="w-6 h-6 text-white cursor-pointer" />}
    </div>
  )
}

export default Logout
