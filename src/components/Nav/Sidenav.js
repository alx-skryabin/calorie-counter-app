import React, {useEffect} from 'react'
import logo from '../../assets/img/logo.png'

export default function Sidenav() {
  useEffect(() => {
    window.M.Sidenav.init(document.querySelectorAll('.sidenav'))
  }, [])

  return (
    <ul id="slide-out" className="sidenav">
      <div>
        <li>
          <div className="user-view">
            <div className="background">
              <img
                src="https://static.tildacdn.com/tild3663-3763-4535-b139-363863386261/-/resize/504x/1587048064_11-p-khim.png"
                alt="bg"/>
            </div>
            <a href="/">
              <img className="circle"
                   src={logo}
                   alt="logo"
              />
            </a>
          </div>
        </li>
        <li><span className="subheader" style={{marginLeft: '30px'}}>Калькуляторы</span></li>
        <li className="nav-icon">
          <a href="/"><i className="fas fa-utensils"/> Калькулятор калорий</a>
        </li>
        <li className="nav-icon">
          <a href="/"><i className="fas fa-child"/> Индекс массы тела</a>
        </li>
        <li className="nav-icon">
          <a href="/"><i className="fas fa-weight"/> Идеальный вес</a>
        </li>
      </div>
      <div className="nav-feedback">
        <a href="https://github.com/alx-skryabin/health-calculators-app" target="_blank" rel="noreferrer">
          <span>Improvements? — </span>
          github <i className="fab fa-github"/>
        </a>
      </div>
    </ul>
  )
}
