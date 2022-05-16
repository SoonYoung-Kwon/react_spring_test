import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                {props.userId === undefined ? <li><Link to="/signUp">SignUp</Link></li> : null}
                {props.userId === undefined ? <li><Link to="/signIn">SignIn</Link></li> : null}
                {props.userId !== undefined ? <li><Link to="/user/info">Info</Link></li> : null}
            </ul>
        </div>
    );
};

export default Header;