import React from "react";
import "./Home.css";
import AmazonBackground from "./assets/images/AmazonBackground.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={AmazonBackground} alt="" />
      </div>
    </div>
  );
}

export default Home;
