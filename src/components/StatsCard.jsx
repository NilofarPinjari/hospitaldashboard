import {FiCalendar,FiAlertCircle,FiUser} from 'react-icons/fi'; 
import './StatsCard.css';

const iconMap = {
  calendar: <FiCalendar />,
  alert:    <FiAlertCircle />,
  user:     <FiUser />
};

const StatsCard = ({ title, count, color, icon = 'calendar' }) => {
  return (
    <div className="card">
    <div className={`icon ${color}`}>{iconMap[icon]}</div>

    <div className="info">
        <h4 className={color}>{count}</h4>
        
        <p>{title}</p>
        <span className="tag">today</span>
     
    </div>
    </div>
  );
};

export default StatsCard;
