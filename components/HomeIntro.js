"use client";
import React from 'react';
import { assets, MyInfo, contactme } from "@/public/assets/assets";
import CVButton from "./CVButton";
import Image from 'next/image';
import Languages from './Languages';

function HomeIntro({ theme, assets }) {
  return (
    <div className="home-intro">
      <h3>
        I&apos;m <span className="highlight">{MyInfo.name}</span>
      </h3>
      <p>{MyInfo.description}</p>
      <CVButton theme={theme} assets={assets} />
      <Languages theme={theme} assets={assets} />
      {/* Contact Footer */}
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
  );
}

export default HomeIntro;