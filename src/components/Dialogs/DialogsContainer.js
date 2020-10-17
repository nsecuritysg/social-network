import React from 'react';
import {
  sendMessage,
  updateNewMessageBody
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let AuthRedrectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  {updateNewMessageBody, sendMessage}
)(AuthRedrectComponent);

export default DialogsContainer;
