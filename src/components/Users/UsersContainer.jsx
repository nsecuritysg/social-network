import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toogleIsFetching,
  unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&${
        this.props.pageSize
      }`
    ).then(response => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = pageNumber => {
    this.props.toogleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&${this.props.pageSize}`
    ).then(response => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => dispatch(followAC(userId)),
//     unfollow: userId => dispatch(unfollowAC(userId)),
//     setUsers: users => dispatch(setUsersAC(users)),
//     setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
//     setTotalUsersCount: totalCount => dispatch(setTotalUsersCountAC(totalCount)),
//     toogleIsFetching: isFetching => dispatch(toogleIsFetchingAC(isFetching))
//   };
// };

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
  }
)(UsersContainer);
