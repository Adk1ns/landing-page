import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import creationloop from '../../images/creationLoop.gif'
import leaderboard from '../../images/leaderboard.gif'
import colorsApp from '../../images/colors.gif'

const Contact = () => {
  return (
    <Section title="Showcase">
      {/* <ContactForm /> */}
      <h4 className="links">Samples of my work</h4>
      <Bounce cascade>
        <div className="links">
          {/* <a
            href="https://github.com/Adk1ns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/jered-adkins-886457112/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a> */}

          {/* <div className="video-responsive">
            <iframe
              src="https://youtube.com/embed/DAkl_UXsw-w"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div> */}

          <div className="showcase">
            <div className="showcase-gif">
              <a href="https://bettertogether.group/" target="_blank">
                <img
                  className="showcase-gif"
                  src={leaderboard}
                  alt="Better Together"
                />
              </a>
              <h3>Leaderboard</h3>
              <p>Group score board for Better Together</p>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-gif">
              <a href="https://github.com/Adk1ns/color-app" target="_blank">
                <img className="showcase-gif" src={colorsApp} alt="Git hub" />
              </a>
              <h3>Color Picker App</h3>
              <p>A color picker currently in development</p>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-gif">
              <a href="https://bettertogether.group/" target="_blank">
                <img
                  className="showcase-gif"
                  src={creationloop}
                  alt="Better Together Link"
                />
              </a>
              <h3>Creation Loop</h3>
              <p>Productivity tools for Better Together</p>
            </div>
          </div>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
