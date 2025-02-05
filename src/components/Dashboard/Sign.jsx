import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the credentials are correct
    if (email === 'admin@gmail.com' && password === 'Adarsh') {
      // Navigate to the /categories page if credentials are valid
      navigate('/categories');
    } else {
      // Show alert if credentials are invalid
      alert('Invalid email or password');
    }
}


  return (
    <div>
         <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-center text-2xl font-bold mb-4">Sign in</h2>
        <label>Your Email</label>
        <input 
        value={email}
        name='email'
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        type="email" placeholder="Email@example.com" className="border p-2 w-full rounded mb-2" />
        
        <label>Password</label>
       
        <input 
        value={password}
        name='password'
        onChange={(e) => setPassword(e.target.value)}
        
        type="password" placeholder="Password" className="border p-2 w-full rounded mb-4" />
        
        <button onClick={handleLogin}className="bg-green-500 w-full text-white p-2 rounded">Sign in</button>
      </div>
    </div>
    </div>
  )
}

export default Sign
