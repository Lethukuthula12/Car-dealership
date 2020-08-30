import React from "react";

import "../homepage.styles.scss";

function Homepage() {
  return (
    <div>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <div className="title">
                <h1 className="title">HATS</h1>
                <span className="subtitle"> SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">
                <h1 className="title">JACKETS</h1>
                <span className="subtitle"> SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">
                <h1 className="title">SNEAKERS</h1>
                <span className="subtitle"> SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">
                <h1 className="title">WOMEN'S</h1>
                <span className="subtitle"> SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <div className="title">
                <h1 className="title">MAN'S</h1>
                <span className="subtitle"> SHOP NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Homepage;