import React from 'react';
import './EventList.css'; // Import your custom CSS for additional styling

const EventList = () => {
  return (
    <section className="event-list-container image-side">
      <div className="container-fluid">
        <div className="row">
          {/* Left side background image */}
          <div className="col-md-6 "></div>

          {/* Right side events list */}
          <div className="col-md-6 content-side">
            <h2 className="upcoming-events-title">Upcoming Events</h2>
            
            <div className="event">
              <p className="event-title">Smoke + Mirrors Tour</p>
              <p className="event-location">2-2-15 Hokukoryokuchi, Konohana Ward, Osaka Prefecture</p>
              <div className="divider"></div>
              <p className="event-date">01.04.2015</p>
              <div className="divider"></div>
            </div>

            <div className="event">
              <p className="event-title">Smoke + Mirrors Tour</p>
              <p className="event-description">
                When the last-minute request is for a focus group, it’s usually a sign that the request originated in Marketing...
              </p>
              <div className="divider"></div>
              <p className="event-date">27.05.2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventList;
