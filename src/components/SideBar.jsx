import React from 'react'
import home from "../assets/home.png";
import gameIcon from "../assets/game_icon.png";
import sports from '../assets/sports.png';
import entertainment from "../assets/entertainment.png";
import music from "../assets/music.png";
import news from "../assets/news.png";

const sideBarData = [
    {
        id: 1,
        name: "Home",
        image: home,
        category: 0
    },
    {
        id: 2,
        name: "Game",
        image: gameIcon,
        category: 20
    },
    {
        id: 3,
        name: "Sports",
        image: sports,
        category: 17
    },
    {
        id: 4,
        name: "Entertainment",
        image: entertainment,
        category: 24
    },
    {
        id: 5,
        name: "Music",
        image: music,
        category: 10
    },
    {
        id: 6,
        name: "News",
        image: news,
        category: 25
    },
]

const SideBar = ({ sideBar, category, setCategory }) => {
    return (
        <section className={`bg-white h-screen fixed top-0 ${sideBar ? "w-56" : "w-16"} pl-2 pt-20 md:hidden `}>

            {sideBarData.map((item) => {
                return (
                    <div key={item.id} className='flex items-center mb-5 w-fit cursor-pointer flex-row' onClick={() => setCategory(item.category)}>
                        <img src={item.image} alt='' className={`w-7 mr-3 ${category === item.category ? " pb-1 border-b-4 border-b-red-700" : ""}`} />
                        <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>{item.name}</p>
                    </div>
                )
            })}
            <hr className={`border-none h-1 bg-[#ccc] ${sideBar ? " mr-1" : "ml-0 pl-0 justify-start w-12"}`} />

            {/* <div className=' w-fit'>
                <h3 className={`text-2xl font-semibold my-5 text-[#5a5a5a] ${sideBar ? '' : 'hidden'}`}>Subscribed</h3>
                <div className='flex flex-row justify-start items-center my-4'>
                    <img src={jack} className=' w-10 mr-4 rounded-full ' />
                    <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Carryminati</p>
                </div>

                <div className='flex flex-row justify-start items-center my-4'>
                    <img src={simon} className=' w-10 mr-4 rounded-full ' />
                    <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Mr Beast</p>
                </div>
                <div className='flex flex-row justify-start items-center my-4'>
                    <img src={tom} className=' w-10 mr-4 rounded-full ' />
                    <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>BB ki vines</p>
                </div>

                <div className='flex flex-row justify-start items-center my-4'>
                    <img src={megan} className=' w-10 mr-4 rounded-full ' />
                    <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Primegion</p>
                </div>
                <div className='flex flex-row justify-start items-center my-4'>
                    <img src={cameron} className=' w-10 mr-4 rounded-full ' />
                    <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Harry Potter</p>
                </div>
            </div> */}

        </section>
    )
}

export default SideBar;
