import React from 'react'
import '../App.css'
function TagButton({content, children}) {
    console.log(children);
    return (
        
        <button className='btnTagButton'>
        {content}
        {children}
        </button>

    )
}

export default TagButton