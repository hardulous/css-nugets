import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './Styles/Navbar.css'

const Navbar = () => {
  
  // this hook will tell wheter show sidebar or not
  const [sidebar, setsidebar] = useState(false);  

  // function to toggle sidebar
  const showSideBar = ()=>{
    setsidebar(!sidebar);
  }

  return (

    <>

      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSideBar} style={{color:'white'}} />  
        </Link>
      </div>
      
      {/* Now based on sidebar state we will show or remove this sidebar */}
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">

            <li className="navbar-toggle">
                <Link to="#" className="menu-bars" style={{color:'white'}}>
                    <AiOutlineClose  onClick={showSideBar}/>
                </Link>
            </li>

            {
                SidebarData.map((item,index)=>{

                    return <li className={item.cName} key={index}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>

                })
            }

        </ul>
      </nav>

    </>

  );
};

export default Navbar;

// To use icons install by npm install react-icons
