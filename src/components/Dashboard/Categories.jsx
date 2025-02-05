import React, { useState } from 'react';
import CategoryList from './CategoryList';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
 const navigate=useNavigate();

  const [status, setStatus] = useState('active');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  
  const handleSave = () => {
    // Ensure category name is not empty
    if (categoryName.trim() !== '') {
      const newCategory = {
        id: categories.length + 1, // Incremental ID based on the length
        name: categoryName,
        status,
      };
      setCategories([...categories, newCategory]);
      setCategoryName(''); // Clear input after adding
      setStatus('active'); // Reset to default status
    } else {
      alert('Please enter a category name');
    }
  };

  const handleDelete = (id) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      <input
        type="text"
        placeholder="Category Name"
        className="border p-2 w-full rounded mb-2"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <div className="flex gap-4 mb-4">
        <label>
          <input
            type="radio"
            name="status"
            value="active"
            checked={status === "active"}
            onChange={() => setStatus("active")}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="inactive"
            checked={status === "inactive"}
            onChange={() => setStatus("inactive")}
          />
          Inactive
        </label>
      </div>
      <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded">Save</button>

      <h3 className="text-2xl font-bold mt-8">Category List</h3>
      <CategoryList categories={categories} onDelete={handleDelete} />

      <div className='mt-4 space-x-3'>
      <button className='bg-green-400 w-auto p-2  rounded' >Previous</button>
        <button className='bg-green-400 w-auto p-2  rounded'   onClick={()=>{navigate('/dashboard')}}>Next</button>
      </div>
    </div>
  );
};

export default Categories;
