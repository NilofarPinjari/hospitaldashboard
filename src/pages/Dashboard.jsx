import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import StatsCard from '../components/StatsCard'
import DoctorCard from '../components/DoctorCard'
import ScheduleCard from '../components/ScheduleCard'


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

     <div className="dashboard-main">
  <Header />

  <div className="main">
    <div className="main-left">
      <div className="welcomecard"> 
        <div className="welcometext">

          <p>Welcome</p>

          <h2>David Anderson</h2>
          <br />
          <p>To keep the body in good health is a duty which we owe to ourselves and otherwise we shall not be able to keep our mind strong and clear.</p>
        </div>
        <div className="image-bg">
          <img src="image1.png" alt="" />
        </div>
      </div>

      <div className="statsrow">
    <StatsCard title="Appointments"  count={105} color="green" icon="calendar" />
<StatsCard title="Urgent Resolve"    count={40}  color="red"   icon="alert"    />
<StatsCard title="Available Doctors" count={37}  color="blue"  icon="user"     />

      </div>

      <h3 className="title">Today's Doctors</h3>
      <div className="doctor">
        <DoctorCard name="Dr. James Wilson" speciality="Physician" time="8:00 am – 2:00 pm" img="/doctor1.png" />
           <DoctorCard name="Dr. Eric Rodriquez" speciality="Cardiology" time="10:00 am – 2:30 pm" img="/doctor4.jpg" />
        <DoctorCard name="Dr. Lora Wallace" speciality="Dentist" time="2:00 pm – 6:00 pm" img="/doctor3.jpg" />
      </div>
    </div>

    <div className="main-right">
      
      <ScheduleCard />
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard;