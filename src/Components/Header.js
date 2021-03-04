import React from 'react'
// import Search from "./Search";

function Header() {
    return (
        <div className="bg-gray-600 h-20 flex justify-center items-center">
        <input placeholder="Search for photo" className="w-96 h-10 rounded-lg pl-2 outline-none"/>
        </div>
    )
}

export default Header