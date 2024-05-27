import React from 'react'

const Gallery = ({data}) => {
  return (
    <div>
        <div className="row">
      {data.map((Image)=> 
      <div key={Image.id}>
        <div className="col-md-4">
        <img src={`https://farm${Image.farm}.staticflickr.com/${Image.server}/${Image.id}_${Image.secret}_m.jpg`} 
       height="200" width="250" alt={Image.title}/>      
        </div>
      </div>)}
      </div>
    </div>
  )
}

export default Gallery
