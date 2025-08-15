import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../slices/posts/postsSlice";

export const Posts = () =>{
  const dispatch = useDispatch();

  const [postId, setPostId] = useState('');

  const postStatus = useSelector((state) => state.posts.status);
  const postData = useSelector((state) => state.posts.post);
  const errorMessage = useSelector((state) => state.posts.error);


  const handleFetchPost = () => {
    if (postId.trim() !== '') {
      dispatch(fetchPostById(postId));
    }
  };

  return (
    <div>
      <h2>Получить пост по ID</h2>
      <input
        type="number"
        placeholder="введите id поста"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={handleFetchPost}>Получить пост</button>
      {postStatus === 'loading' && <p>Загрузка...</p>}
      {postStatus === 'succeeded' && postData && (
        <div>
          <h3>{postData.title}</h3>
          <p>{postData.body}</p>
        </div>
      )}

      {postStatus === 'failed' && (
        <p>Ошибка: {errorMessage}</p>
      )}

    </div>
  )
}