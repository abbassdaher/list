import React from 'react'
import TagButton from './TagButton'

function Aside() {
    return (
        <>
            <div className='borderStyle asideStyle'>
                <TagButton content="جديدة">🍌🍌🍌</TagButton>
                <TagButton content="الأكثر قراءة"> <div><img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flowers" style={{ width: '100x', height: '50px' }} /></div></TagButton>
                <TagButton content="مقالات الأسبوع"><div><img src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="yellow" style={{ width: '100x', height: '50px' }}/></div></TagButton>

            </div>
        </>
    )

}

export default Aside
