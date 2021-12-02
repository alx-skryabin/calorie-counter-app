import React from 'react'
import Sidenav from './Sidenav'
import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <div className="h_nav z-depth-3">
        <div className="h_nav-line">
          <div className="h_nav-logo">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
              />
              <span>Health</span>
            </Link>
          </div>
          <div className="h_nav-menu">
            <a
              href="/"
              data-target="slide-out"
              className="sidenav-trigger waves-effect waves-light"
            >
              <i className="fas fa-sliders-h"/>
              <span>Menu</span>
            </a>
          </div>
        </div>
        <Sidenav/>
      </div>
    )
  }
}
