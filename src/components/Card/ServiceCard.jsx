import React from 'react'

import './ServiceCard.css'

function ServiceCard({icon,title,text}) {
  return (
    <div className='service__card'>
        <div className="service__icon">
            {icon}
        </div>
        <h1 className=''>
            {title}
        </h1>
        <p>
            {text}
        </p>
        ServiceCard

    </div>
  )
}

export default ServiceCard