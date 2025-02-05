import React, { useState } from "react";
import { Link } from "react-router-dom";




// Sidebar Component
const Sidebar = ({ isSidebarOpen, setActiveIcon, activeIcon }) => (
  <div
    className={`w-40 bg-gray-900 h-screen flex flex-col p-4 text-white fixed transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
  >
    <div className="flex flex-col space-y-4 items-center mt-20">
      <Link
        to="/categories"
        className={`p-3 rounded ${activeIcon === "home" ? "bg-green-500" : "bg-black"}`}
        onClick={() => setActiveIcon("home")}
      >
        <i className="fa fa-home" ></i>
      </Link>
      <p
        className={`text-2xl p-4 rounded ${activeIcon === "cart" ? "bg-green-500" : "bg-black"}`}
        onClick={() => setActiveIcon("cart")}
      >
        <i className="fa fa-cart-plus"></i>
      </p>
      <p
        className={`text-2xl p-4 rounded ${activeIcon === "bank" ? "bg-green-500" : "bg-black"}`}
        onClick={() => setActiveIcon("bank")}
      >
        <i className="fa fa-university" aria-hidden="true"></i>
      </p>
      <p
        className={`text-2xl p-4 rounded ${activeIcon === "repeat" ? "bg-green-500" : "bg-black"}`}
        onClick={() => setActiveIcon("repeat")}
      >
        <i className="fa fa-retweet"></i>
      </p>
      <p
        className={`text-2xl p-4 rounded ${activeIcon === "address" ? "bg-green-500" : "bg-black"}`}
        onClick={() => setActiveIcon("address")}
      >
        <i className="fa fa-address-card"></i>
      </p>
    </div>
  </div>
);

// Navbar Component (Above Sidebar)
const Navbar = ({ toggleSidebar }) => (
  <div className="flex  justify-between items-center bg-white shadow-md p-4 fixed w-full z-10">
    <div className="flex">
    <button onClick={toggleSidebar} className="justify-start p-2 rounded-md hover:bg-gray-100">
      <i className="fa fa-bars"></i>
    </button>
    <button className="bg-green-500  p-2 rounded  items-center ">New Sales</button>
    <button className="shadow-sm  p-2 rounded  items-center ">Today Sales</button>
    </div>
    
   <div className="flex gap-2 items-center ">
   <p className="w-8 rounded h-10 bg-blue-400 "><i class="p-2 fa fa-calculator"></i></p>
   
   <p className="w-8 rounded h-10 shadow-sm"><i class=" p-2 fa fa-user-plus"></i></p>
   </div>
  </div>
);

const SalesDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeIcon, setActiveIcon] = useState("home");
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [selectedMed, setSelectedFee] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFeeChange = (e) => {
    setSelectedFee(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar on top */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setActiveIcon={setActiveIcon} activeIcon={activeIcon} />

      {/* Main Content */}
      <div className={`flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"} mt-16 p-4 flex-grow`}>
        {/* Search Bar */}
        <div className="mb-4 flex justify-center gap-2">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-lg p-2 border rounded-lg shadow-md "
          />

          <select
            id="fees"
            value={selectedMed}
            onChange={handleFeeChange}
            className="bg-gray-100 w-[700px] p-2 border border-gray-200 rounded-md"
          >
            <option value="">Select</option>
            <option value="tab">Tablet</option>
            <option value="cap">Capsules</option>
            <option value="sypruys">Syrups</option>
          </select>

          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-lg p-2 border border-gray-200 rounded-lg shadow-md "
          />
          <p className="justify-center font-bold">OR</p>
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-lg p-2 border border-gray-200 rounded-lg shadow-md "
          />
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-lg p-2 border border-gray-200 rounded-lg shadow-md "
          />
          <button className="bg-green-500 px-10 rounded"><i className="fa fa-plus"></i></button>
        </div>

        {/* Flex container for the 3 sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mb-4">
          
<div className="flex flex-col space-y-2 bg-white rounded-lg p-2">
  
  <div className="flex flex-col space-y-2 h-10">
    {["All", "Tablet", "Capsule", "Syrup", "Test", "Toys"].map((category) => (
      <button
        key={category}
        className="bg-green-500 text-white p-1 text-xs rounded-md w-1/2 mx-auto"
      >
        {category}
      </button>
    ))}
  </div>
</div>


          {/* Available Items Section */}
          <div className="flex  space-y-4  bg-white rounded-lg">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {["Mesacold", "Glycomet (500mg)", "Nizer"].map((item) => (
                <div key={item} className="h-30 w-full rounded-lg text-center bg-white shadow-lg">
                  <img src="/capsules.jpg" alt={item} className="w-1/2 mx-auto mb-2" />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Invoice Summary Section */}
          <div className="  space-y-1 p-4 bg-white rounded-lg w-full">
            <div className="flex gap-2">
              <p className="border border-gray-200 p-1 bg-gray-100">Medicine Information</p>
              <p className="border border-gray-200 p-1 bg-gray-100">Batch</p>
              <p className="border border-gray-200 p-1 bg-gray-100">Expiry date</p>
              <p className="border border-gray-200 p-1 bg-gray-100">Quantity</p>
              <p className="border border-gray-200 p-1 bg-gray-100">Total</p>
            </div>
           
            <div className="space-y-4">
              {["Invoice Discount", "Total Discount", "Total VAT", "Grand Total", "Previous", "Change"].map((label, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{label}:</span>
                  <input type="text" className="border rounded w-24 text-right bg-gray-100" defaultValue="0.00" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer inside main content */}
        <footer className="w-full bg-white  p-2 flex flex-col sm:flex-row justify-between items-center mt-10">
          <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
            <p>Net Total: <input type='text' className="border border-gray-300 p-1 w-24" /></p>
            <p>Paid Amount: <input type='text' className="border border-gray-300 p-1 w-24" /></p>
            <p>Due Amount: <input type='text' className="border border-gray-300 p-1 w-24" /></p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-yellow-500 text-white p-2 rounded-lg">Full Paid</button>
            <button className="bg-green-500 text-white p-2 rounded-lg">Cash Payment</button>
            <button className="bg-blue-500 text-white p-2 rounded-lg">Bank Payment</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SalesDashboard;
