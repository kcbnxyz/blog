import './styles.css'
import { useReducer, useState } from 'react';
import NewStory from './NewStory';
import Story from './Story';

export const ACTIONS = {
  NEW_STORY: 'new_story',
  DELETE: 'delete',
  EDIT: 'edit',
}


function newStory(story) {
  return {id: Date.now(), title: story.title, text: story.text}
}
function App() {
  const [stories, dispatch] = useReducer(reducer, [])
  const [togglenewstory, setToggleNewStory] = useState(false)

  function reducer(stories, {type, payload} ) {
    switch (type) {
      case ACTIONS.NEW_STORY:
        return [...stories, newStory(payload)]
      case ACTIONS.DELETE:
        return stories.filter(story => story.id !== payload.id)
      case ACTIONS.EDIT:
        return stories.map(story => story.id === payload.id ? {...story, title: payload.title, text: payload.text} : story)
      default:
        return stories
    }
  }
  
  return (
    <div className='blog'>
      <div className='new-story'>
        <button className='btn' onClick={() => setToggleNewStory(!togglenewstory) }>New Story</button>
        {togglenewstory && <NewStory dispatch={dispatch}/>}
      </div>
      
      <h1>Stories</h1>
      {stories.map((story, idx) => <Story key={idx} title={story.title} text={story.text} dispatch={dispatch} id={story.id} />)}
    </div>
  );
}

export default App;
