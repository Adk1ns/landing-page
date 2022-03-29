import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ExperienceCard from '../experienceCard/ExperienceCard'
import experienceData from '../../data/experience.json'

//TODO: link issue on RT
const Experience = () => {
  return (
    <Section title="Experience">
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className="par-padding">
              <p style={{ textAlign: 'center' }}>
                Checkout my projects on{' '}
                <a
                  href="https://github.com/Adk1ns"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: '#0be779',
                    cursor: 'pointer',
                  }}
                >
                  Github
                </a>
                .
              </p>
            </div>
            <p style={{ textAlign: 'center' }}>
              Additional non-coding experience can also be found on{' '}
              <a
                href="https://www.linkedin.com/in/jered-adkins-886457112/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0be779',
                  cursor: 'pointer',
                }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default Experience
