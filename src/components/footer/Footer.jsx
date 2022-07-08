import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>BILGIN</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="<#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">C ontact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/merve-bilgin-a35a9117a/'><BsLinkedin/></a>
        <a href='https://github.com/mervebilgin'><BsGithub/></a>
        <a href='https://medium.com/@mervebilgin'><BsMedium/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Merve Bilgin. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer