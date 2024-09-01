import React from 'react'

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">

            <svg
                className="w-12 h-12 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="12" fill="#FF0000" />
                <polygon points="9,8 15,12 9,16" fill="white" />
            </svg>

            {/* Text for VikiTube */}
            <h1 className="text-3xl font-bold text-gray-900">
                <span className="text-red-600">Viki</span>Tube
            </h1>
        </div>
    )
}

export default Logo;
