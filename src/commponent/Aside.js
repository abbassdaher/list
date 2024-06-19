import React from 'react'
import TagButton from './TagButton'

function Aside() {
    let content = [
        { title: "جديدة", child: "🍌🍌🍌" },
        { title: "الأكثر قراءة", child: <div><img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flowers" style={{ width: '100x', height: '50px' }} /></div> },
        { title: "جديدة", child: <div><img src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="yellow" style={{ width: '100x', height: '50px' }} /></div> },
    ]
    return (
        <>
            <div className='borderStyle asideStyle'>
                {content.map((el, i) => <TagButton key={i} content={el.title}>{el.child}</TagButton>)}

            </div>
        </>
    )

}

export default Aside
