import React from 'react';
import { connect } from 'react-redux';
import { News } from './News';

let mapStateToProps = state => {
    return {
        newsPage: state.newsPage
    };
  };

export const NewsContainer = connect(mapStateToProps)(News);

