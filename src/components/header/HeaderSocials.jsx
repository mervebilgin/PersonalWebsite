import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/merve-bilgin-a35a9117a/'><BsLinkedin/></a>
        <a href='https://github.com/mervebilgin'><BsGithub/></a>
        <a href='https://medium.com/@mervebilgin'><BsMedium/></a>

        {/* 
        <a href='https://github.com/mervebilgin' target="_blank"><BsGithub/></a>
        <a href='https://medium.com/@mervebilgin' target="_blank"><BsMedium/></a> */}
    </div>
  )
}

export default HeaderSocials