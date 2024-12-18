import React from 'react'

const LocationMap = () => {
  return (
    <div className="flex justify-center items-center  border rounded-lg shadow-lg bg-white">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24303.180436239595!2d-0.119623119731147!3d51.50329990529601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbfbb93f57%3A0xddb5c39607347b4f!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1606485323456!5m2!1sen!2sus"
          className="w-full h-56 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
  )
}

export default LocationMap




