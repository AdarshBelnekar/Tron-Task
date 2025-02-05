import React from 'react'
import Header from '../Header/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div className='p-5  mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
            <div>
            <h3>
                Task Title 
            </h3>
            <input type='text ' placeholder='Make a Desgin ' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' />
            </div>
            
           
           
           
           <div>
           <h3>Date</h3>
           <input type='date' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
            
            </div> 
            <div>
              <h3>Assign to</h3>
              <input type='text ' placeholder='emlpoyee' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
            </div>
            <div>
            <h3 className=' mb-0.5'>Category</h3>
            <input type='text' placeholder='design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
            </div>

            </div>
            <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description </h3>
            <textarea name='' id='' cols='30 ' rows='10' className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea> 
            <button className=' py-3 bg-emerald-600 hover:bg-emerlad-200 px-5 text-sm mt-4 w-full font-semibold'>Create task</button>

            </div>
            
        </form>
      </div>

    </div>
  )
}

export default AdminDashboard
