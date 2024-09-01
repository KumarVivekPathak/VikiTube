import React, { Fragment, useState } from 'react'
import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';

const HomePage = ({ sideBar }) => {
    const [category, setCategory] = useState(0);
    return (
        <Fragment>
            <SideBar sideBar={sideBar} category={category} setCategory={setCategory} />
            <div className={` bg-[#f9f9f9] pl-10 pr-2 py-0 z-10 ${sideBar ? "ml-48" : ""}  md: p-5`}>
                <Feed category={category} />
            </div>

        </Fragment>
    )
}

export default HomePage;
