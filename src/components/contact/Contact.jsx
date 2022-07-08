import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterLine} from 'react-icons/ri'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mervebilginnx@gmail.com</h5>
            <a href="mailto:mervebilginnx@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>bilginn.merve</h5>
            <a href="mhttps://www.instagram.com/bilginn.merve/">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiTwitterLine className='contact_option-icon'/>
            <h4>Twitter</h4>
            <h5>blgn_mrve</h5>
            <a href="https://twitter.com/blgn_mrve/">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact