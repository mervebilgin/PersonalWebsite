import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Client</h5>
              <small>200+ Worlwide</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>          
          
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio odio nam sed non eligendi quod eum laudantium magni earum accusamus doloremque, 
            tempore aliquam? Quos a omnis at ratione repellat. Rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Est repudiandae pariatur maxime natus, exercitationem corrupti molestiae, sequi fugiat ad mollitia nihil dolores ipsum, 
            cumque aliquam maiores. Asperiores quas officia assumenda.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About