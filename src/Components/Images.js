import React from 'react'
import Image from "./Image";

function Images(props) {
    const {photos} = props;
    // console.log("imgPhotos", photos);

    return (
        <div className="container mx-auto mt-10 mb-20 px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {photos?.map((data) => {
                return(
                    <Image key={data.id} data={data}/>
                ) 
            })}
            </div>
        </div>
    )
}

export default Images
