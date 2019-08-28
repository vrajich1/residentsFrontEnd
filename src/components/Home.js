import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
    <Link to="/Residents">Residents</Link> { }
    <Link to="/Add">Add New Resident</Link>

    <p>Getting Old Sucks!</p>
    <img src="https://www.elderoptionsoftexas.com/images/maxine-gym.jpg" alt="funny-meme" width="500" height="600"></img>
    <img src="https://www.elderoptionsoftexas.com/images/joke-called-incontinence-hotline.jpg" alt="funny-meme2" width="500" height="600"></img>
   
    </div>
  );
}

export default Home;
