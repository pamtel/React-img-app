import React, {useRef, useEffect, useState} from 'react'

function Image(props) {
    const {data} = props;

    const variable = useRef()
    console.log(variable);
    const [imgState, setImgState] = useState(0)
    
    useEffect(() => {
      variable.current.addEventListener("load", align);
    }, []);

    const align = () => {
        const height = variable.current.clientHeight;
        const span = Math.ceil(height / 10)
        setImgState(span)
        
    }
    console.log(imgState);
    return (
        <div className="relative" style={{gridRowEnd: `span ${imgState}`}}>
            <img ref={variable} src={data?.urls?.small} className="rounded-lg bg-opacity-80"/>
            <div className="bg-black bg-opacity-50 text-white px-3 py-2 absolute -bottom-0 w-full rounded-b-lg">
                <h4>{data.user.first_name} <span>{data.user.last_name}</span></h4>
                <p className="text-sm capitalize">{data.alt_description}</p>
            </div>
        </div>
    )
}

export default Image
