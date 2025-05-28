import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center items-center py-5'>
        <div className='space-x-5'>
            <Link to={""}>🏠 Home</Link>
            <Link to={"/info"}>📎 About me</Link>
            <Link to={"/skills"}>💡 Skills</Link>
            <Link to={"/projects"}>⚡️ projects</Link>
            <Link to={"/contacts"}>💬 contacts</Link>
        </div>
    </nav>
  )
}

export default Nav