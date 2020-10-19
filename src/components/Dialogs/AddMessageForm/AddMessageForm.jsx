import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

export const AddMessageForm = reduxForm({
  form: 'dialogAddMessageForm',
})((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
});
