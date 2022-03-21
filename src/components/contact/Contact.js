import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'

const Contact = () => {
  return (
    <Section title="Video">
      {/* <ContactForm /> */}
      <h4 className="links">Get to know me...</h4>
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
          <div className="video-responsive">
            <iframe
              src="https://youtube.com/embed/DAkl_UXsw-w"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
