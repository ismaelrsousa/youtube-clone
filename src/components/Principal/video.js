import React, { useState } from 'react';

export default function Video(props) {
  let [hovered, setHovered] = useState(false);

  return (
    <a href={props.link} onMouseEnter={() => setHovered(true) } onMouseLeave={() => setHovered(false)} className="video" key={props.id}>
      <div className="thumb-container">
        <img src={props.thumb} alt="" className="thumb" />
        {hovered ? <img src={props.thumb_anim} alt="" className="thumb_anim" loading="lazy" /> : null }
      </div>

      <div className="meta">
        <div className="profile-pic">
          <img src={props.profile.pic} alt="" className="pic" />
        </div>

        <h3 className="title">{props.title}</h3>

        <a href={props.profile.link} className="name">{props.profile.name}</a>

        <p className="desc">
          <span className="views">{props.views} views</span>
          <span className="age">{props.age} ago</span>
        </p>
      </div>
    </a>
  )
}