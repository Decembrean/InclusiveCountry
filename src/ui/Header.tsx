import React, { FC } from 'react'
import eye from '../assets/eye.png'
import logo from '../assets/logo.png'
import './Container.css'
import './Header.css'

// interface HeaderProps {
//     color: string
//     text: string
// }

const Header: FC = ({ children }) => {
  return (
     <div className="header">
         <div className="blindSupport">
             <img className="eye" src={eye} alt="Глаз"/>
             <span>Версия для слабовидящих</span>
         </div>
         <img className="logo" src={logo} alt="Логотип"/>
         <div className="maintitle">
             <span>Ассоциация молодёжных инклюзивных общественных объединений</span>
         </div>
     </div>
  )
}
export default Header
