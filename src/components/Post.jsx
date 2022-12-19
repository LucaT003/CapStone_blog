import '../style/Post.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <div className='post'>
            <img 
            className='postImg'
            src="https://i.pinimg.com/474x/8f/86/4c/8f864c8783adf6cb76b6332c696bf791.jpg" 
            alt=""
             />
              <div className='postInfo'>
                  <div className='postCats'>
                      <span className='postCat'>Cibo</span>
                      <span className='postCat'>Style</span>
                  </div>
                  <Link className='linkPost' to='/singleP' ><span className='postTitle'>Lorem ipsum dolor, sit amet consectetur adipisicing
                  </span></Link>
                  <hr />
                  <span className='postDate'>1 ora fà</span>
              </div>
                <p className='postDesc'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis ex eaque cumque maiores ipsa sit doloremque
                 qui aliquam, dolores excepturi dolore at, aspernatur inventore doloribus. Odio ut perspiciatis maiores?Lorem ipsum
                 dolor sit amet consectetur adipisicing elit. Accusamus cupiditate maxime suscipit fuga laborum veritatis iste
                 neque nam, dolorum numquam quia nihil totam eius omnis ad esse, quaerat, dolorem vero.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis ex eaque cumque maiores ipsa sit doloremque
                 qui aliquam, dolores excepturi dolore at, aspernatur inventore doloribus. Odio ut perspiciatis maiores?Lorem ipsum
                 dolor sit amet consectetur adipisicing elit. Accusamus cupiditate maxime suscipit fuga laborum veritatis iste
                 neque nam, dolorum numquam quia nihil totam eius omnis ad esse, quaerat, dolorem vero.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis ex eaque cumque maiores ipsa sit doloremque
                 qui aliquam, dolores excepturi dolore at, aspernatur inventore doloribus. Odio ut perspiciatis maiores?Lorem ipsum
                 dolor sit amet consectetur adipisicing elit. Accusamus cupiditate maxime suscipit fuga laborum veritatis iste
                 neque nam, dolorum numquam quia nihil totam eius omnis ad esse, quaerat, dolorem vero.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis ex eaque cumque maiores ipsa sit doloremque
                 qui aliquam, dolores excepturi dolore at, aspernatur inventore doloribus. Odio ut perspiciatis maiores?Lorem ipsum
                 dolor sit amet consectetur adipisicing elit. Accusamus cupiditate maxime suscipit fuga laborum veritatis iste
                 neque nam, dolorum numquam quia nihil totam eius omnis ad esse, quaerat, dolorem vero.
                </p>
        </div>
    );
}