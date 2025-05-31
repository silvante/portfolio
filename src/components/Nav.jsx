import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center items-center p-5'>
        <div className='space-x-5 flex flex-wrap justify-center items-center'>
            <NavLink className={({isActive}) => isActive ? "flex border-b-2 border-violet-600 transition-all" : "flex transition-alltransition-all border-b-2 border-transparent"} to={""}>🏠 Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "flex border-b-2 border-violet-600 transition-all" : "flex transition-alltransition-all border-b-2 border-transparent"} to={"/info"}>📎 About me</NavLink>
            <NavLink className={({isActive}) => isActive ? "flex border-b-2 border-violet-600 transition-all" : "flex transition-alltransition-all border-b-2 border-transparent"} to={"/skills"}>💡 Skills</NavLink>
            <NavLink className={({isActive}) => isActive ? "flex border-b-2 border-violet-600 transition-all" : "flex transition-alltransition-all border-b-2 border-transparent"} to={"/projects"}>⚡️ projects</NavLink>
            <NavLink className={({isActive}) => isActive ? "flex border-b-2 border-violet-600 transition-all" : "flex transition-alltransition-all border-b-2 border-transparent"} to={"/contacts"}>💬 contacts</NavLink>
        </div>
    </nav>
  )
}

export default Nav