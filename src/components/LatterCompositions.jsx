import React from 'react';
import './LatterCompositions.css'; // Custom CSS for media queries

const LatterCompositions = () => {
  return (
    <div className="container my-5">
      <h1 className="composition-title text-center">Latter Compositions</h1>
      <p className="composition-subtitle text-center">"It’s Time" was released as the lead single from Continued Silence and It’s Time, both extended plays preceding Night Visions' release.</p>

      <div className="row mb-4">
        {/* First Video Card */}
        <div className="col-md-12 mb-4">
          <div className="custom-card">
            <div className="row no-gutters">
              <div className="col-md-6 d-flex flex-column justify-content-between">
                <div className="card-body">
                  <p className="card-date">01.04.2015 - INDIAN SUMMER</p>
                  <h5 className="card-title">Sam Feldt ft. Kimberly Anne - Show Me Love (EDX's Indian Summer Remix)</h5>
                  <p className="card-text">"Radioactive" is a song recorded by American rock band Imagine Dragons...</p>
                </div>
                <div className="card-footer">
                  <a href="https://music.apple.com/us/music-video/show-me-love-edxs-indian-summer-remix/1597723391" className="itunes-btn" role="button">Visit the Apple-Music</a>
                  <div className="interaction-icons">
                    <span>12,534</span> <span role="img" aria-label="Comment">💬</span> <span role="img" aria-label="Celebrate">🙌</span> <span>36</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <iframe 
                  className="embed-responsive-item" 
                  src="https://www.youtube.com/embed/VIDEO_ID_1" 
                  allowFullScreen
                  title="Sam Feldt - Show Me Love"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Second Video Card */}
        <div className="col-md-12 mb-4">
          <div className="custom-card">
            <div className="row no-gutters">
              <div className="col-md-6">
                <iframe 
                  className="embed-responsive-item" 
                  src="https://www.youtube.com/embed/VIDEO_ID_2" 
                  allowFullScreen
                  title="James Bay - Let It Go"
                ></iframe>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-between">
                <div className="card-body">
                  <p className="card-date">03.04.2015 - CHILL NATION</p>
                  <h5 className="card-title">James Bay - Let It Go (Bearson Remix)</h5>
                  <p className="card-text">A soulful singer/songwriter from the UK...</p>
                </div>
                <div className="card-footer">
                  <a href="https://music.apple.com/in/album/let-it-go-bearson-remix-single/1434716330" className="itunes-btn" role="button">Visit the  Apple-Music</a>
                  <div className="interaction-icons">
                    <span>10,544</span> <span role="img" aria-label="Comment">💬</span> <span role="img" aria-label="Like">👍</span> <span>28</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Video Card */}
        <div className="col-md-12 mb-4">
          <div className="custom-card">
            <div className="row no-gutters">
              <div className="col-md-6 d-flex flex-column justify-content-between">
                <div className="card-body">
                  <p className="card-date">01.04.2015 - INDIAN SUMMER</p>
                  <h5 className="card-title">It's ok I'm ok</h5>
                  <p className="card-text">"Radioactive" is a song recorded by American rock band Imagine Dragons...</p>
                </div>
                <div className="card-footer">
                  <a href="https://music.apple.com/us/music-video/its-ok-im-ok/1767934738" className="itunes-btn" role="button">Visit the  Apple-Music</a>
                  <div className="interaction-icons">
                    <span>12,534</span> <span role="img" aria-label="Comment">💬</span> <span role="img" aria-label="Celebrate">🙌</span> <span>36</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <iframe 
                  className="embed-responsive-item" 
                  src="https://www.youtube.com/embed/VIDEO_ID_3" 
                  allowFullScreen
                  title="Sam Feldt - Show Me Love"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatterCompositions;
