import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Image from "./Image";


function Search() {
    const ImagesData = 'https://api.unsplash.com/photos/?client_id=yMOEW96irltYOVkTWeZvtHM56ypGXuJc6D-h9zi8sG0&per_page=10';
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const display = () => {
        axios.get(ImagesData)
        .then(res => {
            console.log('The phots', res.data);
            setPhotos(res.data);
            // console.log(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setError(true)
            setLoading(false)
        })
    }
    useEffect(() => {
        display()
    }, [])
    if(loading) {
        return <h2>Loading...</h2>
    }
    if(error) {
        return <h2>Ooops!!! Something went wrong</h2>
    }
    return (
        <div className="container bg-red-500 mx-auto mt-10 mb-20 px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {photos?.map((data) => {
                // console.log(data);
                return(
                    <Image key={data.id} data={data}/>
                ) 
            })}
            </div>
        </div>
    )
}



export default Search
