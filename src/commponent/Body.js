import React from 'react'
import Post from './Post'

function Body() {
    const content = { title: "lebanon", paragraph: "lebanon nebanon lebaon" }
    return (
        <div >
            <div className='postStyle'>
                <Post title="lebanon" paragraph="lebanon nebanon lebaon" />
                <Post title='بحار الأنوار - العلامة المجلسي الصفحة ١٧٠' paragraph=' كتاب دلائل الإمامة للطبري'>
                    <h2>ج ٤٣ </h2>
                </Post>

            </div>
        </div>
    )
}

export default Body
