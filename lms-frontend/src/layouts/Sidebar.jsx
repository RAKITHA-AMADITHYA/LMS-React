import React from 'react';

function Sidebar() {
  return (
    <div className='flex flex-col w-64 bg-gray-800'>
      <div className="top-part h-16 bg-gray-900 text-white flex items-center ">
        <span className='text-red-500 text-xl'>E-Tutor</span>
        
        </div>
      <div className="bottom-part flex-grow bg-gray-700  text-white" >Content</div>
      <div className="top-part h-16 bg-gray-900 text-white" >footer</div>

    </div>
  );
}

export default Sidebar;
