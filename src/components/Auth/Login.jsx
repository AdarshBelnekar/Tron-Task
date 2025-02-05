import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
    const [email,setLogin] = useState("")
    const [password,setPassword] = useState("")
  const submitHandle =(e)=>{
           e.preventDefault();
           handleLogin(email,password)
           setLogin("");
           setPassword("");

  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2  rounded-xl  border-emerald-900 p-20 '>
            <form  onSubmit={(e)=>{
                submitHandle(e);
            }}className='flex flex-col gap-2 items-center'>
             
                <input 
                value={email}
                onChange={(e)=>{
                    setLogin(e.target.value)
                }}
                required className='text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-xl py-3 px-5 rounded-full placeholder:text-gray-500' type="email" placeholder='Enter Your Email'/>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                required  className ="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-5 rounded-full placeholder:text-gray-500" type="password" placeholder='Enter Your Password'/>
                <button className='outline-none  border-2 border-emerald-600 font-medium text-lg py-2 px-2 rounded-full bg-emerald-600 text-white'>Login</button>
           
                
            </form>
             </div>
      
    </div>
  )
}

export default Login
