import React, {useEffect} from 'react'
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom'

export default function Sidenav() {
  let sidenav = null

  useEffect(() => {
    let $sidenav = document.querySelectorAll('.sidenav')
    sidenav = window.M.Sidenav.init($sidenav)[0]
  }, [sidenav])

  function closeNav() {
    sidenav.close()
  }

  return (
    <ul id="slide-out" className="sidenav">
      <div>
        <li>
          <div className="user-view" onClick={closeNav}>
            <div className="background">
              <img
                src="https://static.tildacdn.com/tild3663-3763-4535-b139-363863386261/-/resize/504x/1587048064_11-p-khim.png"
                alt="bg"/>
            </div>
            <Link to="/">
              <img className="circle"
                   src={logo}
                   alt="logo"
              />
            </Link>
          </div>
        </li>
        <li><span className="subheader" style={{marginLeft: '30px'}}>Калькуляторы</span></li>
        <li className="nav-icon" onClick={closeNav}>
          <Link to="/calorie"><i className="fas fa-candy-cane"/> Калькулятор калорий</Link>
        </li>
        <li className="nav-icon" onClick={closeNav}>
          <Link to="/imt"><i className="fas fa-fire-alt"/> Индекс массы тела</Link>
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
