import { Link } from 'react-router-dom';
import HeaderBar from "../../components/header";
import Sidebar from "../../components/sidebar";
import '../teacherlist/teacherlist.css'

const TeacherListPage = () => {
    
    return(
        <div className="page-wrap">
            <HeaderBar/>
            <div className="sidebar-content-wrap">
                <Sidebar/>
                <div className="content-wrap">
                    <p className="text">Giáo viên</p>
                    
                    <div className='list-wrap'>
                    <div className="list-controller">
                        <div className="searchbar">
                            <div className="search-icon">
                            <img src={require('../../img/search_icon.png')}/>
                         </div>
                            <div className="search-input">
                             <input type="text" placeholder="Tìm kiếm..."/>
                            </div>
                        </div>
                        <div className="list-controller-btn">
                            <img className="btn-icon" src={require('../../img/refresh_icon.png')}/>
                            Tải lại
                        </div>
                        <div className="list-controller-btn">
                            <img className="btn-icon" src={require('../../img/add_icon.png')}/>
                            Tạo mới   
                        </div>
                    </div>
                        <div className='list-header'>
                            <div className="code-clm">Mã</div>
                            <div className="teacher-clm" >Giáo viên</div>
                            <div className="qualify-clm">Trình độ (cao nhất)</div>
                            <div className="subject-clm">Bộ môn</div>
                            <div className="position-clm">TT Công tác</div>
                            <div className="adress-clm">Địa chỉ</div>
                            <div className="status-clm">Trạng thái</div>
                            <div className="action-clm">Hành động</div>
                        </div>
                        {/*Template list conent*/}
                        <div className="list-content-wrap">
                            <div className="list-item-wrap">
                                <div className="code-clm">01010101</div>
                                <div className="teacher-clm teacher-content-wrap" >
                                    <img className="teacher-avt" src={require('../../img/default_ava.jpg')}/>
                                    <div>
                                        <p className="teacher-name">Phạm Đức Hùng</p>
                                        <p className="subinfo">phamduchung@gmail.com</p>
                                        <p className="subinfo">058000111933</p>
                                    </div>
                                </div>
                                <div className="qualify-clm">
                                    <p className="info">Bậc:</p>
                                    <p className="info">Chuyên ngành:</p>
                                </div>
                                <div className="subject-clm">N/A</div>
                                <div className="position-clm">Can bo y Te</div>
                                <div className="adress-clm">Ha Noi</div>
                                <div className="status-clm">Dang hoat dong</div>
                                <button className="action-clm detail-btn">
                                    <img className="detail-btn-icon" src={require('../../img/eye_icon.png')}/>
                                    Xem chi tiet
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TeacherListPage