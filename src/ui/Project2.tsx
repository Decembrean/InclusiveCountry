import React, { FC } from 'react'
import pic1 from '../assets/delopic1.png'
import pic2 from '../assets/delopic2.png'
import pic3 from '../assets/delopic3.png'
import './Project2.css'
import './Container.css'

const Project2:FC = ({ children }) => {
  return (
      <div className="project2">
          <span className="title">Дело в мелочах</span>
            <div className="movies">
              <div className="movieItem">
                  <a href="https://vk.com/video-201007302_456239025" target="_blank" rel="noreferrer">
                      <img src={pic1} alt="Дело в мелочах фото 1"/>
                  </a>
              </div>
                <div className="movieItem">
                    <a href="https://vk.com/video-201007302_456239029" target="_blank" rel="noreferrer">
                        <img src={pic2} alt="Дело в мелочах фото 2"/>
                    </a>
                </div>
                <div className="movieItem">
                    <a href="https://vk.com/video-201007302_456239031" target="_blank" rel="noreferrer">
                        <img src={pic3} alt="Дело в мелочах фото 3"/>
                    </a>
                </div>
              </div>
      </div>
  )
}

export default Project2
