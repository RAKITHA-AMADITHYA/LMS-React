import React from 'react';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../utils/consts/navigation';
import { Link } from 'react-router-dom';
import { linkClasses } from '@mui/material';
import AppLogo from '../assets/images/bestway-logo.png'

function Sidebar() {

    const linkClasses = 'flex items-center justify-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';
    return (
        <div className='flex flex-col w-64 bg-gray-200'>
            {/*Header Container  */}
            <div className="top-part h-28 bg-gray-300 text-white flex items-center disp p-4" >
                {/* <span className='text-red-500 text-xl'>E-Tutor</span> */}
                <img src={AppLogo} width={120} alt="" />

            </div>
            {/*content container  */}

            <div className="bottom-part flex-1  ">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <div key={item.key} className="column p-4  hover:bg-gray-300">
                        <SideBarLink item={item} />
                    </div>
                ))}
            </div>




            {/*footer container  */}
            <div className="top-part h-20 bg-gray-200 border-t border-neutral-300"   >

                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <div key={item.key} className="column p-4  hover:bg-gray-200 text-red-600">
                        <SideBarLink item={item} />
                    </div>
                ))}

            </div>

        </div>
    );
}


function SideBarLink({ item }) {


    return (
        <Link to={item.path} className={linkClasses}>
            <span className='text-xl p-2 '>{item.icon}</span>
            <span className='text-lg p-2 '>{item.lable}</span>
        </Link>
    );
}


export default Sidebar;
