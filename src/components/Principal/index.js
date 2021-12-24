import React, { useState } from 'react';

import './style.css';

import thumb from '../../img/thumb.webp';
import thumb_anim from '../../img/thumb_anim.webp';
import thumb2 from '../../img/thumb2.webp';
import thumb2_anim from '../../img/thumb2_anim.webp';
import pic from '../../img/pic.jpg';

import Video from "./video.js";

let videos = [
  {
    id: 0,
    thumb,
    thumb_anim,
    link: '#',
    title: 'HOMEM-ARANHA 3 | CENAS PÓS-CRÉDITOS EXPLICADAS',
    views: '91K',
    age: '3 days',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
  {
    id: 1,
    thumb: thumb2,
    thumb_anim: thumb2_anim,
    link: '#',
    title: 'GAVIÃO ARQUEIRO | EPISÓDIO FINAL',
    views: '73K',
    age: '1 month',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
  {
    id: 0,
    thumb,
    thumb_anim,
    link: '#',
    title: 'HOMEM-ARANHA 3 | CENAS PÓS-CRÉDITOS EXPLICADAS',
    views: '91K',
    age: '3 days',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
  {
    id: 1,
    thumb: thumb2,
    thumb_anim: thumb2_anim,
    link: '#',
    title: 'GAVIÃO ARQUEIRO | EPISÓDIO FINAL',
    views: '73K',
    age: '1 month',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
  {
    id: 0,
    thumb,
    thumb_anim,
    link: '#',
    title: 'HOMEM-ARANHA 3 | CENAS PÓS-CRÉDITOS EXPLICADAS',
    views: '91K',
    age: '3 days',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
  {
    id: 1,
    thumb: thumb2,
    thumb_anim: thumb2_anim,
    link: '#',
    title: 'GAVIÃO ARQUEIRO | EPISÓDIO FINAL',
    views: '73K',
    age: '1 month',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
  {
    id: 0,
    thumb,
    thumb_anim,
    link: '#',
    title: 'HOMEM-ARANHA 3 | CENAS PÓS-CRÉDITOS EXPLICADAS',
    views: '91K',
    age: '3 days',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
  {
    id: 1,
    thumb: thumb2,
    thumb_anim: thumb2_anim,
    link: '#',
    title: 'GAVIÃO ARQUEIRO | EPISÓDIO FINAL',
    views: '73K',
    age: '1 month',
    profile: {
      pic,
      name: 'Gustavo Cunha',
      link: '#'
    }
  },
]

export default function Principal() {

  return (
    <div className="principal">
      <ul className="tags">
        <li className="item">All</li>
        <li className="item">Chess</li>
        <li className="item">NBA</li>
        <li className="item">Superheroes</li>
        <li className="item">Computers</li>
        <li className="item">Gaming</li>
        <li className="item">Naruto</li>
        <li className="item">Anime</li>
        <li className="item">Chess</li>
        <li className="item">NBA</li>
        <li className="item">Superheroes</li>
        <li className="item">Computers</li>
        <li className="item">Gaming</li>
        <li className="item">Naruto</li>
        <li className="item">Anime</li>
        <li className="item">Chess</li>
        <li className="item">NBA</li>
        <li className="item">Superheroes</li>
        <li className="item">Computers</li>
        <li className="item">Gaming</li>
        <li className="item">Naruto</li>
        <li className="item">Anime</li>
      </ul>

      <div className="videos-container">
        { videos.map(video => {
          return (
            <Video {...video} ></Video>
          )
        })}
      </div>
    </div>
  )
}