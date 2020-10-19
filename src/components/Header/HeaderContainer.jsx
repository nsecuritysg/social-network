import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {
  setAuthUserData,
  getAuthUserData,
  logout,
} from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
