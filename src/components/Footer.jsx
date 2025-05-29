import React from 'react'

const Footer = () => {
  return (
    <footer className='p-5'>
        <div className='w-full md:flex justify-between items-center'>
            <p className='text-white/70'>original portfolio <span className='text-white'>@mkf</span></p>
            <p className='text-white/70'>email: <a href="mailto:khamidov.ko@gmail.com" target='_blanck' className='text-white'>khamidov.ko@gmail.com</a></p>
        </div>
    </footer>
  )
}

export default Footer