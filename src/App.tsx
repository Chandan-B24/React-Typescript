import React from 'react'
// import AllRoutes from './components/AllRoutes/AllRoutes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Loggedin from './components/states/Loggedin'
import User from './components/states/User'
import Forms from './components/Forms/Forms'
import DisplayForm from './components/Forms/DisplayForm'
import Notfound from './components/Notfound/Notfound'
import Profile from './components/Profile/Profile'
import SingleProfile from './components/Profile/SingleProfile'
import Auth from './components/Auth/Auth'
import HookForm from './components/Hookform/HookForm'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Loggedin/>,
    errorElement : <Notfound/>
  },
  {
    path : '/user',
    element : <User/>
  },
  {
    path : '/forms',
    element : <Forms/>
  },
  {
    path : '/display/*',
    element : <DisplayForm/>
  },
  {
    path : '/auth',
    element : <Auth/>
  },
  {
    path : '/hookform',
    element : <HookForm/>
  },
  {
    path : '/profiles',
    element : <Profile/>,
    children : [  
      {
      path : '/profiles/:profileId',
      element : <SingleProfile/>
    },
  ]
  }

])

const App:React.FC = () => {
  return (
    <div>
     {/* <AllRoutes/> */}
    <RouterProvider router={router}/>
    </div>
  )
}

export default App