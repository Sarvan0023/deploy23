import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h2>GET IN TOUCH</h2>
        <h1>Contact Me</h1>
      </div>
      <div className="contact-container">
        <div className="form-container">
          <form>
            <div className="input-group">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="Write your message." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Need to Know More on Details. Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolores, distinctio! Harum
            quibusdam nisi, illum nulla aspernatur aut quibusdam nisi.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
