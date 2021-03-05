import React from 'react'

function Image(props) {
    const {data} = props;
    return (
        <div className="relative">
            <img src={data?.urls?.small} className="rounded-lg bg-opacity-80"/>
            <div className="customOverlay">
                
            </div>
        </div>
    )
}

export default Image
