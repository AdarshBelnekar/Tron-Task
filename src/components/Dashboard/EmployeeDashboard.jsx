import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../Header/TaskListNumber'
import TaskList from '../Header/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
