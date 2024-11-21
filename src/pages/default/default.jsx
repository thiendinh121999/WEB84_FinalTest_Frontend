import { Link } from 'react-router-dom';
import HeaderBar from "../../components/header";
import Sidebar from "../../components/sidebar";
import '../default/default.css'

const DefaultPage = () => {
    
    return(
        <div className="page-wrap">
            <HeaderBar/>
            <div className="sidebar-content-wrap">
                <Sidebar/>
                <div className="content-wrap">
                    <div className="default-text">Chào mừng đến hệ thống</div>
                </div>
            </div>
        </div>
        
    )
}

export default DefaultPage
