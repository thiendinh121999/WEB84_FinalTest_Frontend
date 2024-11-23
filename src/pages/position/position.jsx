import { Link } from 'react-router-dom';
import HeaderBar from "../../components/header";
import Sidebar from "../../components/sidebar";
import '../position/position.css'
import React, { useState, useEffect } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import axios from 'axios';
const PositionPage = () => {
    {/*Create position drawer*/}
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
      };
    const onClose = () => {
        setOpen(false);
      };
    const placement = "right"

    {/*Fetch teacher list*/}
    

    const [positionList, setPositionList] = useState([]); // Stores the fetched teacher data

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
    
    {/*Refresh button*/}
    const handleRefresh = () => {
        fetchPositions();
        console.log("Refresh button click");
      };
    
    {/*Create position*/}
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const name = document.getElementById('name').value;
        const code = document.getElementById('code').value;
        const description = document.getElementById('description').value;
        const isActive = true
        const isDeleted = false
      
      
        const formData = {
          name,
          code,
          description,
          isActive,
          isDeleted
        };
      
        try {
          const response = await axios.post('http://localhost:8080/position/create-position', formData);
          console.log('Position created successfully:', response.data.data);
          // Handle success, e.g., show a success message, redirect to another page
        } catch (error) {
          console.error('Error creating position:', error);
          // Handle error, e.g., display an error message to the user
        }
      };



    return(
        <div className="page-wrap">
            <HeaderBar/>
            <div className="sidebar-content-wrap">
                <Sidebar/>
                <div className="content-wrap">
                    <p className="text">Vị trí công tác</p>
                    <div className='list-wrap'>
                    <div className="list-controller">
                        <div className="list-controller-btn" onClick={handleRefresh}>
                            <img className="btn-icon" src={require('../../img/refresh_icon.png')}/>
                            Làm mới
                        </div>
                        <Button type="primary" onClick={showDrawer} className="list-controller-btn">
                            <img className="btn-icon" src={require('../../img/add_icon.png')}/>
                            Tạo    
                        </Button>
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
                        {positionList.map((item, index) => (
                            <div className="list-item-wrap" key={index}>
                                <div className="stt-clm">{index + 1}</div>
                                <div className="code-clm">{item.code}</div>
                                <div className="name-clm" >{item.name}</div>
                                <div className="status-clm">
                                    <p className="status-text">Đang hoạt động</p>
                                </div>
                                <div className="descript-clm">{item.description}</div>
                                <button>
                                    <img className="detail-btn-icon" src={require('../../img/setting_icon.png')}/>
                                </button>
                            </div>
                        ))
                        }
                        </div>
                    </div>
                </div>
                <Drawer
                title="Vị trí công tác"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}>
                    <div className="person-info-wrap">
                                            <form className="position-form-wrap" onSubmit={handleSubmit}>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Mã:</label>
                                                    <input type="text" className="info-input" id="code" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Tên:</label>
                                                    <input type="text" className="info-input" id="name" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span> Mô tả:</label>
                                                    <textarea type="message" className="info-input" id="description" required/>
                                                </div>
                                                <div className="form-item">
                                                    <label><span style={{ color: 'red' }}>*</span>Trạng thái:</label>
                                                    <select id="">
                                                        <option value="">Trạng thái hoạt động</option>
                                                        <option value="true">Hoạt động</option>
                                                        <option value="false">Ngừng</option>
                                                    </select>
                                                </div>
                                                <button className="save-btn" type="submit">
                                                    <img className="detail-btn-icon" src={require('../../img/save_icon.png')}/>
                                                     <p>Lưu</p>
                                                </button>
                                            </form>
                                        
                        </div>
                </Drawer>
            </div>
        </div>
        
    )
}

export default PositionPage