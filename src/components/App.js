import React, { useEffect, useState } from 'react';
import '../styles/App.css'
import { marked } from 'marked';


const App = () => {
    const [text,setText]  = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
    }
    useEffect(()=>{
       marked.setOptions({
        breaks: true,
       })
    },[]);
  return (
    <div className='parent'>
      <div className='writing'>
        <textarea type='text' value={text} onChange={handleChange} />
      </div>
      <div className='printing'>
      <h2 id='view' dangerouslySetInnerHTML={{__html:marked(text)}}></h2>
      </div>
    </div>
  );
}

export default App;
