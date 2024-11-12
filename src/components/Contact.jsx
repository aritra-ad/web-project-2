import React from 'react';
import './Contact.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  return (
    <div className='contact-container'>
      <div className="row contact-form-section">
        <div className="col-lg-6  left-column"></div> {/* Blank left column */}
        <div className="col-lg-6 col-md-12 form-column"> {/* Right column with content */}
          <div className="form-content"> {/* Wrap the form and social icons */}
            <div className="contact-header">
              <h2>CONTACT</h2>
              <p>
                Canada Island, Division No. 23, Unorganized, MB, Canada<br />
                Tel: +1 (778) 288 5180
              </p>
            </div>
            <form className="contact-form">
              <div className="form-group form-row">
                <input type="text" className="form-control" placeholder="Name" />
                <a href="#facebook" className="social-link"><i className="fab fa-facebook-f"></i></a>
              </div>
              <div className="form-group form-row">
                <input type="email" className="form-control" placeholder="E mail" />
                <a href="#instagram" className="social-link"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="form-group form-row">
                <textarea className="form-control" placeholder="Message" rows="4"></textarea>
                <a href="#twitter" className="social-link"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="text-left"> {/* Align button to the left */}
                <button type="submit" className="btn send-btn">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
