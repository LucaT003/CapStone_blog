import '../style/SinglePost.css'
import React from 'react';

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img 
                className='singlePostImg'
                src="https://i.pinimg.com/736x/c6/2b/3a/c62b3a89bf94139135f9095b27a695f8.jpg" 
                alt=""
                />
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet.
                    <div  className='singlePostEdit'>
                        <i className="singlePostIcon fa-solid fa-wand-magic-sparkles"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span SinglePostAuthor>Autore: <b>Luca</b></span>
                    <span SinglePostDate>1 ora fà</span>
                </div>
                    <p className='singlePostDesc'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellat suscipit repellendus,
                     soluta nesciunt sit similique laborum voluptates cupiditate nostrum exercitationem 
                     obcaecati. Laudantium totam nostrum ad et consectetur cumque aperiam.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellat suscipit repellendus,
                     soluta nesciunt sit similique laborum voluptates cupiditate nostrum exercitationem 
                     obcaecati. Laudantium totam nostrum ad et consectetur cumque aperiam.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellat suscipit repellendus,
                     soluta nesciunt sit similique laborum voluptates cupiditate nostrum exercitationem 
                     obcaecati. Laudantium totam nostrum ad et consectetur cumque aperiam.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellat suscipit repellendus,
                     soluta nesciunt sit similique laborum voluptates cupiditate nostrum exercitationem 
                     obcaecati. Laudantium totam nostrum ad et consectetur cumque aperiam.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellat suscipit repellendus,
                     soluta nesciunt sit similique laborum voluptates cupiditate nostrum exercitationem 
                     obcaecati. Laudantium totam nostrum ad et consectetur cumque aperiam.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellat suscipit repellendus,
                     soluta nesciunt sit similique laborum voluptates cupiditate nostrum exercitationem 
                     obcaecati. Laudantium totam nostrum ad et consectetur cumque aperiam.
                    </p>
            </div>
        </div>
    )
}