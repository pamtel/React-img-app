import React from 'react'
import { useState } from "react";


function Search(props) {
    const {value} = props;
    return (
        <div>
            <p className="pl-10 md:pl-16 pt-5 text-xl font-bold"> Search Results for <span className="text-gray-600">"{value}"</span></p>
        </div>
    )
}



export default Search
