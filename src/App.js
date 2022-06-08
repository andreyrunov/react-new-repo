import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import './styles/App.css'
import MyInput from './UI/button/input/MyInput';
import MyButton from './UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
      { id:1, title: 'Javascript', body: 'Description'},
      { id:2, title: 'Javascript 2', body: 'Description'},
      { id:3, title: 'Javascript 3', body: 'Description'},
  ]);

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={title} 
          onChange={event => setTitle(event.target.value)} 
          type='text' placeholder='Название поста' 
        />
        <MyInput 
          value={body} 
          onChange={event => setBody(event.target.value)} 
          type='text' 
          placeholder='Описание поста' 
        />
        <MyButton onClick={addNewPost}>Создание поста</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1'/>
    </div>
  );
}

export default App;
