import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Center from './components/Center.js';
import SLogIn from './components/SLogin.js';
import Txt from './components/Txt.js';
import Summary from './components/Summary.js';
import Chat from './components/Chat.js';
import Question from './components/Question.js';


<<<<<<< HEAD

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="white-text">EDUCHAT에 오신것을</div>
        <div className="white-text">환영합니다</div>
      </div>
      <div className="login-box1">

        <h4 >다음으로 로그인하기</h4>
        <div className="login-options">
          <button className="kakao-login">
            <img src='./images/kakaologin.png' alt="KaKao로 로그인" />
          </button>
          <button className="google-login">
            <img src='./images/googlelogin.png' alt="Google로 로그인하기" />

          </button>
        </div>
        <div className="copyright">
          로그인 할 경우 <span className="privacy-policy">개인정보방침</span>에 동의합니다
        </div>
      </div>
    </div>


  );
=======
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false, // 파일 제출 여부
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Center />} />
            <Route path="/login" element={<SLogIn />} />
            <Route path="/center" element={<Center />} />
            <Route path="/txt" element={<Txt/>} />
            <Route path="/summary" element={<Summary/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="/question" element={<Question/>} />
          </Routes>
        </Router>
      </div>
    );
  }
>>>>>>> 614a7d489e812681d6af98779f6c2485a5542811
}