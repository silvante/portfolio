import React from 'react'
import SkillCards from '../sections/SkillCards'

const Skills = () => {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <p className='lg:w-2/3'>In the cards below, my main skills that I mastered in my carrier of Software engineer. Many of them are fully functional programming languages, some of them are just libraries, and some of them are full-stack, front-end and back-end only frameworks.</p>
      <p>-- the cards</p>
      <SkillCards />
    </div>
  )
}

export default Skills