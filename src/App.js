import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import './styles/App.css'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import PostForm from './UI/PostForm';

function App() {
  const [posts, setPosts] = useState([
      { id:1, title: 'Javascript', body: 'Description'},
      { id:2, title: 'Javascript 2', body: 'Description'},
      { id:3, title: 'Javascript 3', body: 'Description'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title='Список постов 1'/>
    </div>
  );
}

export default App;
