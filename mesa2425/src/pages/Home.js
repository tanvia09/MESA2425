import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        {/* Device Image */}
        <div className="Home-image">
          <img src="/path/to/device-image.jpg" alt="Device" className="Device-img" />
        </div>

        {/* Description Box */}
        <div className="Home-description">
          <h2>Device Description</h2>
          <p>This is where the description of the MindLink device goes.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
