import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Which techs do I know ?">
          <div className="answer">
            <p>Mainly frontend related techs, but that's not all !</p>
            <p>
                We can obviously start with the big 3 : 
                <br />
                -HTML
                -CSS/scss 
                -JavaScript,TypeScript, with Angular 2+ as main framework. React as a second, this website is made with it.
                <br />
                <p>Design skills:
                  <br />
                  -Illustrator -Photoshop -InDesign -Figma
                </p>
                
                <p>Backend and other skills:
                  <br />
                  -Node.js, with Express as a framework -PostgreSQL & MySQL -SCRUM -DevOps
                </p>
            
            </p>
          </div>
        </Toggle>
        <Toggle title="Career">
          <div className="answer">
            <p>My IT carrer is still short, it began after a choice of carrer reorientation. 
              <br />
              I feel like what I did before that
              could be interesting but I chose to only put what is IT related.
            </p>
            <p>
                I started Becode bootcamp in February 2022, and got hired in the company named Hidexe SA.
                <br />
                Where I am managing the frontend of the client side intranet with angular.
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Since I am still not a registered freelancer.</p>
            <p>
              It would require a huge proposition for me to make the step, as this website main purpose for now, is to be my portefolio. 
            </p>
          </div>
        </Toggle>
        <Toggle title="Me, myself and I">
          <div className="answer">
            <p>Here is a little about me:</p>
            <p>
              Hello to you, visitor, I am Philippe and I am 32. I live in Liège which is in Belgium.
              <br />I am a big fan of video games, mostly mmo rpgs, I really love the good old cinema, as David Lynch is my favorite producer.
              <br />I also love history, I spend some time on youtube on history channels. 
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
