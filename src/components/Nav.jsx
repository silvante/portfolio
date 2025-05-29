import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center items-center p-5'>
        <div className='space-x-5 flex flex-wrap justify-center items-center'>
            <Link className='flex' to={""}>🏠 Home</Link>
            <Link className='flex' to={"/info"}>📎 About me</Link>
            <Link className='flex' to={"/skills"}>💡 Skills</Link>
            <Link className='flex' to={"/projects"}>⚡️ projects</Link>
            <Link className='flex' to={"/contacts"}>💬 contacts</Link>
        </div>
    </nav>
  )
}

export default Nav