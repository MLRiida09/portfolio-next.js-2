import React from 'react'
import Image from 'next/image'
import { contactme } from '@/public/assets/assets';


function Footer() {
  return (
    <div>
      <div className="home-contact-footer">
        <div className="contact-links">
          {contactme.map((contact, index) => (
            <a 
              key={index}
              href={contact.link} 
              className="contact-link" 
              target={contact.link.startsWith('mailto:') || contact.link.startsWith('tel:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={contact.title}
            >
              <Image 
                src={contact.icon} 
                alt={contact.title}

                className="contact-icon"
              />
              <div className="contact-info">
                <span className="contact-title">{contact.title}</span>
                <span className="contact-description">{contact.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer




