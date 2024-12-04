import './Pricing.css'; 
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: 47,
      period: 'year',
      features: [
        'Officia quaerat eaque neque',
        'Possimus aut consequuntur incidunt',
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Dolorum esse odio quas architecto sint',
      ],
      buttonText: 'Buy Now',
    },
    {
      title: 'Premium',
      price: 200,
      period: 'year',
      features: [
        'Officia quaerat eaque neque',
        'Possimus aut consequuntur incidunt',
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Dolorum esse odio quas architecto sint',
      ],
      buttonText: 'Buy Now',
  
    },
    {
      title: 'Professional',
      price: 750,
      period: 'year',
      features: [
        'Officia quaerat eaque neque',
        'Possimus aut consequuntur incidunt',
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Dolorum esse odio quas architecto sint',
      ],
      buttonText: 'Buy Now',
     
    },
  ];

  return (
    <div className="pricing-section">
      <h2>Session Pricing</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cumque quae temporibus tenetur vitae iusto suscipit alias.</p>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <h4>
              ${plan.price} <span>/{plan.period}</span>
            </h4>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}><IoMdCheckmark/>{feature}</li>
              ))}
            </ul>
            <button>{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
