import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}><span>&lt;</span>Philippe Offermans<span>/&gt;</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
               <span>Frontend</span> Developer
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>at your service.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any website or design project that you have. I could provide my skills to accomplish your ideas.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
