import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
// import { Bounce } from 'react-reveal'
// import { Link } from 'react-scroll'
// import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/IMG_1338.jpg'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
        {/*<Particles className="particles" params={config.particles} />*/}
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profile-pic"
              alt="Jered's profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Jered</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I like to write code.',
                    'I love learning new tech.',
                    'I love creating',
                    'I build interactive experiences.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
            {/*<Bounce cascade></Bounce>*/}
            <div className="scroll-down">
              {/*<Link*/}
              {/*  activeClass="active"*/}
              {/*  to="about"*/}
              {/*  spy={true}*/}
              {/*  smooth={true}*/}
              {/*  offset={-63}*/}
              {/*  duration={500}*/}
              {/*>*/}
              {/*  <ArrowDropDownCircleIcon*/}
              {/*    fontSize="large"*/}
              {/*    style={{ pointerEvents: 'fill', cursor: 'pointer' }}*/}
              {/*  />*/}
              {/*</Link>*/}
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
