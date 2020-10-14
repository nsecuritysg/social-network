import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import userPhoto from '../../assets/images/user.png';

const Header = props => {
  return (
    <header className={styles.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
      <div className={styles.loginBlock}>
        <img
          src={
            // props.profile ? props.profile :
            userPhoto
          }
        />
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
