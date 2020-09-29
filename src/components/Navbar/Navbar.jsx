import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}> News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.friends}>
            <div>Friends</div>
            <div>
                <img src="https://icon-icons.com/icons2/1879/PNG/32/iconfinder-4-avatar-2754580_120522.png" />
                <span>Sveta</span>
            </div>
            <div>
                <img src="https://icon-icons.com/icons2/1879/PNG/32/iconfinder-11-avatar-2754576_120520.png" />
                <span>Sasha</span>
            </div>
            <div>
                <img src="https://icon-icons.com/icons2/1879/PNG/32/iconfinder-2-avatar-2754578_120514.png" />
                <span>Victor</span>
            </div>
        </div>
    </nav>
}

export default Navbar;