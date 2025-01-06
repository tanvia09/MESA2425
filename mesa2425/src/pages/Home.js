import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        {/* Device Image */}
        <div className="Home-image">
          <img src="/path/to/device-image.jpg" alt="PUT DEVICE IMAGE HERE" className="Device-img" />
        </div>

        {/* Description Box */}
        <div className="Home-description">
          <h2>About us</h2>
          <p>Mindlink's mission is to support and assist people with daily tasks. Mindlink started as 
            a way to help people with alzheimer's and dementia by using AI image recognition
            to keep track of their daily tasks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
