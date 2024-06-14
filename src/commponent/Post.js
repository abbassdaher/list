import React from 'react'
import "../App.css"

function Post(props) {
    console.log(props);
    return (
        <div>
            <div className='borderStyle textCenter'>
                {props.children}
                <h2 className='title-post'>{props.title}</h2>
                <hr />
                <p className='post-body'>{props.paragraph}</p></div>
        </div>
    )
}

export default Post