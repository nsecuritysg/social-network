import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/AuthReducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authMe().then(
      data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data; //???
          this.props.setAuthUserData(id, email, login);
        }
      }
      // )
      // .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      // .then(response => {
      //   this.props.setUserProfile(response.data);
      // }
    );
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profilePage.profile
});

export default connect(
  mapStateToProps,
  { setAuthUserData }
)(HeaderContainer);
