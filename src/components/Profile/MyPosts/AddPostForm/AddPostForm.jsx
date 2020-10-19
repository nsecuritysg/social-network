import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLengthCreator,
} from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder="Post message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'profileAddNewPostForm',
})(AddNewPostForm);
