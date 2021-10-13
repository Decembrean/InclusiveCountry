import React, { FC } from 'react'
import './Goals.css'
import './Container.css'

const Goals:FC = ({ children }) => {
  return (
    <div className="goals">
      <span className="title">Цель ассоциации</span>
      <span className="text">Проекты ассоциации направлены на обучение волонтёров, тренеров, обучение людей с ОВЗ новым навыкам и профессиям, понимание проблем людей с ОВЗ, формирование инклюзивного общества.</span>
    </div>
  )
}

export default Goals
