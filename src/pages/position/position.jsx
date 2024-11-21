import { Link } from 'react-router-dom';
import HeaderBar from "../../components/header";
import Sidebar from "../../components/sidebar";
import '../position/position.css'

const PositionPage = () => {
    
    return(
        <div className="page-wrap">
            <HeaderBar/>
            <div className="sidebar-content-wrap">
                <Sidebar/>
                <div className="content-wrap">
                    <p className="text">Vị trí công tác</p>
                    <div className='list-wrap'>
                    <div className="list-controller">
                        <div className="list-controller-btn">
                            <img className="btn-icon" src={require('../../img/refresh_icon.png')}/>
                            Làm mới
                        </div>
                        <div className="list-controller-btn">
                            <img className="btn-icon" src={require('../../img/add_icon.png')}/>
                            Tạo    
                        </div>
                        </div>
                        <div className='list-header'>
                            <div className="stt-clm">STT</div>
                            <div className="code-clm">Mã</div>
                            <div className="name-clm" >Tên</div>
                            <div className="status-clm">Trạng thái</div>
                            <div className="descript-clm">Mô tả</div>
                        </div>
                        {/*Template list conent*/}
                        <div className="list-content-wrap">
                            <div className="list-item-wrap">
                                <div className="stt-clm">1</div>
                                <div className="code-clm">CVT</div>
                                <div className="name-clm" >Tên</div>
                                <div className="status-clm">Trạng thái</div>
                                <div className="descript-clm">Mô tả</div>
                                <button>
                                    <img className="detail-btn-icon" src={require('../../img/setting_icon.png')}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PositionPage