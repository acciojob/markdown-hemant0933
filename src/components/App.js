import React, { useEffect, useState } from 'react';
import '../styles/App.css'
import { marked } from 'marked';

const App = () => {
    const [text,setText]  = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
    }
    useEffect(()=>{
        const markdowntext = marked(text);
        document.getElementById('view').innerHTML = markdowntext;
    },[text])
  return (
    <div className='parent'>
      <div className='writing'>
        <textarea type='text' value={text} onChange={handleChange} />
      </div>
      <div className='printing'>
      <h2 id='view'></h2>
      </div>
    </div>
  );
}

export default App;
