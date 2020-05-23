import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import style from './header.module.scss'

const Header = () => {
    return (
        <div className={style.headerBlock}>
            <h3 className={style.headerTitle}>
                <a href="#">Game of Thrones DB</a>
            </h3>
            <Nav className={style.headerList}>
                <NavLink className="headerLink" href="#">Characters</NavLink>
                <NavLink className="headerLink" href="#">Houses</NavLink>
                <NavLink className="headerLink" href="#">Books</NavLink>
            </Nav>
        </div>

    );
};

export default Header;