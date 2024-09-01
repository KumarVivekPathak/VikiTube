import React from 'react'
import home from "../assets/home.png";
import gameIcon from "../assets/game_icon.png";
import sports from '../assets/sports.png';
import entertainment from "../assets/entertainment.png";
import music from "../assets/music.png";
import news from "../assets/news.png";
import jack from '../assets/jack.png';
import simon from '../assets/simon.png';
import tom from '../assets/tom.png';
import megan from '../assets/megan.png';
import cameron from '../assets/cameron.png';


const SideBar = ({ sideBar, category, setCategory }) => {
    return (
        <section className={`bg-white h-screen fixed top-0 ${sideBar ? "w-56" : "w-16"} pl-2 pt-20 `}>

            <div className='flex items-center mb-5 w-fit cursor-pointer flex-row' onClick={() => setCategory(0)}>
                <img src={home} alt='' className={`w-7 mr-3 ${category === 0 ? " pb-1 border-b-4 border-b-red-700" : ""}`} />
                <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Home</p>
            </div>

            <div className='flex flex-row items-center mb-5 w-fit cursor-pointer ' onClick={() => setCategory(20)}>
                <img src={gameIcon} alt='' className={`w-7 mr-3 ${category === 20 ? " pb-1 border-b-4 border-b-red-700" : ""}`} />
                <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Game</p>
            </div>

            <div className='flex flex-row items-center mb-5 w-fit cursor-pointer ' onClick={() => setCategory(17)}>
                <img src={sports} alt='' className={`w-7 mr-3 ${category === 17 ? " pb-1 border-b-4 border-b-red-700" : ""}`} />
                <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Sports</p>
            </div>

            <div className='flex flex-row items-center mb-5 w-fit cursor-pointer ' onClick={() => setCategory(24)}>
                <img src={entertainment} alt='' className={`w-7 mr-3 ${category === 24 ? " pb-1 border-b-4 border-b-red-700" : ""}`} />
                <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Entertainment</p>
            </div>
            <div className='flex flex-row items-center mb-5 w-fit cursor-pointer ' onClick={() => setCategory(10)}>
                <img src={music} alt='' className={`w-7 mr-3 ${category === 10 ? " pb-1 border-b-4 border-b-red-700" : ""}`} />
                <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>Music</p>
            </div>
            <div className='flex flex-row items-center mb-5 w-fit cursor-pointer ' onClick={() => setCategory(25)}>
                <img src={news} alt='' className={`w-7 mr-3 ${category === 25 ? " pb-1 border-b-4 border-b-red-700" : ""}`} />
                <p className={`text-gray-800 font-medium  ${sideBar ? " " : " hidden "} `}>News</p>
            </div>
            <hr className={`border-none h-1 bg-[#ccc] ${sideBar ? " mr-1" : "ml-0 pl-0 justify-start w-12"}`} />

            <div className=' w-fit'>
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
            </div>

        </section>
    )
}

export default SideBar;
