import React from 'react'

interface HabitsProps {
  completed: number;
}

function Habits({completed}: HabitsProps) {
  return (
    <div className='bg-zinc-900 text-cyan-500 rounded m-2 w-10 h-10 text-center' >{completed}</div>
  )
}

export default Habits