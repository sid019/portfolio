import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Turn all your design into reality. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Best product ideas. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Design services </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Best analysis of product. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design review</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive user-friendly interface. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built your dream website . </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Effective development . </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Web Applications. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Best frontend Design. </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Event Management</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Best planning decisions as per needs. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Recruiting Events. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Team Building Events. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Confrences </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Personal Events </p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services