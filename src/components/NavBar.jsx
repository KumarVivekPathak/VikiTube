import React from 'react'
import menuIcon from "../assets/menu.png";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import uploadIcon from "../assets/upload.png";
import moreIcon from "../assets/more.png";
import notificationIcon from "../assets/notification.png";
import profileIcon from "../assets/user_profile.jpg";

const NavBar = () => {
    return (
        <nav className=' text-gray-500'>
            <div>
                <img src={menuIcon} alt='' />
                <img src={logo} alt='' />

            </div>

            <div>
                <input type='text' placeholder='Search' />
                <img src={searchIcon} alt='' />
            </div>

            <div>
                <img src={uploadIcon} alt="" className="" />
                <img src={moreIcon} alt="" className="" />
                <img src={notificationIcon} alt="" className="" />
                <img src={profileIcon} alt="" className="" />


            </div>
        </nav>
    )
}

export default NavBar
