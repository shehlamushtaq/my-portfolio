import React from 'react';
import SingleProjectCard from '../components/SingleProjectCard';
import Pic1 from '../images/project-01.jpg';
import Pic2 from '../images/project-02.jpg';
import Pic3 from '../images/project-03.jpg';

const Home = () => {
    return (
        <div className="mx-auto">
        
            <SingleProjectCard img={Pic1} num="1" title="Project 01" desc="This is a sample description about project 01 made by me. Hope you like this project." />
            <SingleProjectCard img={Pic2} num="2" title="Project 02" desc="This is a sample description about project 02 made by me. Hope you like this project." />
            <SingleProjectCard img={Pic3} num="3" title="Project 03" desc="This is a sample description about project 03 made by me. Hope you like this project." />
        </div>
    )
}

export default Home
