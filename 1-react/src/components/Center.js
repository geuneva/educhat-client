import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import { LuLogIn } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

const Center = () => {
  
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const GoHome = ()=>{
      //Home키로 돌아갈 수 있는 기능
    };
    const Options = ()=>{
      // 환경설정 할 수 있는 기능
      navigate("/txt");
    };
    
    const handleButtonLogOut = ()=>{
      // 로그아웃 할 수 있는 기능
      setIsLoggedIn(false);
    };
        
    const handleButtonLogIn = ()=>{
        // 로그인 화면으로 넘어가는 기능
        setIsLoggedIn(true);
        navigate("/login");

    };
    const Logo = () => (
      <svg className="icon" x="0px" y="0px" viewBox="0 0 24 24">
        <path fill="transparent" d="M0,0h24v24H0V0z" />
        <path
          fill="#FFF"
          d="M20.5,5.2l-1.4-1.7C18.9,3.2,18.5,3,18,3H6C5.5,3,5.1,3.2,4.8,3.5L3.5,5.2C3.2,5.6,3,6,3,6.5V19  c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6,20.8,5.6,20.5,5.2z M12,17.5L6.5,12H10v-2h4v2h3.5L12,17.5z M5.1,5l0.8-1h12l0.9,1  H5.1z"
        />
      </svg>
    );

    return (
        <div className="app">
          <div className="left">
              <div className='upper'>
                <h2> EduCHAT:에듀챗 </h2>
                <div className='home_icon' onClick={GoHome}>
                  <FaHome /> Home
                </div>
              </div>
              <div className='under'>
                <div className='envoption'>
                    <SlOptions onClick={Options}/> 환경설정
                </div>
                <div className='login_button'>
                  {isLoggedIn ? (
                    <>
                      <LuLogOut onClick={handleButtonLogOut} /> 로그아웃
                    </>
                  ) : (
                    <>
                      <LuLogIn onClick={handleButtonLogIn} /> 로그인
                    </>
                  )}
                </div>
              </div>
          </div>
              
          <div className="center_upload">
              <h2 style={{fontSize:"50px"}}>EduCHAT</h2>
              <label className="preview">
                  <input type="file" className="file" /> 
                  <Logo />
                  <p className="preview_msg">클릭 혹은 파일을 이곳에 드롭하세요.</p>
                  <p className="preview_desc">(지원 포맷: .pptx, .dotx, .pdf, .txt)</p>
              </label>
          </div>
      </div>
    );
  
}

export default Center;