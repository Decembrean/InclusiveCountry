import React, { FC } from 'react'
import './News.css'
import './Container.css'

const News:FC = ({ children }) => {
  return (
      <div className="news">
          <span className="newsTitle">Новости</span>
          <div className="newsBlock">
              <div className="newsItem">
                  <span className="newsDate">01.09.2021</span>
                  <span>Текст новости Текст новости Текст новости Текст новости Текст новости Текст новости Текст новости...</span>
              </div>
              <hr/>
                  <div className="newsItem">
                      <span className="newsDate">01.09.2021</span>
                      <span>Текст новости Текст новости Текст новости Текст новости Текст новости Текст новости Текст новости...</span>
                  </div>
                  <hr/>
                      <div className="newsItem">
                          <span className="newsDate">01.09.2021</span>
                          <span>Текст новости Текст новости Текст новости Текст новости Текст новости Текст новости Текст новости...</span>
                      </div>
          </div>
      </div>
  )
}

export default News
