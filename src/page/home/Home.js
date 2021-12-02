import React from 'react'
import Title from '../../components/Content/title'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div className="h_app">
        <Title num="1"/>
        <div className="h_wrap-apps">
          <div className="h_apps-item">
            <Link to="/calorie" className="hoverable">
              <i className="fas fa-candy-cane"/> Калькулятор калорий
            </Link>
          </div>
          <div className="h_apps-item">
            <Link to="/imt" className="hoverable">
              <i className="fas fa-fire-alt"/> Индекс массы тела
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
