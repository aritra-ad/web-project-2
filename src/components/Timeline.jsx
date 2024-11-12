import React, { useEffect, useState } from 'react';
import './Timeline.css';
import play1 from '../assets/play1.jpg';
import play2 from '../assets/play2.jpg';
import play3 from '../assets/play3.jpg';

const Timeline = () => {


  const events = [
    {
      year: "2010",
      leftTitle: "HELL AND SILENCE",
      rightTitle: "Discover HELL AND SILENCE",
      description: "Hell and Silence is an EP by the Las Vegas rock group released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was mixed by Grammy-nominated engineer Mark Needham. To promote the album, the band performed five shows at SXSW 2010, including at the BMI Official Showcase. They were endorsed by Blue Microphones and toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010, New Noise Music Festival, Neon Reverb Festival, and Fork Fest.",
      image: play1
    },
    {
      year: "2012",
      leftTitle: "NIGHT VISIONS",
      rightTitle: "Explore NIGHT VISIONS",
      description: "Released on September 4, 2012, through Interscope Records, the extended version was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, along with English hip-hop producer Alex da Kid and Brandon Darner from The Envy Corps. It was mastered by Joe LaPorta. The album took three years to finish, with several tracks previously released on multiple EPs. Musically, Night Visions exhibits influences of folk, hip hop, and pop.",
      image: play2
    },
    {
      year: "2015",
      leftTitle: "SMOKE + MIRRORS",
      rightTitle: "Dive into SMOKE + MIRRORS",
      description: "Self-produced by members of the band along with English hip-hop producer Alexander Grant, known as Alex da Kid, the album was released by Interscope Records and Grant's KIDinaKORNER label on February 17, 2015, in the United States.",
      image: play3
    }
  ];
  
  const [isVisible, setIsVisible] = useState(Array(events.length).fill(false));



  const handleScroll = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        setIsVisible(prev => {
          const newVisibility = [...prev];
          newVisibility[index] = true;
          return newVisibility;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline container">
      {events.map((event, index) => (
        <div className={`timeline-item row align-items-start mb-5 ${isVisible[index] ? 'visible' : ''}`} key={index}>
          <div className="timeline-year col-md-4 text-start pe-4">
            <span>{event.year}</span>
            <div className="year-border"></div>
            <h3>{event.leftTitle}</h3>
          </div>
          <div className="timeline-details col-md-8 p-4 bg-white rounded shadow-sm">
            <h3>{event.rightTitle}</h3>
            <p>{event.description}</p>
            <div className="timeline-image position-relative">
              <img src={event.image} alt={event.rightTitle} className="img-fluid" />
              <button className="play-button btn position-absolute bottom-0 start-0">
                Play
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
