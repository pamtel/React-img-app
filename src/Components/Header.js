import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Header(props) {
    const {getData} = props;
   
    const [searchPhotos, setSearchPhotos] = useState([])
    const [error, setError] = useState(false)
    const [input, setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value);
        const SearchImages = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${e.target.value}&client_id=yMOEW96irltYOVkTWeZvtHM56ypGXuJc6D-h9zi8sG0`
        axios.get(SearchImages)
        .then(res => {
            getData(res.data.results);
            setSearchPhotos(res.data.results)
        })
        .catch(err => {
            setError(true)
        })
    }

    const display = () => {
       
    }
    useEffect(() => {
        display()
    }, []) 

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