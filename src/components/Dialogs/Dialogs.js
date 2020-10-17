import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Mesage/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} icon={d.icon} />
  ));
  let messagesElements = state.messages.map(m => (
    <Message message={m.message} icon={m.icon} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
