import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>What do I do?</h2>
            <p>
              I build awesome stuff with React{' '}
              <span role="img" aria-label="lightning">
                😎
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              My passion is creating web-apps that help other people learn and
              build new things.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I bring positive mental energy and a team player attitude to every
              group I work with.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                aria-hidden="true"
                options={{
                  strings: [
                    'learning new things',
                    'exploring new places',
                    'solving complex problems',
                    'creating visually stimulating apps',
                    'trying new things',
                    'building new things',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              To live in the information age is a gift, we have the power to
              change the world easier than ever. With global communication
              technology at our finger tips we have the power to create and
              expand on every possible idea within human imagination. My mission
              is to turn ideas into reality and produce digital solutions that
              aid human progress. What will you do with this gift?
              {/* In 2018 I was tasked with building a simple Wix page for my sales
              team at an old job, I loved working on the project so much I
              deceided to keep learning more. Realizing my passion was in
              creating rather than sales; I decided to take the leap and become
              a full time web engineer.{' '} */}
            </p>
            <div className="bar-asth">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="#0899ba"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p className="mx-1">Portland, Oregon & Remote</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
