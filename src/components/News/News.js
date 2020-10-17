import React from 'react';
import styles from './News.module.css';

export const News = props => {
    let state = props.newsPage;
    let newsElements = state.news.map(n => (    
        <New key={n.id} new={n} />
    ));

    return (
        <div>
            <h2>News</h2>
            {newsElements}
            <p className={styles.empty}></p>
        </div>
    )
}

export const New = props => {
    return ( 
    <div>
        <h3>{props.new.title}</h3>
        <div className={styles.imgCenter}>
            <img src={props.new.image}/>
        </div>
        <p>{props.new.content}</p>
    </div>
    )
}
