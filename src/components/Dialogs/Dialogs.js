import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Mesage/Message';
import { Field, reduxForm } from 'redux-form';

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
        <AddMessageReduxForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = props => {
  return(
    <form onSubmit={props.handleSubmit}> 
          <div>
            <Field  
              component='textarea' 
              name='newMessageBody' 
              placeholder='Enter your message' />
          </div>
          <div>
            <button>
              Send
            </button>
          </div>
        </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form:'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
