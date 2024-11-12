import React from 'react';
import './ConcertTours.css';

const ConcertTours = () => {
  return (
    <div className="concert-tours-page">

      {/* Section 1: Concert Tour Title and Description */}
      <div className="container concert-tours-header">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="concert-tours-title">Concert Tours</h2>
            <p className="concert-tours-description">
              Before the release of Night Visions, Imagine Dragons made appearances on American radio and television to promote their extended play, Continued Silence, and debut single "It’s Time."
              The band performed "It’s Time" on the July 16, 2012 airing of NBC late-night talk show The Tonight Show with Jay Leno.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Tour Date, Title, Description, and Button */}
      <div className="container-fluid tour-details-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="tour-details">
                {/* Left Column: Date, Title, Date Range, Description, and Button */}
                <div className="tour-date-info">
                  <p className="tour-date">03.08.2018</p>
                  <h4 className="tour-title">Smoke + Mirrors Tour</h4>
                  <h3 className="tour-date-range">2018–present</h3>
                  <p className="tour-description">
                    At Lollapalooza in Sao Paulo, Brazil, the last date on the Into the Night Tour, the band announced a rest, and complemented saying, “This is our last show for a while, and had no better place to end this tour.”
                  </p>
                  <button className="buy-button">Buy Online</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ConcertTours;
