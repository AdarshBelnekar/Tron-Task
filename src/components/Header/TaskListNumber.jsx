import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 screen justify-between gap-5 '>
        <div className=' w-[45%] p-10 bg-red-400 rounded-lg'>
            <h1 className='text-3xl font-semibold'>O</h1>
            <h2 className='text-xl font-medium'>New task </h2>
        </div>
        <div className=' w-[45%] p-10 bg-blue-400 rounded-lg'>
            <h1 className='text-3xl font-semibold'>O</h1>
            <h2 className='text-xl font-medium'>New task </h2>
        </div>
        <div className=' w-[45%] p-10 bg-yellow-400 rounded-lg'>
            <h1 className='text-3xl font-semibold'>O</h1>
            <h2 className='text-xl font-medium'>New task </h2>
        </div>
        <div className=' w-[45%] p-10 bg-green-400 rounded-lg'>
            <h1 className='text-3xl font-semibold'>O</h1>
            <h2 className='text-xl font-medium'>New task </h2>
        </div>
      
    </div>
  )
}

export default TaskListNumber
