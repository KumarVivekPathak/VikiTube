import React, { Fragment } from 'react'
import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';

const HomePage = ({ sideBar }) => {
    return (
        <Fragment>


            <SideBar sideBar={sideBar} />
            <div className={` bg-[#f9f9f9] pl-10 pr-2 py-0 z-10 ${sideBar ? "ml-48" : ""}  `}>
                <Feed />
            </div>

        </Fragment>
    )
}

export default HomePage;
