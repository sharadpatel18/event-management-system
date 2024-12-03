import React from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-container">
        <div className="home-details">
          <h1>
            The most <b>powerful</b> free resistration for big events
          </h1>
          <ol type="1">
            <li>
              <b>1. Streamline Your Events:</b> Simplify planning, organizing,
              and executing events with our all-in-one management platform.
            </li>
            <li>
              <b>2. Seamless Coordination:</b> From guest lists to real-time
              updates, stay in control of every detail effortlessly.
            </li>
            <li>
              <b>3. Elevate Experiences:</b> Create memorable events with tools
              designed to maximize efficiency and engagement.
            </li>
          </ol>
          <div>
            <button>See All Events</button>
            <a>About Us</a>
          </div>
        </div>
        <div className="home-events">
          <div className="first">
            <div className="part">
              <img src={image1} alt="err" />
            </div>
            <div className="part">
              <img src={image2} alt="err" />
            </div>
            <div className="part">
              <img src={image3} alt="err" />
            </div>
          </div>
          <div className="second">
            <div className="part">
              <img src={image4} alt="err" />
            </div>
            <div className="part">
              <img src={image5} alt="err" />
            </div>
            <div className="part">
              <img src={image6} alt="err" />
            </div>
          </div>
          <div className="third">
            <div className="part">
              <img src={image7} alt="err" />
            </div>
            <div className="part">
              <img src={image8} alt="err" />
            </div>
            <div className="part">
              <img src={image9} alt="err" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
