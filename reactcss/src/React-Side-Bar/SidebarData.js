import React from 'react'
import { FaBars, FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from "react-icons/io";

// here it contain data or icon to be shown in sideBar and added in li of ul tag
export const SidebarData =  [
    
  {
    title:'Home',
    path:'/',
    icon:<AiFillHome/>,
    cName:'nav-text'
  },
  
  {
    title:'Reports',
    path:'/reports',
    icon:<IoIosPaper/>,
    cName:'nav-text'
  },
  
  {
    title:'Products',
    path:'/products',
    icon:<FaCartPlus/>,
    cName:'nav-text'
  },
  
  {
    title:'Team',
    path:'/team',
    icon:<IoMdPeople/>,
    cName:'nav-text'
  },
  
  {
    title:'Messages',
    path:'/messages',
    icon:<FaEnvelopeOpenText/>,
    cName:'nav-text'
  },
  
  {
    title:'Support',
    path:'/supports',
    icon:<IoMdHelpCircle/>,
    cName:'nav-text'
  }

]
