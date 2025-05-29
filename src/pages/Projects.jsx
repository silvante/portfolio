import React from 'react'
import Portfolio from '../sections/Portfolio'

const Projects = () => {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className='lg:w-2/3'>Those projects are all created by myself and with minimal help of AI. Some of those are only backend parts and some are frontend. Also I have Full-stack projects which had built with rails. Finally some projects are Figma designs.</p>
      <p>-- all projects</p>
      <Portfolio />
    </div>
  )
}

export default Projects