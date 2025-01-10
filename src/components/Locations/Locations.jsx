import React from 'react';
import './Locations.css';


const Locations = () => {
  const locationDetails = [
    {
      city: 'Richmond, TX',
          //   address: '4125 Williams Way Blvd, ste 140, Richmond, TX 77469',
      address: 'TBD',
      phone: '(510) 557-2129',
      email: 'coffeeclubandco@outlook.com',
      hours: 'Mon-Fri: 6am - 8pm, Sat-Sun: 8am - 10pm',
      mapLink: 'https://www.google.co.in/maps/place/4125+Williams+Way+Blvd,+Richmond,+TX+77469/@29.5589868,-95.7174674,16z/data=!3m1!4b1!4m6!3m5!1s0x8640e21127d453db:0xd397b77879dce37c!8m2!3d29.5589868!4d-95.7148871!16s%2Fg%2F11c88n3f0_?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D',

    },
  ];

  return (
    <div className="locations">
      <h2>Our Location</h2>
      {locationDetails.map((location, index) => (
        <div className="location-card" key={index}>
          <h3>{location.city}</h3>
          <p><strong>Address:</strong> {location.address}</p>
          <p><strong>Phone:</strong> {location.phone}</p>
          <p><strong>Email:</strong> <a href={`mailto:${location.email}`}>{location.email}</a></p>
          <p><strong>Hours:</strong> {location.hours}</p>
          <p><a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">
            <span className="map-pin-icon">📍</span> View on Google Maps
          </a></p>
        </div>
      ))}
    </div>
  );
};

export default Locations