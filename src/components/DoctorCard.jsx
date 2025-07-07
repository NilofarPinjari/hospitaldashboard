import "./DoctorCard.css";

const DoctorCard = ({name,speciality,time,img}) => (
    <div className="doctorcard">
    <img src={img} alt={name} className="doc-img" />
    <h5>{name}</h5>
    <p className="speciality">{speciality}</p>
    <div className="stars">★★★★★</div>
    <p className="time">{time}</p>
    </div>
);

export default DoctorCard;
