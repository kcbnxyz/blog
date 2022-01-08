import React from 'react'
import { ACTIONS } from './App'
import { useState } from 'react'


export default function Story({ id, title, text, dispatch}) {
    const [edit, setEdit] = useState(false)
    const [modtitle, setModTitle] = useState(title)
    const [modtext, setModText] = useState(text)
    const [isReadMore, setIsReadMore] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    
    function handleEdit(e) {
        e.preventDefault()
        dispatch({type:ACTIONS.EDIT, payload: {id: id, title: modtitle, text: modtext}})
        setEdit(false)
        setIsEdit(!isEdit)
    }
    
    function discardEdit() {
       
        setEdit(false)
        setIsEdit(!isEdit)
    }

    function handleDelete() {
        dispatch({type: ACTIONS.DELETE, payload: {id: id}})
        setIsEdit(!isEdit)
    }

    return (
        <>
            {edit ? 
            <form>
                <input type="text" value={modtitle} onChange={e => setModTitle(e.target.value)} />
                <textarea type="text" value={modtext} onChange={e => setModText(e.target.value)}/>
                <div className='btn-form'> 
                    <button onClick={handleEdit} >Save</button>
                    <button onClick={discardEdit} >Discard</button>
                </div>
            </form> :
            <div onDoubleClick={() => setIsEdit(!isEdit)} className='story'>
                <h2>{title}</h2>
                
                <p>
                    {isReadMore ? text.slice(0,30) : text}
                    <span onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? '...read more' : ' show less'}</span>
                
                </p>

                {isEdit && <div className='btn-story' >
                    <button onClick={() => setEdit(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>}
                
                
            </div>}
            
        
        </>
    )
}
