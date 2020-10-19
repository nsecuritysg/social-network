import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import userPhoto from '../../assets/images/user.png';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
      <div className={styles.loginBlock}>
        <img src={userPhoto} />
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
