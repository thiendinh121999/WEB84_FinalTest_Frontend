import HeaderBar from "../../components/header";
import Sidebar from "../../components/sidebar";
import '../teacherlist/teacherlist.css'
import React, { useState, useEffect } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import {Pagination} from 'antd';
import axios from 'axios';
const TeacherListPage = () => {
    
    {/*Create teacher drawer*/}
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
      };
    const onClose = () => {
        setOpen(false);
      };
    const placement = "bottom"
    
    

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    

    {/*Fetch teacher list*/}
    

    const [teacherList, setTeacherList] = useState([]); // Stores the fetched teacher data

    const fetchTeachers = async () => {
     try {
      const response = await axios.get('http://localhost:8080/teacher/getlist-teacher',
        {params: {
            page: currentPage,
            pageSize: pageSize
        }
     }); 
        console.log(response.data);
        setTeacherList(response.data.data);
        setTotalPages(response.data.total);
        } catch (error) {
      console.error(error);}
    };

    console.log("totalPages=",totalPages)
    
    useEffect(() => {
        fetchTeachers()
      }, [currentPage, pageSize]);
    
    {/*Refresh button*/}
    const handleRefresh = () => {
        fetchTeachers();
        console.log("Refresh button click");
      };
    
    {/*Pagination*/}

    const handlePageChange = (page, pageSize) => {
            setCurrentPage(page);
            setPageSize(pageSize);
          };
      
    
    
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, teacherList.length);
    
    const currentItems = teacherList.slice(startIndex, endIndex);
    
    
    {/*const [teacherList, setTeacherList] = useState([]);
    
    useEffect(() => {
        const fetchTeachers = async () => {
          try {
            const response = await axios.get('http://localhost:8080/teacher/getlist-teacher');
            console.log(response)
            setTeacherList(response.data.data);
          } catch (error) {
            console.error('Error fetching teachers:', error);
          }
        };
    
        fetchTeachers();
        
      }, []);

    console.log("teacherList",teacherList)

    const handleRefresh = (e) => {
        console.log("Refresh button click")
      };*/}

    {/*Fetch position list*/}
    const [positionList, setPositionList] = useState([]);

    const fetchPositions = async () => {
     try {
      const response = await axios.get('http://localhost:8080/position/getlist-position'); 
        console.log(response.data);
        setPositionList(response.data.data);
        } catch (error) {
      console.error(error);}
    };
    
    useEffect(() => {
        fetchPositions()
      }, []);
    
    

    console.log("positionList",positionList)

    {/*Create new teacher*/}

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;
        const identity = document.getElementById('identity').value;
        const address = document.getElementById('address').value;
        const teacherPositionsId = '670b2ded6dce2acd384c6c5f';
        const isDeleted= false;
        const role= "TEACHER";
        const userId = "670df3b6ccc16cc87ce2b86f";
        const isActive= true;
        const degrees = {
             type : "Professor",
             major : "Kinh tế đối ngoại",
             school : "Đại học kinh tế quốc dân",
             year: 2021,
             isGraduated : true,
        }
      
        const formUser = {
          name,
          phoneNumber,
          email,
          identity,
          dob,
          isDeleted,  
          role,
          address
        };

        const formTeacher ={
            userId,
            isActive,
            isDeleted,
            teacherPositionsId,
            degrees,
            address

        }


      
        try {
          const responseUser = await axios.post('http://localhost:8080/user/create-user', formUser);
          console.log('User created successfully:', responseUser.data.data);
          // Handle success, e.g., show a success message, redirect to another page
          const responseTeacher = await axios.post('http://localhost:8080/teacher/create-teacher', formTeacher);
          console.log('Teacher created successfully:', responseTeacher.data.data);
        } catch (error) {
          console.error('Error creating teacher or user:', error);
          // Handle error, e.g., display an error message to the user
        }
      };


    return(
        <div className="page-wrap">
            <HeaderBar/>
            <div className="sidebar-content-wrap">
                <Sidebar/>
                <div className="content-wrap">
                    <p className="text">Giáo viên</p>
                    
                    <div className='list-wrap'>
                    <div className="list-controller">
                        {/*Pagegination here*/}
                        <Pagination
                            current={currentPage}
                            total= {totalPages}
                            pageSize={pageSize}
                            onChange={handlePageChange}
                            showSizeChanger
                        />
                        <div className="searchbar">
                            <div className="search-icon">
                            <img src={require('../../img/search_icon.png')}/>
                         </div>
                            <div className="search-input">
                             <input type="text" placeholder="Tìm kiếm..."/>
                            </div>
                        </div>
                        <button className="list-controller-btn" onClick={handleRefresh}>
                            <img className="btn-icon" src={require('../../img/refresh_icon.png')}/>
                            Tải lại
                        </button>
                        <Button type="primary" onClick={showDrawer} className="list-controller-btn">
                            <img className="btn-icon" src={require('../../img/add_icon.png')}/>
                            Tạo mới   
                        </Button>
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
                        {/*render data here*/}

                        <div className="list-content-wrap">
                            {currentItems.map((item) => (
                            <div className="list-item-wrap" key={item._id}>
                                <div className="code-clm">{item.code}</div>
                                <div className="teacher-clm teacher-content-wrap" >
                                    <img className="teacher-avt" src={require('../../img/default_ava.jpg')}/>
                                    <div>
                                        <p className="teacher-name">{item.userId.name}</p>
                                        <p className="subinfo">{item.userId.email}</p>
                                        <p className="subinfo">{item.userId.phoneNumber}</p>
                                    </div>
                                </div>
                                <div className="qualify-clm">
                                    <p className="info">Bậc: {item.degrees[0].type}</p>
                                    <p className="info">Chuyên ngành: {item.degrees[0].major}</p>
                                </div>
                                <div className="subject-clm">N/A</div>
                                <div className="position-clm">{item.teacherPositionsId[0].name}</div>
                                <div className="adress-clm">{item.userId.address}</div>
                                <div className="status-clm">
                                    <p className="status-text">Đang hoạt động</p>
                                </div>
                                <button className="action-clm detail-btn">
                                    <img className="detail-btn-icon" src={require('../../img/eye_icon.png')}/>
                                    <p>Xem chi tiết</p>
                                </button>
                            </div>
                            ))
                            }
                            
                            <Drawer
                            title="Tạo mới giáo viên"
                            closable={false}
                            onClose={onClose}
                            open={open}
                            placement={placement}
                            key={placement}
                            >
                                <form className="create-teacher-content-wrap">
                                    <div className="create-teacher-upper-wrap">
                                        <div className="avatar-upload-wrap">
                                            <img className="create-teacher-ava" src={require('../../img/default_ava.jpg')}/>
                                            <div className="ava-upload-btn">
                                                <img className="ava-upload-icon" src={require('../../img/upload_icon.png')}/>
                                                <p> Chọn ảnh</p>
                                            </div>
                                        </div>
                                        <div className="person-info-wrap">
                                            <div className="form-title">
                                                <span className="form-title-text">Thông tin cá nhân</span>
                                                <hr class="line-through-line"/>
                                            </div>
                                            <div className="form-wrap">
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Họ và tên:</label>
                                                    <input type="text" className="info-input" id="name" placeholder="VD: Nguyễn Văn A" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Ngày sinh:</label>
                                                    <input type="date" className="info-input" id="dob" placeholder="Chọn ngày sinh" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Số điện thoại</label>
                                                    <input type="text" className="info-input" id="phoneNumber" placeholder="Nhập số điện thoại" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Email:</label>
                                                    <input type="email" className="info-input" id="email" placeholder="example@gmail.com" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Số CCCD:</label>
                                                    <input type="text" className="info-input" id="identity" placeholder="Nhập số CCCD" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Địa chỉ</label>
                                                    <input type="text" className="info-input" id="address" placeholder="Địa chỉ thường trú" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="person-info-wrap">
                                            <div className="form-title">
                                                <span className="form-title-text">Thông tin công tác</span>
                                                <hr class="line-through-line"/>
                                            </div>
                                            <div className="form-wrap-position">
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Vị trí công tác:</label>
                                                    <select id="position">
                                                        <option value="">Chọn vị trí công tác</option>
                                                        {positionList.map((item) => (
                                                            <option value={item._id}>{item.name}</option>
                                                        ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="person-info-wrap">
                                            <div className="form-title">
                                                <span className="form-title-text">Học vị</span>
                                                <hr class="line-through-line"/>
                                            </div>
                                            <form className="form-wrap">
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Bậc học vị:</label>
                                                    <input type="text" className="info-input" id="type" placeholder="Nhập bậc học vị" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Chuyên ngành:</label>
                                                    <input type="text" className="info-input" id="major" placeholder="Nhập chuyên ngành" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Trường:</label>
                                                    <input type="text" className="info-input" id="school" placeholder="Nhập tên trường" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Tốt nghiệp:</label>
                                                    <select id="isGraduated">
                                                        <option value="">Trạng thái tốt nghiệp</option>
                                                        <option value="true">Đã tốt nghiệp</option>
                                                        <option value="false">Chưa tốt nghiệp</option>
                                                    </select>
                                                </div>
                                            </form>
                                        <button className="save-btn" type="submit" onClick={handleSubmit}>
                                            <img className="detail-btn-icon" src={require('../../img/save_icon.png')}/>
                                            <p>Lưu</p>
                                        </button>
                                        </div>
                                </form>
                            </Drawer>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
    )
}

export default TeacherListPage