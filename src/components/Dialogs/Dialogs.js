import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Mesage/Message';

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

  // let newMessageElement = React.createRef();

  // let addMessage = () => {
  //   props.dispatch(addMessageActionCreator());
  // };

  // let onMessageChange = () => {
  //   let text = newMessageElement.current.value;
  //   let action = updateNewMessageTextActionCreator(text);
  //   props.dispatch(action);
  // };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
        {/* <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItem name={dialogData[1].name} id={dialogData[1].id} /> */}
      </div>
      <div className={s.messages}>
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

        {/* <Message message={messageData[0].message} />
        <Message message={messageData[1].message} /> */}
        {/* <div>
          <textarea
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>add Message</button>
        </div> */}
      </div>
    </div>
  );
};

export default Dialogs;
