import '../style/Write.css'
import React from 'react';

export default function Write() {
    return (
        <div className='write'>
            <img 
            className='writeImg'
            src="https://images.unsplash.com/photo-1627217013782-3ea8951a2c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdW50cnl8ZW58MHx8MHx8&w=1000&q=80" 
            alt="" />
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                    <input type="text" placeholder='Titolo' className='writeInput' autoFocus={true}/>
                </div>
                <div className='writeFormGroup'>
                    <textarea  placeholder='Scrivi la tua storia...' 
                    type="text" 
                    className='writeInput writeText' ></textarea>
                </div>
                <button className='writeSubmit'>Pubblica</button>
            </form>
        </div>
    )
}
