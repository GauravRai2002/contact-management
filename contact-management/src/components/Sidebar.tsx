import React from 'react'
import { Link } from 'react-router-dom'
import MainComponent from './MainComponent'

const Sidebar: React.FC = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden self-start z-10">
                    <div className="p-4 space-y-2 bg-gray-600 rounded shadow">
                        <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                    </div>
                </label>

                <MainComponent />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content py-16">
                    {/* Sidebar content here */}
                    <li><Link to={'/'}>Contact</Link></li>
                    <li><Link to={'/maps'}>Charts and Maps</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar