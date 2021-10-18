import React, { FC } from 'react'
import schLogo from '../assets/schlogo.png'
import deloLogo from '../assets/delologo.png'
import immersLogo from '../assets/immerslogo.png'
import './Projects.css'
import './Container.css'

const Projects:FC = ({ children }) => {
  return (
      <div className="projects">
          <span className="title">Проекты ассоциации</span>
            <div className="projectItems">
              <div className="project">
                  <img className="schLogo" src={schLogo} alt="Логотип школы"/>
                      <span className="projectName">Школа инклюзивных тренеров</span>
                      <ol>
                          <li>Лекции на понимание инвалидности.</li>
                          <li>Курсы по уходу и оказанию медицинской помощи от Европейского центра долгосрочной опеки.</li>
                          <li>Практика по организации инклюзивных мероприятий и программа развития компетенций в сфере event
                              (блок обучения в формате лекций и практических занятий).
                          </li>
                      </ol>
              </div>
                <div className="project">
                    <img className="deloLogo" src={deloLogo} alt="Логотип дела"/>
                        <span className="projectName">Дело в мелочах</span>
                        <ol>Серия познавательных видео:
                            <li>Увеличение уровня конкурентоспособности молодежи с инвалидностью через создание доступного
                                информационного контента.</li>
                            <li>Привлечение внимания к вопросам инклюзии не через негатив, а через позитив.</li>
                            <li>Развитие soft skills.</li>
                        </ol>
              </div>
                <div className="project">
                    <img className="immersLogo" src={immersLogo} alt="Логотип выставки"/>
                        <span className="projectName">Иммерсивная выставка</span>
                        <ol>
                            <li>Опыт Центра современного искусства «Марс».</li>
                            <li>Выставка Reset.</li>
                            <li>Иммерсивная выставка – синтез современных технологий, социологии и искусства.</li>
                            <li>5 пространств – Про зрение, Про звук, Про движение, Про мысль, Про киборгов.</li>
                        </ol>
              </div>
                  </div>
      </div>
  )
}

export default Projects
