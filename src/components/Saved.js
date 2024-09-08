import React from 'react'

const Saved = ({saved}) => {
  return (
    <div className="AllCities">
    {saved.map((image) => (
      <div key={image.id} className="AllCitiesItem">
        <img 
          src={image.src.medium} 
          alt={image.alt} 
          className="citypic" 
          loading='lazy' 
          
        />
    </div>
    ))}
   
  </div>
  )
}

export default Saved