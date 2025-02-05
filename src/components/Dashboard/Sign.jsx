import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const navigate = useNavigate();
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
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
        
        {/* Logo */}
        <img src="./logo.jpg" className="h-16 w-16 mb-6" alt="Logo" />
        
        <h2 className="text-center text-2xl font-bold mb-4">Sign in</h2>
        
        <label>Your Email</label>
        <input 
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email@example.com"
          className="border p-2 w-full rounded mb-2"
        />
        
        <label>Password</label>
        <input 
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded mb-4"
        />
        
        <button
          onClick={handleLogin}
          className="bg-green-500 w-full text-white p-2 rounded"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Sign;
