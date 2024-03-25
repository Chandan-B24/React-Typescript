import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loggedin from '../states/Loggedin'
import User from '../states/User'
import Effects from '../effects/Effects'
import Forms from '../Forms/Forms'
import DisplayForm from '../Forms/DisplayForm'
 
const AllRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Loggedin/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/Effects' element={<Effects/>}/>
                <Route path='/forms' element={<Forms/>}/>
                <Route path='/display/*' element={<DisplayForm/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default AllRoutes