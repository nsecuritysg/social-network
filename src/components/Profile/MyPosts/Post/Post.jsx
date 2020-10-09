import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/b6/9c/e8/b69ce8c466a2e8678ac7bc7fb879f1d9.png" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
