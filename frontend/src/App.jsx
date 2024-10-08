

import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'


function App() {

  const {user} = useAuthContext()

  return (
    <div className="p-4 min-h-screen flex items-center justify-center">
     <Routes>
      <Route path='/' element={user ? <Home/> : <Navigate to="/login"/>}/>
      <Route path='/login' element={user ? <Navigate to="/"/> :<Login/>}/>
      <Route path='/signup' element={user ? <Navigate to="/"/> : <SignUp/>}/>
     </Routes>
     <Toaster/>

    </div>
  )
}

export default App
