import React from 'react'

function ClassCard () {
  return (
    <div className="column is-3 mb-4">
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={require('../../assets/images/16.jpg')} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <p class="title is-size-5">John Smith</p>
        <p class="subtitle is-size-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
    </div>
  )
}

export default ClassCard 