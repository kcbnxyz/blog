import React from 'react'
import { ACTIONS } from './App'
import { useState } from 'react'
import './styles.css'


export default function NewStory({ dispatch }) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    
    function handlePost(e) {
        e.preventDefault();
        dispatch({type: ACTIONS.NEW_STORY, payload: {title: title, text: text}})
        setTitle('')
        setText('')
    }
    
    function discardPost(e) {
        e.preventDefault();
        setTitle('')
        setText('')   
    }

    return (
        
        <form>
            <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
            <textarea type="text" value={text} placeholder='Story...' onChange={(e) => setText(e.target.value)}/>
            <div className='btn-form'>
                <button onClick={handlePost}>Post</button>
                <button onClick={discardPost}>Discard</button>
            </div>
        </form>
        
    )
        
        
}
