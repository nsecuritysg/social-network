import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Mesage/Message';
import { AddMessageForm } from './AddMessageForm/AddMessageForm';

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} icon={d.icon} />
  ));
  let messagesElements = state.messages.map(m => (
    <Message message={m.message} icon={m.icon} key={m.id} />
  ));

let addMessage = (value) => {
  props.sendMessage(value.newMessageBody);
}

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
