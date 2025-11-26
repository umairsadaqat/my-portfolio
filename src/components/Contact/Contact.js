import React from "react";
import "./Contact.css";
import locationImg from "../../assets/location.jpg"
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a5e8fe2-139a-4645-b4eb-a07b01ab96c8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="contact-section" id="contact">

      <h2 className="contact-title">Get in <span>Touch</span></h2>

      <div className="contact-box">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="info-box">
            <img src={mailIcon} className="icon" alt="email" />
            <div className="info-content">
              <label>Email</label>
              <p>umairsadaqat98@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <img src={phoneIcon} className="icon" alt="phone" />
            <div className="info-content">
              <label>Phone</label>
              <p>+92 319 3375484</p>
            </div>
          </div>

          <div className="info-box">
            <img src={locationIcon} className="icon" alt="location" />
            <div className="info-content">
              <label>Location</label>
              <p>Touheed Abad, Bharakahu, Islamabad</p>
            </div>
          </div>

          {/* Location Screenshot Box */}
          <div className="location-box">
            <img
              src={locationImg}
              alt="My Location"
              className="location-img"
            />
            <a
              href="https://maps.app.goo.gl/TfZXhfZJw7QtwhTt8"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              View on Google Maps
            </a>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-box">
            <label>Your Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-box">
            <label>Your Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-box">
            <label>Subject</label>
            <input type="text" name="subject" required />
          </div>

          <div className="form-box textarea-box">
            <label>Your Message</label>
            <textarea name="message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
          <span className="result">{result}</span>
        </form>

      </div>
    </div>
  );
};

export default Contact;