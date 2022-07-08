import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates libero, nam reprehenderit quae quasi modi culpa ratione aliquid tempora sapiente enim corporis quis? Exercitationem suscipit expedita reiciendis nemo tempore.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates libero, nam reprehenderit quae quasi modi culpa ratione aliquid tempora sapiente enim corporis quis? Exercitationem suscipit expedita reiciendis nemo tempore.'
  },
  {
    avatar: AVTR3,
    name: 'Kwanna Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates libero, nam reprehenderit quae quasi modi culpa ratione aliquid tempora sapiente enim corporis quis? Exercitationem suscipit expedita reiciendis nemo tempore.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates libero, nam reprehenderit quae quasi modi culpa ratione aliquid tempora sapiente enim corporis quis? Exercitationem suscipit expedita reiciendis nemo tempore.'
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials_container'>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt='' />
                </div>
                <h5 className='client_name'>name</h5>
                <small className='client_review'>{review}</small>
              </article>
            )
          })
        }



      </div>


    
    </section>
  )
}

export default Testimonials