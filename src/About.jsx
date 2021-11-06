import React from 'react'
import Common from "./Common.js"
import web from "../src/images/3.png";

const About = () => {
  return (

    <>
    <Common 
    name='Welcome to About page' 
    imgsrc={web}
    visit="/contact" 
    btname="Contact Now"/>
    </>
  );
};



export default About;