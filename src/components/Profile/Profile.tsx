import { NavLink,Outlet } from "react-router-dom"

const Profile = () => {

    const profiles = [1,2,3,4,5]

  return (
    <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
        {profiles.map((profile)=>
            <NavLink  key={profile} to={`/profiles/${profile}`} className={({isActive})=>{
                return isActive ? 'highlight' : '';
            }}>
                Profile {profile}
            </NavLink>
        )}
        <Outlet/>
    </div>
  )
}

export default Profile