import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { Box } from "@mui/material";
import { Margin } from "@mui/icons-material";
import avatarGirl from "../../assets/avatar-girl.png";
import { useSelector, useDispatch } from 'react-redux';


const LoginPage = () => {
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPhone, setIsFocusedPhone] = useState(false);
  const [isFocusedMessage, setIsFocusedMessage] = useState(false);

  const mode = useSelector(state => state.mode);
  useEffect(() => {
    console.log(mode);
  }, [mode])
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const fractionX = clientX / innerWidth; // 0 - 1
    const fractionY = clientY / innerHeight; // 0 - 1

    const pupilX = -10 + fractionX * 20;
    const pupilY = -10 + fractionY * 20;

    document.querySelectorAll(".pupil").forEach((el) => {
      el.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleFocus = (field) => {
    switch (field) {
      case "username":
        setIsFocusedUsername(true);
        break;
      case "email":
        setIsFocusedEmail(true);
        break;
      case "phone":
        setIsFocusedPhone(true);
        break;
      case "message":
        setIsFocusedMessage(true);
        break;
      default:
        break;
    }
  };

  const handleBlur = (field) => {
    switch (field) {
      case "username":
        setIsFocusedUsername(false);
        break;
      case "email":
        setIsFocusedEmail(false);
        break;
      case "phone":
        setIsFocusedPhone(false);
        break;
      case "message":
        setIsFocusedMessage(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <div className="" style={{ margin: "5px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="image-container">
              <img src={avatarGirl} alt=" Image" />
              <div className="overlay-content">
                <div
                  style={{
                    height: "25px",
                    width: "35px",
                    backgroundColor: "#4f2103",
                    borderRadius: "50%",
                    marginRight: "7px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="pupil"
                    style={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    height: "25px",
                    width: "35px",
                    backgroundColor: "#4f2103",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="pupil"
                    style={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="mouth"></div>
            </div>
          </div>
          <img src="img/shape.png" className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h3 className="title" style={{ color: mode === 'dark' ? 'white' : 'black' }}
>Be social and anonymous</h3>
              <p className="text" style={{ color: mode === 'dark' ? 'white' : 'black' }}
>
            Hey! this website is designed developed by vanshita Roopchandani from scretch, Hope you will like this 
              </p>

              <div className="info">
                <div className="information" style={{ color: mode === 'dark' ? 'white' : 'black' }}
>
                <img src="img/email.png" className="icon" alt="" />
                  <p>Blog about this website</p>
                </div>
                <div className="information" style={{ color: mode === 'dark' ? 'white' : 'black' }}
>
                  <img src="img/email.png" className="icon" alt="" />
                  <p>vanshitaroopchandani7@gmail.com</p>
                </div>
                {/* <div className="information">
                  <img src="img/phone.png" className="icon" alt="" />
                  <p>123-456-789</p>
                </div> */}
              </div>

              <div className="social-media" >
                <p style={{ color: mode === 'dark' ? 'white' : 'black' }}
>Connect with me :</p>
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              {/* <span className="circle one"></span> */}
              {/* <span className="circle two"></span> */}

              <form action="index.html" autocomplete="off">
                <h3 className="title">Register yourself</h3>
                <div
                  className={`input-container ${
                    isFocusedUsername ? "focus" : ""
                  }`}
                >
                  <input
                    type="text"
                    className="input-login"
                    onFocus={() => handleFocus("username")}
                    onBlur={() => handleBlur("username")}
                  />
                  <label>Username</label>
                  <span>Username</span>
                </div>
                <div
                  className={`input-container ${
                    isFocusedEmail ? "focus" : ""
                  }`}
                >
                  <input
                    type="text"
                    className="input-login"
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                  />
                  <label>Email</label>
                  <span>Email</span>
                </div>
                <div
                  className={`input-container ${
                    isFocusedPhone ? "focus" : ""
                  }`}
                >
                  <input
                    type="text"
                    className="input-login"
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                  />
                  <label>Phone</label>
                  <span>Phone</span>
                </div>
                <div
                  className={`input-container ${
                    isFocusedMessage ? "focus textarea" : "textarea"
                  }`}
                >
                  <textarea
                    type="textarea"
                    className="input-login"
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                  ></textarea>
                  <label>A message</label>
                  <span>A message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
