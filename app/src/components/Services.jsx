import "./Services.css";
import { GiSkateboard } from "react-icons/gi";
import { MdOutlineSkateboarding } from "react-icons/md";
import { TbSkateboard } from "react-icons/tb";
import { GiLuckyFisherman } from "react-icons/gi";
import { TbSkateboarding } from "react-icons/tb";

const Services = () => {
  const services = [
    {
      title: "Skate for Beginner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequatur mollitia facilis.",
      icon:<GiSkateboard /> , 
    },
    {
      title: "Personal Training",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequatur mollitia facilis.",
      icon: <MdOutlineSkateboarding />,
    },
    {
      title: "Best Skater",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequatur mollitia facilis.",
      icon: <TbSkateboard/>,
    },
    
  ];
  const servicess = [
    {
        title: "Advance Skater",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequatur mollitia facilis.",
        icon: <GiSkateboard />,
      },
      {
        title: "Novice to Pro Skater",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequatur mollitia facilis.",
        icon: <GiLuckyFisherman/>,
      },
      {
        title: "Skate Boarding",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequatur mollitia facilis.",
        icon: <TbSkateboarding/>,
      },
  ];

  return (
    <section className="services">
      <h2 className="services-title">SERVICES</h2>
      <p className="services-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at
        delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos
        rerum inventore.
      </p>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="services-container">
        {servicess.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  
};

export default Services;
