import React from "react";
import './components.css';
import { Link } from 'react-router-dom';

const HeaderBar = () => {

    return(
        <div className="header-wrap">
            <div className="header-item-group">
                <img className="logo" src={require('../img/logo-truong.jpg')} alt="Truong ABC"/>
                <div className="header-text">
                    SCHOOL SYSTEM
                </div>
            </div>
            <Link to="/login" id="login">
              ĐĂNG NHẬP
            </Link>
        </div>
    )
}

export default HeaderBar