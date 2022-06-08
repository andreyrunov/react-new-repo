import React, { useState } from 'react';
import PostList from './Components/PostList';
import './styles/App.css'
import PostForm from './UI/PostForm';
import MySelect from './UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
      { id:1, title: 'sd', body: 'sdrv'},
      { id:2, title: 'fe', body: 'mhm'},
      { id:3, title: 'kio', body: 'aqaa'},
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список постов 1'/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      
      }
    </div>
  );
}

export default App;
