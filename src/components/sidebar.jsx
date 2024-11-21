import React from "react";
import './components.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return(
        <div className="sidebar-wrap">
            <Link className="sidebar-item-wrap" to="/teacherlist">
                <img className="sidebar-icon" src={require('../img/teacher_icon.png')} />
                <div className="sidebar-item">Giáo viên</div>
            </Link>
            <Link className="sidebar-item-wrap" to="/position">
                <img className="sidebar-icon" src={require('../img/position_icon.png')} />
                <div>Vị trí công tác</div>
            </Link>
        </div>
    )
}

export default Sidebar