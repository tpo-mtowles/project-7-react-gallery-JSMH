import React from 'react';
import '../App.css';
import logo from './cam.png';

const Home = () => {
    return (
    <div id="home">
        <h1>React Photo Search</h1>
        <h3 id="welcome-author">Brought to you by JSMH Inc.</h3>
        <img src={logo} alt="camera"></img>
        <p>Welcome to our photo search site! Click one of our pre-set topics or search your own!</p>
    </div>)
}

export default Home;
