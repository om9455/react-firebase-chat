import React from "react";
import "./detail.css";
import { auth } from "../../lib/firebase";
const Details = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy and help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            
            <div className="photoItem">
              <div className="photoDetail">
                <img src="/bg.jpg" alt=""  />
                <span>photo_2024_2.png</span>
              </div>
            <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="/bg.jpg" alt=""  />
                <span>photo_2024_2.png</span>
              </div>
            <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="/bg.jpg" alt=""  />
                <span>photo_2024_2.png</span>
              </div>
            <img src="./download.png" alt="" className="icon"/>
            </div>
            
           
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};

export default Details;
