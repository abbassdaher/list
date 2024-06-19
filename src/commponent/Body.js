import React from 'react'
import Post from './Post'

function Body() {
    const content = [
        { title: "lebanon", paragraph: "lebanon nebanon lebaon" },
        { title: "بحار الأنوار - العلامة المجلسي الصفحة ١٧٠", paragraph: "كتاب دلائل الإمامة للطبري'", child: <h2>ج ٤٣ </h2> },
        { title: "blossom", paragraph: "is the reproductive structure found in flowering plants" }
    ]
    return (
        <div >
            <div className='postStyle'>
                {content.map((item, index) => {
                    return <Post key={index} title={item.title} paragraph={item.paragraph} >{item.child}</Post>
                })}
                {/*comment*/}
                {/*<Post title="lebanon" paragraph="lebanon nebanon lebaon" />*/}
                {/*<Post title='بحار الأنوار - العلامة المجلسي الصفحة ١٧٠' paragraph=' كتاب دلائل الإمامة للطبري'>*/}
                {/*<h2>ج ٤٣ </h2>*/}
                {/*</Post>*/}
            </div>
        </div>
    )
}

export default Body
