import React, { FC } from 'react'
import instagram from '../assets/instagram.png'
import vk from '../assets/vk.png'
import telegram from '../assets/telegram.png'
import phone from '../assets/phone.png'
import './Footer.css'
import './Container.css'

const Footer:FC = ({ children }) => {
  return (
    <div className="footer">
        <div className="menu">
            <span>Цели</span>
            <span>Проекты</span>
            <span>Новости</span>
            <span>Контакты</span>
        </div>
        <div className="links">
            <a href="https://www.instagram.com/innclusivecountry" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram"/>
            </a>
            <a href="https://vk.com/inclusivecountry" target="_blank" rel="noreferrer">
                <img src={vk} alt="VK"/>
            </a>
            <a href="https://t.me/inclusivecountry" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Telegram"/>
            </a>
            <img src={phone} alt="Phone"/>
            <span>+79773138506</span>
        </div>
        <div className="copyrights">
            <span>© “Инклюзивная страна”. Все права защищены</span>
        </div>
    </div>
  )
}

export default Footer
