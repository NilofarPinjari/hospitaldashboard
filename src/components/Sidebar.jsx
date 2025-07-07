import {
  FiHome,
  FiCalendar,
  FiActivity,

  FiUsers,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';
import { LuMessageSquareText ,LuSquarePen  } from 'react-icons/lu';
import { FaHeartbeat } from "react-icons/fa";

import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
    
     
      <nav className="nav">
         

     <button className="item logo"><FaHeartbeat /></button>

        <button className="item "><FiHome /></button>
        <button className="item"><FiCalendar /></button>
        <button className="item"><FiActivity /></button>
        <button className="item"><LuMessageSquareText /></button>
         <button className="item"><FiUsers /></button> 
        <button className="item"><LuSquarePen /></button>
        <button className="item"><FiSettings /></button>
      </nav>

      <button className="item logout"><FiLogOut /></button>
    </aside>
  );
};

export default Sidebar;
