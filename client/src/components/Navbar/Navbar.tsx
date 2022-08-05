import React from 'react';
import './NavBar.min.css';

const Navbar = () => {
  return (
    <div className="navbarContainer" >
        <div className="leftSide">
            <div className="textWrapper">
                <p className="helloText">Hello</p>
                <p className="nameText">Sagar Shaw &#128075;</p>
            </div>
        </div>
        <div className="rightSide">
          <div className="profileImg">
            <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Navbar;