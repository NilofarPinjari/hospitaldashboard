import './Header.css';
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
const Header = () => (
  <header className="header">

    <h2>Dashboard</h2>
  
    <div className="head">
      <span className="icon"><FaSearch />
</span>
      <span className="icon"><IoMdNotifications /></span>
      <span className="icon"><IoSettings /></span>
      <img src="/avatar.jpg" alt="profile" className="avatar" />
    </div>
  </header>
);

export default Header;