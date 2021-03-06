import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Header(props) {
    const [input, setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value);
        props.search(e.target.value);
    }

    return (
        <div className="bg-green-800 h-20 flex justify-center items-center">
        <input placeholder="Search for photo"  
        value={input}
        onChange={handleInput} 
        className="w-96 h-10 rounded-lg pl-2 outline-none"/>
        </div>
    )
}
export default Header