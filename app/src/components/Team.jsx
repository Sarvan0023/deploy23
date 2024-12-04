import './Team.css'; 
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    { name: 'Jean Smith', role: 'Skateboard Trainer', image: 'https://preview.colorlib.com/theme/skater/images/person_1.jpg', socials: { twitter: '#', facebook: '#', instagram: '#' } },
    { name: 'Bob Carry', role: 'Skateboard Trainer', image: 'https://preview.colorlib.com/theme/skater/images/person_2.jpg', socials: { twitter: '#', facebook: '#', instagram: '#' } },
    { name: 'Ricky Fisher', role: 'Skateboard Trainer', image: 'https://preview.colorlib.com/theme/skater/images/person_1.jpg', socials: { twitter: '#', facebook: '#', instagram: '#' } },
  ];

  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere at delectus laudantium, deserunt, atque eveniet.</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-socials">
              <a href={member.socials.facebook}><FaFacebookSquare/></a>
              <a href={member.socials.twitter}><FaTwitterSquare/></a>
              <a href={member.socials.instagram}><FaInstagramSquare/></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
