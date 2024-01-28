import React from 'react'

function Card({title,url,description}) {
    
  return <div className="col-lg-4 col-sm-6 mb-4">
  <div className="card h-100">
    <a href={url}><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href={url}>{title}</a>
      </h4>
      <p className="card-text">{description}</p>
    </div>
  </div>
</div>
}
export default Card