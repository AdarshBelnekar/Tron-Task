import React from 'react';

const CategoryList = ({ categories, onDelete }) => {
  return (
    <div className="mt-4">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">SL</th>
            <th className="border border-gray-300 p-2">Category Name</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-2">No categories added yet.</td>
            </tr>
          ) : (
            categories.map((category) => (
              <tr key={category.id}>
                <td className="border border-gray-300 p-2">{category.id}</td>
                <td className="border border-gray-300 p-2">{category.name}</td>
                <td className="border border-gray-300 p-2">{category.status}</td>
                <td className="border border-gray-300 p-2">
                  
                 <div className='flex gap-2'>
                 <button
                    onClick={() => onChange(category.id)}
                    className="bg-green-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(category.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                 </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
