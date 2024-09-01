import React from 'react'
import menuIcon from "../assets/menu.png";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import uploadIcon from "../assets/upload.png";
import moreIcon from "../assets/more.png";
import notificationIcon from "../assets/notification.png";
import profileIcon from "../assets/user_profile.jpg";
import { Link } from 'react-router-dom';

const NavBar = ({ setSideBar }) => {
    return (
        <nav className=' flex items-center p-2 mb-2 justify-between shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-white sticky top-0 z-10'>
            <div className=' flex items-center mr-10'>
                <img src={menuIcon} alt='' className=' w-[22px] mr-2' onClick={() => setSideBar(prev => !prev)} />
                <Link to={"/"}> <img src={logo} alt='' className=' w-[130px] ' /></Link>

            </div>

            <div className=' flex items-center w-2/5 border-none outline-0 bg-transparent mx-10'>
                <div className=' flex border border-solid border-[#ccc] mr-4 px-2 py-3 rounded-full w-full '>
                    <input type='text' placeholder='Search' className=' w-full border-none px-4 focus:outline-none focus:border-transparent' />
                    <img src={searchIcon} alt='' className=' w-6 mr-1' />
                </div>
            </div>

            <div className=' flex items-center mr-11 justify-between  w-44'>
                <img src={uploadIcon} alt="" className=" w-8 " />
                <img src={moreIcon} alt="" className=" w-8 " />
                <img src={notificationIcon} alt="" className=" w-8 " />
                <img src={profileIcon} alt="" className=" w-8 rounded-full" />


            </div>
        </nav>
    )
}

export default NavBar
