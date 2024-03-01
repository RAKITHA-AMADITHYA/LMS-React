import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
    <Sidebar/>
      <div className='p-4'>

      <div style={{ backgroundColor: 'lightgreen' }}>Header</div>
      <div><Outlet /></div>
      </div>
    </div>
  );
}

export default Layout;

