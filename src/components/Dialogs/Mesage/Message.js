import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <div>
    <img src={props.icon}></img>
    <div className={s.message}>{props.message}</div>
  </div>;
}

export default Message;
